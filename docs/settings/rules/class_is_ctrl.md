# class.is.ctrl

Determine if a class should be treated as an API controller.

::: warning
`class.is.ctrl` is deprecated. Use the specific framework variant instead:
- `class.is.spring.ctrl` for Spring controllers
- `class.is.feign.ctrl` for Feign clients
- `class.is.jaxrs.ctrl` for JAX-RS resources
- `class.is.quarkus.ctrl` for Quarkus resources
:::

## Usage

```properties
class.is.ctrl=groovy:it.hasAnn("org.springframework.web.bind.annotation.RestController")
```

This is an alias for `class.is.spring.ctrl`.
