# Framework Support

EasyApi understands standard HTTP frameworks out of the box — you do not need any configuration or rule files to export APIs from projects using them. EasyApi automatically recognizes the framework's annotations and generates the corresponding API documentation.

## Default Support

| Framework | Description |
|-----------|-------------|
| [Spring MVC](./springboot) | Most widely used Java web framework (`@RestController`, `@RequestMapping`, etc.) |
| [Spring WebFlux](./springboot-webflux) | Reactive web framework (Mono / Flux / Publisher) |
| [Spring Actuator](./actuator) | Spring Boot Actuator endpoints |
| [Feign](./springboot#feign-support) | Spring Cloud OpenFeign client interfaces (`@FeignClient`) |
| [JAX-RS](./jaxrs) | Java RESTful Web Services standard (Quarkus / Jersey) |
| [gRPC](./grpc) | High-performance RPC framework |

## When You Need Custom Rules

For the frameworks above, export works without any rule files. You only need custom rules when something changes the request/response contract invisibly — for example a servlet filter that requires a header, or a response wrapper that envelopes every response. In those cases, use the [built-in AI Assistant or the external skill](/settings/config-rule#ways-to-write-rules) to detect the pattern and generate the rule.

## Common Support

| Framework/Spec | Description |
|----------------|-------------|
| [javax.validation](./javax-validation) | Java Bean Validation specification |
| [Jakarta Validation](./jakarta-validation) | Jakarta Bean Validation specification |
| [Swagger](./swagger) | API documentation specification (v2) |
| [Swagger 3 / OpenAPI](./swagger3) | API documentation specification (v3) |
| [Jackson](./jackson) | JSON serialization/deserialization |
| [Gson](./gson) | Google JSON library |
| [Fastjson](./fastjson) | Alibaba JSON library |

## Built-in Extensions

| Extension | Description |
|-----------|-------------|
| [Deprecated & Converts](./deprecated-converts) | Deprecated info and type conversions |
| [Field Order](./field-order) | Field ordering extensions |
| [Spring Configuration](./spring-configuration) | Spring config properties support |
