# Enum Rules

Rules for controlling how enum types are handled in API documentation.

## Available Rules

| Rule Key | Type | Description |
|----------|------|-------------|
| `enum.use.custom` | string | Use custom logic to resolve enum values |
| `constant.field.ignore` | boolean | Ignore constant fields in enum classes |

## enum.use.custom

Use custom logic to resolve enum values. This rule allows you to specify how enum constants should be represented in the API documentation.

```properties
enum.use.custom=groovy:"java.lang.String"
```

### Custom Value Resolution

You can use Groovy to extract specific values from enum constants:

```properties
enum.use.custom=groovy:it.fields().find { f -> f.name() == "value" }?.constantValue()?.toString()
```

Example with a custom value field:

```java
public enum Status {
    ACTIVE(1, "Active"),
    INACTIVE(0, "Inactive");

    private final int value;
    private final String label;

    Status(int value, String label) {
        this.value = value;
        this.label = label;
    }
}
```

With `enum.use.custom`, you can resolve the `value` field to get `1` and `0` instead of `"ACTIVE"` and `"INACTIVE"`.

### Type Conversion with json.rule.convert

You can also control enum serialization in JSON output using type conversion:

```properties
json.rule.convert[#regex:com.example.Status]=java.lang.Integer

json.rule.convert[#regex:com.example.Type]=java.lang.String
```

## constant.field.ignore

Ignore static final constant fields in enum and regular classes:

```properties
constant.field.ignore=true
```

By default, constant fields (static final) in enum classes may be included in the output. Set this to `true` to exclude them.

## JSON Enum Conversion

To convert all enums to strings in JSON output:

```properties
json.rule.convert[#regex:java.lang.Enum]=java.lang.String
```
