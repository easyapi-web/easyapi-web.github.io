# Config Rules

EasyApi uses a rule-based configuration system that lets you customize how APIs are parsed and exported.

## When Do You Need a Custom Rule?

EasyApi understands standard HTTP frameworks out of the box — [Spring MVC](/framework/springboot), [Spring WebFlux](/framework/springboot-webflux), [JAX-RS](/framework/jaxrs) (Quarkus / Jersey), and [Feign](/framework/springboot#feign-support) clients. For these, export works without any rule files.

You only need a custom rule when something changes the **request or response contract invisibly** — something the scanner cannot see from the source code alone. Common examples:

- A servlet filter or interceptor that requires a header on every request
- A `@ControllerAdvice` / `ResponseBodyAdvice` that wraps every response in a common envelope
- A custom argument resolver that injects a hidden parameter
- A non-standard annotation that should be treated as a controller marker

For these cases, use the **built-in AI Assistant** or the **external skill** to detect the pattern and generate the rule for you. See [Ways to Write Rules](#ways-to-write-rules) below.

## Ways to Write Rules

There are two ways to author custom rules. Both share the same knowledge base, so the rule content they produce is consistent.

| Approach | Where it runs | Best for |
|----------|---------------|----------|
| [Built-in AI Assistant](#write-rules-with-the-built-in-ai-assistant) | Inside IntelliJ | Users who want everything inside the IDE |
| [External Skill](#write-rules-with-the-external-skill) | Any AI coding assistant with file access | Users already invested in an external AI workflow |

### Write Rules with the Built-in AI Assistant

EasyApi ships a built-in AI assistant that can author rules for you from inside IntelliJ. It reads your existing rules, inspects the project source, proposes new rule content, and saves it to a rule file you choose.

#### 1. Configure an AI provider

Open **Settings → EasyApi → AI** and configure a provider:

| Setting | Description |
|---------|-------------|
| **Provider** | The AI provider to use (OpenAI, Anthropic, Google Gemini, Azure OpenAI, Ollama, DeepSeek, Groq, Mistral, xAI, and many OpenAI-compatible hosts). A "Custom" option lets you point at any OpenAI-compatible endpoint. |
| **Base URL** | The provider's API endpoint. Pre-filled from the provider default; override if you use a proxy or self-hosted endpoint. |
| **Model** | The model identifier to use. Pre-filled from the provider default; override to use a different model. |
| **API Key** | Stored securely in the IDE's password store (never written to plain-text settings). Required for providers that need one. |
| **Request Timeout (sec)** | HTTP timeout for each AI request. |
| **Max Requests** | Maximum requests per assistant turn. The assistant asks you to confirm when the limit is reached. |

Click **Test Connection** to verify the provider works before using the assistant.

#### 2. Open the Rules tab

Open **Settings → EasyApi → Rules**. The tab has three sub-tabs:

- **Project** — rule files in `<project>/.easyapi/`
- **Global** — rule files in `~/.easyapi/` (applied to every project on the machine)
- **Remote** — remote config file URLs (see [Remote Config](/settings/remote-config))

Edit an existing rule file or create a new one.

#### 3. Use Chat or Magic

From the rule-file edit dialog (or the bottom action bar of the Rules tab), click:

- **Chat** — opens an inline AI panel. Describe what you want in natural language (e.g., "Add a header `X-Tenant-Id` to every endpoint in the `admin` package"). The assistant proposes rule content; review the proposal, edit if needed, and click **Save…** to write it to a Global or Project rule file.
- **Magic** — runs a built-in review-and-detect instruction. The assistant scans your project for common custom framework patterns (filters, interceptors, response wrappers, argument resolvers, meta-annotations) that lack a rule, and proposes rules for them.

The assistant never writes files without your approval — every state-changing action requires an explicit confirm.

#### 4. Verify

After saving, export an API to confirm the new rules take effect. The config reader reloads on save, so changes apply immediately.

::: tip
The assistant addresses rule files by **name** (e.g., `security.rules`), not absolute path. When it needs to read a file outside the tracked `.easyapi/` folders, you get an inline approve/reject prompt to grant one-time consent.
:::

### Write Rules with the External Skill

If you already use an AI coding assistant such as Trae, Cursor, Cline, or Continue, you can install the **easy-api-assistant** skill. It bundles the same knowledge base as the built-in assistant and guides your AI assistant through the same rule-authoring workflow.

#### 1. Install the skill

```bash
npx skills add tangcent/easy-api -g -y
```

This installs the `easy-api-assistant` skill globally. Once installed, your AI assistant automatically invokes it when you ask to add or modify EasyApi rules (e.g., "rename the `createTime` field to `created_at` in all exported APIs", or "add a rule that ignores fields annotated with `@Internal`").

#### 2. Author rules with your AI assistant

Open your AI coding assistant and describe what you want. The skill:

- Reads the bundled rule guide and rule-key catalog so it knows the exact rule format and valid keys.
- Reads your existing rule files in `<project>/.easyapi/` and `~/.easyapi/` to avoid duplicates.
- Scans the project source for custom framework patterns (filters, interceptors, response wrappers, etc.) using file search.
- Proposes new rule content in the correct format, shows you the diff, and applies it on confirmation.

#### 3. Reload config

Rules written to `.easyapi/` files are picked up automatically — EasyApi watches the folder and reloads on change. If you don't see the new rules take effect, trigger any export or call action to force a reload.

::: tip
The external skill produces the same rule content as the built-in assistant because both read from the same knowledge base. Pick the approach that fits your workflow — there is no functional difference in the resulting rules.
:::

## Rule Syntax

Rules follow the format:

```properties
rule.key=rule_value
rule.key[filter]=rule_value
```

A rule with no filter applies to every element. A rule with a filter applies only to matching classes, methods, fields, or parameters.

Rules can be written in either properties format (`.easy.api.config`) or YAML format (`.easy.api.yml` / `.easy.api.yaml`). See [Local File Config](/settings/local-file-config) for details on file formats.

### Simple Rules

```properties
# Set API name based on class name
api.name=#regex:^(.+)Controller$=$1
```

### Groovy Rules

For more complex logic, use Groovy scripts:

```properties
# Ignore fields named "password" or "secret"
field.ignore=groovy:it.name() == "password" || it.name() == "secret"
```

### Regex Rules

Use `#regex:` prefix for pattern matching:

```properties
# Convert wrapper types
json.rule.convert[#regex:com.example.Wrapper<(.*?)>]=${1}
```

### Annotation Rules

Use `@` prefix to match elements that have a specific annotation. The value after `#` specifies which annotation attribute to read:

```properties
# Read field name from @JsonProperty annotation
field.name=@com.fasterxml.jackson.annotation.JsonProperty#value

# Ignore fields annotated with @JsonIgnore
field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value

# Set parameter documentation from @ApiParam
param.doc=@io.swagger.annotations.ApiParam#value

# Set method documentation from @ApiOperation
method.doc=@io.swagger.annotations.ApiOperation#value
```

### Tag Rules

Use `#` prefix to match javadoc tags:

```properties
# Add deprecated info from @deprecated javadoc tag
method.doc[#deprecated]=groovy:"\n「Deprecated」" + it.doc("deprecated")
```

### Conditional Rules with Annotation Filters

Append an annotation filter in brackets `[...]` to apply a rule only when the element has that annotation:

```properties
# Only apply when the class has @JsonIgnoreProperties
field.ignore=groovy:it.containingClass().annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")?.contains(it.name())

# Only apply when the field has @NotNull
field.required[@javax.validation.constraints.NotNull]=groovy:```
    def annMaps = it.annMaps("javax.validation.constraints.NotNull")
    // custom logic
```
```

### Filter Prefixes

The filter goes **inside** `[...]` after the rule key. Valid filter prefixes:

| Prefix | Description | Example |
|--------|-------------|---------|
| `$class:` | Match by exact fully-qualified class name. Wildcards are **not** supported — use `groovy:` or `#regex:` for pattern matching. | `method.doc[$class:com.example.UserController]=user` |
| `@` | Match elements annotated with the given annotation. | `method.doc[@java.lang.Deprecated]=deprecated` |
| `#regex:` | Match by regex against the element's canonical text. Captured groups are available in the value as `${1}`, `${2}`, etc. | `field.name[#regex:.*List.*]=${it.name}s` |
| `#` | Match elements tagged with the given tag (from comments or annotations). | `method.doc[#internal]=internal` |
| `!` | Negate the following expression. | `method.doc[!@java.lang.Deprecated]=active` |
| `groovy:` | Run a Groovy script; a truthy result means the rule matches. | `method.doc[groovy: it.containingClass().name().startsWith("com.example.web.")]=web` |
| *(none)* | A literal value, or a type name matched against the element's type. | `method.doc=disabled` |

::: warning
The older `filter?key=value` form and the `~` regex prefix are no longer valid. Use `key[filter]=value` and `#regex:` instead. The bare `class:` prefix (without `$`) is also invalid — use `$class:`.
:::

### Template Variables

You can define reusable template variables in your config using `${variable_name}`:

```properties
# Define a reusable template
resolve_parameter=```
    def desc = map.description
    def paramType = map.in?.value ?: "query"
    def required = map.required?:true
    if(paramType==""||paramType=="query"){
        api.setParam(map.name,null,required,desc)
    }else if(paramType=="form"){
        api.setFormParam(map.name,"",required,desc)
    }else if(paramType=="path"){
        api.setPathParam(map.name,null,desc)
    }else if(paramType=="header"){
        api.setHeader(map.name,null,required,desc)
    }
```

# Use the template
export.after[@io.swagger.v3.oas.annotations.Parameter]=groovy:```
    def map = it.annMap("io.swagger.v3.oas.annotations.Parameter")
    ${resolve_parameter}
```
```

## Rule Directives

### `###set` Directive

The `###set` directive controls rule evaluation behavior:

```properties
# Ignore unresolved properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false

# Control property resolution
###set resolveProperty = false
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
###set resolveProperty = true

# Ignore not found files
###set ignoreNotFoundFile = true
properties.additional=${module_path}/src/main/resources/application.properties
###set ignoreNotFoundFile = false
```

Available directives:

| Directive | Description |
|-----------|-------------|
| `ignoreUnresolved` | Don't throw an error if a property placeholder cannot be resolved |
| `resolveProperty` | Disable property placeholder resolution for the following rules |
| `ignoreNotFoundFile` | Don't throw an error if a referenced file does not exist |

## Rule Priority

Rules are evaluated in the following priority order (highest to lowest):

1. **Project rules** — `<project>/.easyapi/*.rules` files
2. **Global rules** — `~/.easyapi/*.rules` files (applied to every project on the machine)
3. **Legacy project file** — `.easy.api.config*` in the project root (and ancestor directories)
4. **Extension configs** — framework-specific rules (Swagger, Jackson, validation, etc.)
5. **Remote config** — config files fetched from URLs
6. **Built-in recommended config** — defaults shipped with the plugin

Within the same source, later definitions override earlier ones for `replace` mode keys, and accumulate for `merge` / `merge-distinct` mode keys. See [Local File Config](/settings/local-file-config) for how to create rule files.

## Available Rule Categories

| Category | Description |
|----------|-------------|
| [API Rules](/settings/rules/api_name) | Control API name, path, and grouping |
| [Field Rules](/settings/rules/field_name) | Control field name, type, and visibility |
| [Param Rules](/settings/rules/param_name) | Control parameter name, type, and visibility |
| [Method Rules](/settings/rules/method_doc) | Control method documentation and return types |
| [JSON Rules](/settings/rules/json_rule_convert) | Control JSON serialization behavior |
| [Postman Rules](/settings/rules/postman_host) | Control Postman export behavior |
| [Enum Rules](/settings/rules/enum_use_custom) | Control enum handling |
