# javax.validation

EasyApi supports javax.validation (Jakarta Bean Validation) annotations for documenting field constraints.

## Supported Annotations

The `javax-validation` extension (enabled by default) processes the following annotations:

| Annotation | Effect on Documentation |
|------------|------------------------|
| `@NotNull` | Field/parameter is marked as required |
| `@NotEmpty` | Field/parameter is marked as required |
| `@NotBlank` | Field/parameter is marked as required |

## Example

```java
public class CreateUserRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @NotNull
    private String email;

    @NotNull
    private Integer age;
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

The default `javax-validation` extension treats all `@NotNull`/`@NotBlank`/`@NotEmpty` as required regardless of groups:

```properties
field.required=@javax.validation.constraints.NotNull
field.required=@javax.validation.constraints.NotBlank
field.required=@javax.validation.constraints.NotEmpty
param.required=@javax.validation.constraints.NotNull
param.required=@javax.validation.constraints.NotBlank
param.required=@javax.validation.constraints.NotEmpty
```

### Strict Group Configuration

The `javax-validation-strict` extension (disabled by default) respects validation groups. When a parameter is annotated with `@Validated(Group.class)`, only fields whose validation annotations include that group will be marked as required:

```properties
# Enable in: Preferences > Other Settings > EasyApi > Extensions > javax-validation-strict
```

With strict mode enabled:

```java
@Validated(Create.class)
@PostMapping
public void create(@RequestBody UserRequest request) {
    // Only fields with groups={Create.class} or groups={Default.class} will be required
}
```

## Jakarta Validation

EasyApi also supports Jakarta Validation 3.x annotations via the `jakarta-validation` and `jakarta-validation-strict` extensions:

| Extension | Default | Description |
|-----------|---------|-------------|
| `jakarta-validation` | On | Jakarta validation annotations (`jakarta.validation.constraints.*`) |
| `jakarta-validation-strict` | Off | Jakarta validation with strict group checking |

These work identically to their javax counterparts but use the `jakarta.validation.constraints` package.

## Custom Validation Rules

You can add custom rules for other validation annotations:

```properties
# Add @Size constraint info to field documentation
field.doc[@javax.validation.constraints.Size]=groovy:"min:" + it.ann("javax.validation.constraints.Size","min") + ", max:" + it.ann("javax.validation.constraints.Size","max")

# Add @Min/@Max constraint info
field.doc[@javax.validation.constraints.Min]=groovy:"min:" + it.ann("javax.validation.constraints.Min","value")
field.doc[@javax.validation.constraints.Max]=groovy:"max:" + it.ann("javax.validation.constraints.Max","value")

# Add @Email format info
field.doc[@javax.validation.constraints.Email]=groovy:"email format"

# Add @Pattern regex info
field.doc[@javax.validation.constraints.Pattern]=groovy:"pattern:" + it.ann("javax.validation.constraints.Pattern","regexp")
```
