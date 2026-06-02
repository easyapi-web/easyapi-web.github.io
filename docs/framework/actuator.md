# Spring Actuator

EasyApi supports exporting API documentation from Spring Boot Actuator endpoints.

## Overview

Spring Actuator support can automatically recognize Actuator endpoint classes (annotated with `@Endpoint`, `@WebEndpoint`, `@ControllerEndpoint`, `@RestControllerEndpoint`, `@ServletEndpoint`) and extract their API information.

## Enable Actuator Support

Actuator support can be enabled in IDE settings:

**Preferences(Settings)** > **Other Settings** > **EasyApi** > **General** > **Enable Spring Actuator support**

## Supported Annotations

| Annotation | Description |
|-----------|-------------|
| `@Endpoint` | Actuator endpoint (default id-based) |
| `@WebEndpoint` | Web-specific actuator endpoint |
| `@ControllerEndpoint` | Spring MVC actuator endpoint |
| `@RestControllerEndpoint` | REST actuator endpoint |
| `@ServletEndpoint` | Servlet-based actuator endpoint |

## Operation Annotations

| Annotation | HTTP Method |
|-----------|-------------|
| `@ReadOperation` | GET |
| `@WriteOperation` | POST |
| `@DeleteOperation` | DELETE |
| `@Selector` | Path variable |

All Actuator endpoints are automatically mapped under `/actuator/{endpointId}`.

## Example

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
