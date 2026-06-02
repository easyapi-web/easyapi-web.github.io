# Fastjson

EasyApi supports Alibaba Fastjson annotations for field name mapping.

## Extension Config

The `fastjson` extension (disabled by default) provides support for Fastjson annotations:

```properties
# Fastjson support
field.name=@com.alibaba.fastjson.annotation.JSONField#value
```

::: warning
Fastjson support is **disabled by default**. Enable it in IDE settings if needed.
:::

## Supported Annotations

| Annotation | Rule | Description |
|-----------|------|-------------|
| `@JSONField` | `field.name` | Use the specified name instead of the field name |

## Example

```java
public class User {
    @JSONField(name = "user_name")
    private String name;
}
```

In this example, `name` will be documented as `user_name`.
