# Activate JsonIgnoreProperties

EasyApi respects `@JsonIgnoreProperties` on both classes and nested fields via the `jackson` extension (enabled by default).

## Class-level

```java
@JsonIgnoreProperties({"internalId", "metadata"})
public class UserDTO {
    private Long internalId;  // Will be ignored
    private String name;      // Will be included
    private String metadata;  // Will be ignored
}
```

## Nested Field-level

When a field's type has `@JsonIgnoreProperties`, those properties will be excluded from the nested object:

```java
public class Order {
    private String orderId;
    private UserDTO user;  // internalId and metadata from UserDTO will be excluded
}
```

## Custom Rule

You can also add a custom rule for more control:

```properties
field.ignore=groovy:it.containingClass().annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")?.contains(it.name())
```

See [Jackson](/framework/jackson) for more details.
