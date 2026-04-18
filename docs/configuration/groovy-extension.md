# Groovy Extension

EasyApi supports Groovy scripts for advanced customization and extension.

## Groovy Script Location

You can place Groovy scripts in the following locations:

1. **IDE Settings** — Add scripts directly in the EasyApi settings panel
2. **Local Config File** — Reference Groovy scripts from `.easy.api.config`
3. **Script Executor** — Run ad-hoc Groovy scripts via **Tools** > **EasyApi** > **Script Executor**

## Using Groovy in Rules

Groovy scripts in rules have access to the current context object (`it`):

```properties
# Ignore fields with specific names
field.ignore=groovy:it.name() == "password" || it.name() == "secret"

# Set field description from annotation
field.doc=groovy:it.ann("io.swagger.annotations.ApiModelProperty")?.value()

# Set required based on validation annotation
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull")
```

## Available Context Objects

In Groovy rules, the following objects are available:

| Object | Type | Description |
|--------|------|-------------|
| `it` | Context | Current rule context (class, method, field, or param) |
| `logger` | Logger | Logging utility |
| `api` | ApiTool | API extraction utilities |
| `config` | ConfigReader | Configuration reader |
| `helper` | Helper | Various helper utilities |
| `httpClient` | HttpClient | HTTP client |
| `localStorage` | Storage | Persistent key-value storage |
| `session` | Storage | Session-scoped storage |
| `tool` | Tool | General tool utilities |
| `regex` | Regex | Regular expression utilities |
| `runtime` | Runtime | Runtime information |

## Advanced Groovy Configuration

For complex Groovy extensions, you can create a dedicated configuration file:

```properties
# In .easy.api.config
# Reference a Groovy extension file
groovy.ext.config=scripts/easyapi_ext.groovy
```

The Groovy extension file can define reusable functions:

```groovy
// scripts/easyapi_ext.groovy

def isSensitiveField(field) {
    def sensitiveNames = ['password', 'secret', 'token', 'apiKey']
    return sensitiveNames.any { field.name().toLowerCase().contains(it) }
}

def getFieldType(field) {
    def type = field.type()
    if (type.name() == 'LocalDate') return 'string(date)'
    if (type.name() == 'LocalDateTime') return 'string(date-time)'
    return type.simpleName()
}
```
