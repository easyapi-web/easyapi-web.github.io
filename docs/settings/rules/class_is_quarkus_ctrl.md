# class.is.quarkus.ctrl

Recognize Quarkus resource classes as API controllers.

## Usage

```properties
class.is.quarkus.ctrl=groovy:it.hasAnn("javax.ws.rs.Path")
```

Quarkus uses standard JAX-RS annotations, so this rule typically uses the same logic as `class.is.jaxrs.ctrl`.
