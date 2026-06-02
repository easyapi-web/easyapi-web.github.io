# class.is.spring.ctrl

Determine if a class is a Spring controller.

## Usage

```properties
class.is.spring.ctrl=groovy:it.hasAnn("org.springframework.web.bind.annotation.RestController")
```

This is the primary rule for recognizing Spring MVC/Boot controllers. It is also available via the alias `class.is.ctrl`.
