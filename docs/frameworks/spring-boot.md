# Spring Boot

EasyApi provides comprehensive support for Spring Boot applications.

## Built-in Recommended Configuration

### Resolve HttpEntity/RequestEntity/ResponseEntity

```properties
###set resolveProperty = false
json.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.HttpEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object
###set resolveProperty = true
```

### Load Spring Boot Configuration Properties

```properties
# Import spring properties
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml
```

### Use server.servlet.context-path as Prefix Path

```properties
# Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```

## Supported Annotations

| Annotation | Description |
|------------|-------------|
| `@RestController` | Marks a class as a REST controller |
| `@Controller` | Marks a class as a controller |
| `@RequestMapping` | Maps a request path to a method |
| `@GetMapping` | Maps a GET request |
| `@PostMapping` | Maps a POST request |
| `@PutMapping` | Maps a PUT request |
| `@DeleteMapping` | Maps a DELETE request |
| `@PatchMapping` | Maps a PATCH request |
| `@RequestParam` | Binds a query parameter |
| `@PathVariable` | Binds a path variable |
| `@RequestBody` | Binds a request body |
| `@RequestHeader` | Binds a request header |
| `@CookieValue` | Binds a cookie value |
| `@FeignClient` | Marks a Feign client interface |

## Feign Support

EasyApi also supports Feign client interfaces:

```java
@FeignClient(name = "user-service", url = "https://api.example.com")
public interface UserClient {

    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);

    @PostMapping("/users")
    User createUser(@RequestBody UserRequest request);
}
```
