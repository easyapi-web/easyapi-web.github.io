# Jakarta Validation

EasyApi supports Jakarta Validation annotations for marking fields and parameters as required.

## Extension Config

The `jakarta-validation` extension (enabled by default) processes the following annotations:

```properties
param.required=@jakarta.validation.constraints.NotBlank
field.required=@jakarta.validation.constraints.NotBlank
param.required=@jakarta.validation.constraints.NotNull
field.required=@jakarta.validation.constraints.NotNull
param.required=@jakarta.validation.constraints.NotEmpty
field.required=@jakarta.validation.constraints.NotEmpty
```

## Supported Annotations

| Annotation | Rule | Description |
|-----------|------|-------------|
| `@NotBlank` | `param.required` / `field.required` | Mark as required |
| `@NotNull` | `param.required` / `field.required` | Mark as required |
| `@NotEmpty` | `param.required` / `field.required` | Mark as required |

## Jakarta Validation Strict

The `jakarta-validation-strict` extension (disabled by default) respects validation groups. When using `@Validated` with specific groups, only constraints matching those groups will be applied.

Enable it in **Preferences** > **Other Settings** > **EasyApi** > **Extensions** > **jakarta-validation-strict**.

With strict mode enabled:

```java
@Validated(Create.class)
@PostMapping
public void create(@RequestBody UserRequest request) {
    // Only fields with groups={Create.class} or groups={Default.class} will be required
}
```

## Example

```java
public class CreateUserRequest {
    @NotNull
    private String name;

    @Email
    @NotBlank
    private String email;

    @NotEmpty
    private List<String> roles;
}
```

All three fields will be marked as required in the API documentation.

## Custom Validation Rules

You can add custom rules for other Jakarta validation annotations:

```properties
field.doc[@jakarta.validation.constraints.Size]=groovy:"min:" + it.ann("jakarta.validation.constraints.Size","min") + ", max:" + it.ann("jakarta.validation.constraints.Size","max")
field.doc[@jakarta.validation.constraints.Min]=groovy:"min:" + it.ann("jakarta.validation.constraints.Min","value")
field.doc[@jakarta.validation.constraints.Max]=groovy:"max:" + it.ann("jakarta.validation.constraints.Max","value")
field.doc[@jakarta.validation.constraints.Email]=groovy:"email format"
field.doc[@jakarta.validation.constraints.Pattern]=groovy:"pattern:" + it.ann("jakarta.validation.constraints.Pattern","regexp")
```
