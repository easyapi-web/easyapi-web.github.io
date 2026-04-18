# Enum Rules

Rules for controlling how enum types are handled in API documentation.

## Default Behavior

By default, EasyApi resolves enum types to their possible values. You can customize this behavior.

## Available Rules

| Rule Key | Description |
|----------|-------------|
| `enum.use.by.type` | Use enum by type (default) |
| `enum.use.name` | Use enum constant names |
| `enum.use.ordinal` | Use enum ordinal values |
| `enum.use.custom` | Use custom enum resolution |

## enum.use.by.type

Default behavior — resolve enums based on their declared type:

```properties
enum.use.by.type=true
```

## enum.use.name

Use enum constant names as string values:

```properties
# All enums use name
enum.use.name=true

# Specific enum uses name
enum.use.name=groovy:it.name() == "Status"
```

Example: `UserStatus.ACTIVE` → `"ACTIVE"`

## enum.use.ordinal

Use enum ordinal (index) values as integer values:

```properties
# All enums use ordinal
enum.use.ordinal=true

# Specific enum uses ordinal
enum.use.ordinal=groovy:it.name() == "Priority"
```

Example: `Priority.HIGH` (ordinal 0) → `0`

## enum.use.custom

Use custom logic to resolve enum values:

```properties
# Use a custom field from the enum
enum.use.custom=groovy:it.fields().find { f -> f.name() == "value" }?.value()
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

With `enum.use.custom`, the resolved values would be `1` and `0`.

## JSON Enum Conversion

You can also control enum serialization in JSON output:

```properties
# Convert all enums to strings
json.rule.enum.convert=groovy:"java.lang.String"

# Convert specific enums
json.rule.enum.convert[#regex:com.example.Status]=java.lang.Integer
```
