# enum.use.custom

Specify how enum constants should be represented in the API documentation.

## Usage

```properties
enum.use.custom=name
```

## Built-in Values

| Value | Description | JSON Type |
|-------|-------------|-----------|
| `name` or `name()` | Use enum constant name (e.g., `"ACTIVE"`) | String |
| `ordinal` or `ordinal()` | Use enum ordinal index (e.g., `0`) | Integer |
| Any other string | Use that instance field name (e.g., `"code"`) | Depends on field type |

## Example

### Use enum name

```properties
enum.use.custom=name
```

```java
public enum Status {
    ACTIVE, INACTIVE, PENDING
}
```

Values: `["ACTIVE", "INACTIVE", "PENDING"]` (String type)

### Use enum ordinal

```properties
enum.use.custom=ordinal
```

Values: `[0, 1, 2]` (Integer type)

### Use custom field

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

Values: `[1, 0]` (Integer type), descriptions: `["Active", "Inactive"]`

## Default

If not set, the default is `name()` — enums are represented by their constant names as strings.
