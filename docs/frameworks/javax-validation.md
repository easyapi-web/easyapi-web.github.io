# javax.validation

EasyApi supports javax.validation (Jakarta Bean Validation) annotations for documenting field constraints.

## Supported Annotations

| Annotation | Effect on Documentation |
|------------|------------------------|
| `@NotNull` | Field is marked as required |
| `@NotEmpty` | Field is marked as required |
| `@NotBlank` | Field is marked as required |
| `@Size(min, max)` | Adds min/max length info |
| `@Min` | Adds minimum value info |
| `@Max` | Adds maximum value info |
| `@Email` | Adds email format info |
| `@Pattern` | Adds regex pattern info |
| `@Valid` | Triggers nested validation |

## Example

```java
public class CreateUserRequest {

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50)
    private String name;

    @NotNull
    @Email
    private String email;

    @Min(18)
    @Max(120)
    private Integer age;

    @Valid
    @NotNull
    private Address address;
}
```

## Validation Groups

You can use validation groups to represent different scenarios:

```java
public class UserRequest {

    @NotNull(groups = Create.class)
    private String name;

    @NotNull(groups = Update.class)
    private Long id;

    public interface Create {}
    public interface Update {}
}
```

### Simple Group Configuration

```properties
# Use validation groups for required fields
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull")||it.hasAnn("javax.validation.constraints.NotBlank")||it.hasAnn("javax.validation.constraints.NotEmpty")
```

### Grouped Validation Configuration

For more advanced group-based validation, you can configure rules that respect specific validation groups:

```properties
# Respect validation groups in required field detection
field.required=groovy:
    def notNull = it.ann("javax.validation.constraints.NotNull")
    if (notNull != null) {
        def groups = notNull.groups
        if (groups != null && groups.length > 0) {
            return groups.any { g -> g.simpleName == "Create" }
        }
        return true
    }
    return false
```
