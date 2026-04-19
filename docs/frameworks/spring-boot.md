# Spring Boot

EasyApi provides comprehensive support for Spring Boot applications.

## Built-in Recommended Configuration

### Resolve HttpEntity/RequestEntity/ResponseEntity/DeferredResult

```properties
###set resolveProperty = false
json.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.HttpEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.web.context.request.async.DeferredResult<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.web.context.request.async.DeferredResult]=java.lang.Object
###set resolveProperty = true
```

EasyApi automatically unwraps Spring wrapper types:

| Type | Resolution |
|------|-----------|
| `HttpEntity<T>` | Resolved to `T` |
| `RequestEntity<T>` | Resolved to `T` |
| `ResponseEntity<T>` | Resolved to `T` |
| `DeferredResult<T>` | Resolved to `T` |

For example, a method returning `ResponseEntity<User>` will have its response type resolved as `User` in the API documentation.

### Load Spring Boot Configuration Properties

You can manually add Spring property files to your local config:

```properties
# Import spring properties
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml
```

Alternatively, enable the **spring-properties** extension in **Preferences** > **Other Settings** > **EasyApi** > **Extensions** to automatically load these files. This extension is disabled by default because it loads all Spring properties which may include sensitive values.

### Use server.servlet.context-path as Prefix Path

```properties
# Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```

This is also included in the **spring-properties** extension when enabled.

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
| `@ConfigurationProperties` | Binds external properties to a class |

## @ConfigurationProperties Support

EasyApi supports `@ConfigurationProperties` classes via the `spring-configuration` extension (enabled by default). When a class is annotated with `@ConfigurationProperties(prefix = "app.security")`, EasyApi uses the prefix to resolve property placeholders:

```java
@ConfigurationProperties(prefix = "app.security")
public class SecurityProperties {
    private String tokenHeader;    // resolves app.security.tokenHeader
    private long tokenExpiration;  // resolves app.security.tokenExpiration
    // getters and setters
}
```

The extension applies these rules:

```properties
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties#prefix
```

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

## Spring Boot Actuator Support

EasyApi recognizes Spring Boot Actuator endpoint classes and exports them as API documentation.

### Supported Actuator Annotations

| Annotation | Description |
|------------|-------------|
| `@Endpoint` | Marks a standard Actuator endpoint |
| `@WebEndpoint` | Marks a web-specific Actuator endpoint |
| `@ControllerEndpoint` | Marks a controller-style Actuator endpoint |
| `@RestControllerEndpoint` | Marks a REST controller-style Actuator endpoint |
| `@ReadOperation` | Maps to HTTP GET |
| `@WriteOperation` | Maps to HTTP POST |
| `@DeleteOperation` | Maps to HTTP DELETE |
| `@Selector` | Marks a path variable in an Actuator method |

### How Actuator Endpoints Are Parsed

Actuator endpoints use a different annotation model than standard Spring MVC:

- `@ReadOperation` → HTTP GET
- `@WriteOperation` → HTTP POST
- `@DeleteOperation` → HTTP DELETE
- `@Selector` → Path variable

All Actuator endpoints are automatically mapped under `/actuator/{endpointId}`.

### Example

```java
@Component
@Endpoint(id = "custom")
public class CustomActuatorEndpoint {

    @ReadOperation
    public Map<String, Object> getInfo() {
        return Map.of("status", "UP");
    }

    @ReadOperation
    public Map<String, Object> getDetail(@Selector String name) {
        return Map.of("name", name, "status", "UP");
    }

    @WriteOperation
    public void updateConfig(@Selector String name, String value) {
        // update configuration
    }

    @DeleteOperation
    public void resetConfig(@Selector String name) {
        // reset configuration
    }
}
```

This will be exported as:
- `GET /actuator/custom` — Get info
- `GET /actuator/custom/{name}` — Get detail
- `POST /actuator/custom/{name}` — Update config
- `DELETE /actuator/custom/{name}` — Reset config
