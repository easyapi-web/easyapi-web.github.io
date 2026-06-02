# json.rule.convert

Convert one type to another in JSON output.

## Usage

```properties
###set resolveProperty = false
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
###set resolveProperty = true
```

## Example

### Resolve Spring wrapper types

```properties
###set resolveProperty = false
json.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.HttpEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object
###set resolveProperty = true
```

### Resolve reactive types

```properties
###set resolveProperty = false
json.rule.convert[#regex:reactor.core.publisher.Mono<(.*?)>]=${1}
json.rule.convert[#regex:reactor.core.publisher.Flux<(.*?)>]=java.util.List<${1}>
###set resolveProperty = true
```

### Custom type conversion

```properties
json.rule.convert[#regex:com.example.Result<(.*?)>]=${1}
json.rule.convert[#regex:java.time.LocalDate]=java.lang.String
json.rule.convert[#regex:java.time.LocalDateTime]=java.lang.String
json.rule.convert[#regex:java.math.BigDecimal]=java.lang.Number
```
