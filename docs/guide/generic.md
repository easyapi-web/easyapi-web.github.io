# Generic Type Support

EasyApi supports parsing and resolving generic types in your API definitions.

## Supported Generic Patterns

### Simple Generics

```java
public Result<User> getUser(@PathVariable Long id) {
    // ...
}
```

EasyApi resolves `Result<User>` and expands the `User` type in the generated documentation.

### Nested Generics

```java
public Result<List<User>> listUsers() {
    // ...
}
```

### Complex Generics

```java
public ResponseEntity<PageResult<UserDTO>> searchUsers(@RequestBody SearchRequest request) {
    // ...
}
```

## Generic Resolution Rules

EasyApi uses the following rules to resolve generic types:

```properties
# Resolve HttpEntity/RequestEntity/ResponseEntity
###set resolveProperty = false
json.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.HttpEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object
###set resolveProperty = true
```

You can add custom generic resolution rules in your [configuration file](/configuration/local-file-config).
