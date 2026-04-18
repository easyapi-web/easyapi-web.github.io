# Spring WebFlux

EasyApi supports Spring WebFlux reactive endpoints.

## Supported Annotations

| Annotation | Description |
|------------|-------------|
| `@RestController` | Marks a class as a REST controller |
| `@RequestMapping` | Maps a request path |
| `@GetMapping` | Maps a GET request |
| `@PostMapping` | Maps a POST request |
| `@PutMapping` | Maps a PUT request |
| `@DeleteMapping` | Maps a DELETE request |
| `@PatchMapping` | Maps a PATCH request |

## Reactive Type Resolution

EasyApi automatically resolves reactive wrapper types:

```java
@GetMapping("/users/{id}")
public Mono<User> getUser(@PathVariable Long id) {
    // Mono<User> is resolved to User in the documentation
}

@GetMapping("/users")
public Flux<User> listUsers() {
    // Flux<User> is resolved to List<User> in the documentation
}
```

### Built-in Resolution Rules

```properties
###set resolveProperty = false
json.rule.convert[#regex:reactor.core.publisher.Mono<(.*?)>]=${1}
json.rule.convert[#regex:reactor.core.publisher.Flux<(.*?)>]=java.util.List<${1}>
json.rule.convert[#regex:org.springframework.web.server.ServerWebExchange]=java.lang.Object
###set resolveProperty = true
```

## ServerWebExchange Handling

`ServerWebExchange` parameters are automatically ignored in the generated documentation, as they represent the HTTP exchange context rather than API input.
