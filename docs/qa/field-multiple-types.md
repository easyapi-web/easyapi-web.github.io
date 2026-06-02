# Field with Multiple Types

When a field can have multiple types (e.g., polymorphic), you can handle it in several ways.

## Use @JsonTypeInfo / @JsonSubTypes

Jackson polymorphic type handling is supported by the `jackson` extension:

```java
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
    @JsonSubTypes.Type(value = Dog.class, name = "dog"),
    @JsonSubTypes.Type(value = Cat.class, name = "cat")
})
public abstract class Animal {
    public String name;
}
```

## Use json.rule.convert

Convert a generic wrapper to a specific type:

```properties
json.rule.convert[#regex:com.example.Animal<(.*?)>]=${1}
```

## Use method.return

Override the return type for specific methods:

```properties
method.return=groovy:it.ann("com.example.ReturnType")?.value()
```
