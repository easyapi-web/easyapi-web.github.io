# How to Convert Type

Use `json.rule.convert` to convert one type to another in the API documentation.

## Basic Conversion

```properties
json.rule.convert[#regex:java.time.LocalDate]=java.lang.String
json.rule.convert[#regex:java.time.LocalDateTime]=java.lang.String
json.rule.convert[#regex:java.math.BigDecimal]=java.lang.Number
```

## Generic Unwrapping

```properties
###set resolveProperty = false
json.rule.convert[#regex:com.example.Result<(.*?)>]=${1}
json.rule.convert[#regex:com.example.PageResult<(.*?)>]=java.util.List<${1}>
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
###set resolveProperty = true
```

## Custom Wrapper Types

```properties
json.rule.convert[#regex:com.example.Wrapper<(.*?)>]=${1}
```

See [json.rule.convert](/settings/rules/json_rule_convert) for more details.
