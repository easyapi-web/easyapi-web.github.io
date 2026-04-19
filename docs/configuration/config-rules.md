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
```

## Rule Priority

Rules are evaluated in the following priority order (highest to lowest):

1. IDE settings
2. Local file config
3. Remote config
4. Built-in recommended config

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
