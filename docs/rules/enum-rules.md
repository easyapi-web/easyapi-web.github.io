# Enum Rules

Rules for controlling how enum types are handled in API documentation.

## Available Rules

| Rule Key | Type | Description |
|----------|------|-------------|
| `enum.use.custom` | string | Specify how enum values should be resolved |
| `constant.field.ignore` | boolean | Ignore constant fields in enum classes |

## enum.use.custom

Specify how enum constants should be represented in the API documentation.

### Built-in Values

| Value | Description | JSON Type |
|-------|-------------|-----------|
| `name` or `name()` | Use enum constant name (e.g., `"ACTIVE"`) | String |
| `ordinal` or `ordinal()` | Use enum ordinal index (e.g., `0`) | Integer |
| Any other string | Use that instance field name (e.g., `"code"`) | Depends on field type |

### Example: Use Enum Name

```properties
enum.use.custom=name
```

```java
public enum Status {
    ACTIVE, INACTIVE, PENDING
}
```

With `enum.use.custom=name`, the enum values will be `["ACTIVE", "INACTIVE", "PENDING"]` with JSON type String.

### Example: Use Enum Ordinal

```properties
enum.use.custom=ordinal
```

With `enum.use.custom=ordinal`, the enum values will be `[0, 1, 2]` with JSON type Integer.

### Example: Use Custom Field

```properties
enum.use.custom=code
```

```java
public enum Status {
    ACTIVE(1, "Active"),
    INACTIVE(0, "Inactive");

    private final int code;
    private final String desc;

    Status(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }
}
```

With `enum.use.custom=code`, the enum values will be `[1, 0]` with JSON type Integer, and descriptions will be `["Active", "Inactive"]`.

### Default Behavior

If `enum.use.custom` is not set, the default is `name()` — enums are represented by their constant names as strings.

## constant.field.ignore

Ignore static final constant fields in enum and regular classes:

```properties
constant.field.ignore=true
```

By default, constant fields (static final) in enum classes may be included in the output. Set this to `true` to exclude them.

## JSON Type Conversion

To change the JSON type of an enum in the output, use `json.rule.convert`:

```properties
# Convert a specific enum to Integer
json.rule.convert[#regex:com.example.Status]=java.lang.Integer

# Convert a specific enum to String
json.rule.convert[#regex:com.example.Type]=java.lang.String
```

Note: This only affects the JSON type displayed in the documentation, not the enum option values.
