# Config Rules

EasyApi uses a rule-based configuration system that lets you customize how APIs are parsed and exported.

## Rule Syntax

Rules follow the format:

```properties
rule.key=rule_value
```

Rules can be written in either properties format (`.easy.api.config`) or YAML format (`.easy.api.yml` / `.easy.api.yaml`). See [Local File Config](/configuration/local-file-config) for details on file formats.

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

1. IDE settings
2. Local file config
3. Remote config
4. Extension configs
5. Built-in recommended config

## Available Rule Categories

| Category | Description |
|----------|-------------|
| [API Rules](/rules/api-rules) | Control API name, path, and grouping |
| [Field Rules](/rules/field-rules) | Control field name, type, and visibility |
| [Param Rules](/rules/param-rules) | Control parameter name, type, and visibility |
| [Method Rules](/rules/method-rules) | Control method documentation and return types |
| [JSON Rules](/rules/json-rules) | Control JSON serialization behavior |
| [Postman Rules](/rules/postman-rules) | Control Postman export behavior |
| [Enum Rules](/rules/enum-rules) | Control enum handling |
