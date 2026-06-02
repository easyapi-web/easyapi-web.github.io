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

@GetMapping("/events")
public Publisher<Event> streamEvents() {
    // Publisher<Event> is resolved to Event in the documentation
}
```

### Built-in Resolution Rules

```properties
###set resolveProperty = false
json.rule.convert[#regex:reactor.core.publisher.Mono<(.*?)>]=${1}
json.rule.convert[reactor.core.publisher.Mono]=java.lang.Object
json.rule.convert[#regex:reactor.core.publisher.Flux<(.*?)>]=java.util.List<${1}>
json.rule.convert[reactor.core.publisher.Flux]=java.util.List<java.lang.Object>
json.rule.convert[#regex:org.reactivestreams.Publisher<(.*?)>]=${1}
json.rule.convert[org.reactivestreams.Publisher]=java.lang.Object
###set resolveProperty = true
```

| Type | Resolution |
|------|-----------|
| `Mono<T>` | Resolved to `T` |
| `Mono` (no generic) | Resolved to `Object` |
| `Flux<T>` | Resolved to `List<T>` |
| `Flux` (no generic) | Resolved to `List<Object>` |
| `Publisher<T>` | Resolved to `T` |
| `Publisher` (no generic) | Resolved to `Object` |

## ServerWebExchange Handling

`ServerWebExchange` parameters are automatically ignored in the generated documentation, as they represent the HTTP exchange context rather than API input.
