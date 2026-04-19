# JSON Rules

Rules for controlling how types are serialized to JSON in the documentation.

## Available Rules

| Rule Key | Type | Description |
|----------|------|-------------|
| `json.rule.convert` | string | Convert one type to another |
| `json.additional.field` | string (merge) | Add extra fields to JSON output |
| `json.unwrapped` | boolean | Unwrap nested objects (like @JsonUnwrapped) |
| `field.max.depth` | int | Maximum depth for field expansion |
| `param.max.depth` | int | Maximum depth for parameter expansion |

## JSON Lifecycle Events

| Rule Key | Type | Description |
|----------|------|-------------|
| `json.class.parse.before` | event | Before parsing a class as JSON |
| `json.class.parse.after` | event | After parsing a class as JSON |
| `json.field.parse.before` | event (alias: `field.parse.before`) | Before parsing a field as JSON |
| `json.field.parse.after` | event (alias: `field.parse.after`) | After parsing a field as JSON |

## json.rule.convert

Convert complex or generic types to simpler representations:

```properties
###set resolveProperty = false
json.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.HttpEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object

json.rule.convert[#regex:reactor.core.publisher.Mono<(.*?)>]=${1}
json.rule.convert[#regex:reactor.core.publisher.Flux<(.*?)>]=java.util.List<${1}>
###set resolveProperty = true
```

### Custom Type Conversion

```properties
json.rule.convert[#regex:com.example.Result<(.*?)>]=${1}
json.rule.convert[#regex:com.example.PageResult<(.*?)>]=java.util.List<${1}>

json.rule.convert[#regex:java.time.LocalDate]=java.lang.String
json.rule.convert[#regex:java.time.LocalDateTime]=java.lang.String
json.rule.convert[#regex:java.math.BigDecimal]=java.lang.Number
```

## json.additional.field

Add extra fields to the JSON output of a class. This is useful for adding metadata or computed fields:

```properties
json.additional.field=groovy:{"name":"_type","value":"User","desc":"Object type","required":false}
```

Multiple additional fields can be added (merge mode):

```properties
json.additional.field=groovy:{"name":"_type","value":it.name(),"desc":"Object type","required":false}
json.additional.field=groovy:{"name":"_timestamp","value":"0","desc":"Timestamp","required":false}
```

## json.unwrapped

Control whether fields annotated with `@JsonUnwrapped` should be flattened into the parent object:

```properties
json.unwrapped=true
```

When enabled, fields from nested objects are merged into the parent instead of appearing as a nested object.

## field.max.depth

Limit the depth of nested object expansion to prevent infinite recursion:

```properties
field.max.depth=10
```

## param.max.depth

Limit the depth of nested object expansion for parameters:

```properties
param.max.depth=5
```
