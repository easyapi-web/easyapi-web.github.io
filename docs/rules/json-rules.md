# JSON Rules

Rules for controlling how types are serialized to JSON in the documentation.

## Available Rules

| Rule Key | Description |
|----------|-------------|
| `json.rule.convert` | Convert one type to another |
| `json.rule.enum.convert` | Convert enum types |
| `json.rule.field.ignore` | Ignore fields in JSON output |
| `json.rule.field.name` | Rename fields in JSON output |

## json.rule.convert

Convert complex or generic types to simpler representations:

```properties
###set resolveProperty = false
# Resolve Spring HttpEntity types
json.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.HttpEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object

# Resolve reactive types
json.rule.convert[#regex:reactor.core.publisher.Mono<(.*?)>]=${1}
json.rule.convert[#regex:reactor.core.publisher.Flux<(.*?)>]=java.util.List<${1}>
###set resolveProperty = true
```

### Custom Type Conversion

```properties
# Convert custom wrapper types
json.rule.convert[#regex:com.example.Result<(.*?)>]=${1}
json.rule.convert[#regex:com.example.PageResult<(.*?)>]=java.util.List<${1}>

# Convert to simple types
json.rule.convert[#regex:java.time.LocalDate]=java.lang.String
json.rule.convert[#regex:java.time.LocalDateTime]=java.lang.String
json.rule.convert[#regex:java.math.BigDecimal]=java.lang.Number
```

## json.rule.enum.convert

Control how enum types are serialized:

```properties
# Use enum name as string
json.rule.enum.convert=groovy:"java.lang.String"
```

See [Enum Rules](/rules/enum-rules) for more detailed enum configuration.

## json.rule.field.ignore

Ignore specific fields in JSON output:

```properties
# Ignore by field name
json.rule.field.ignore=#regex:password|secret|token

# Ignore by annotation
json.rule.field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")
```

## json.rule.field.name

Rename fields in JSON output:

```properties
# Use Jackson @JsonProperty
json.rule.field.name=groovy:it.ann("com.fasterxml.jackson.annotation.JsonProperty")?.value()

# Custom naming
json.rule.field.name=groovy:it.name().replaceAll("([A-Z])", "_$1").toLowerCase()
```
