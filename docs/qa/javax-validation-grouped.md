# Enable javax.validation Groups

By default, the `javax-validation` extension treats all `@NotNull`/`@NotBlank`/`@NotEmpty` as required regardless of groups.

To respect validation groups, enable the `javax-validation-strict` extension in IDE settings:

**Preferences** > **Other Settings** > **EasyApi** > **Extensions** > **javax-validation-strict**

With strict mode enabled, when a parameter is annotated with `@Validated(Group.class)`, only fields whose validation annotations include that group will be marked as required:

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

When called with `@Validated(Create.class)`, only `name` is required. When called with `@Validated(Update.class)`, only `id` is required.

See [javax.validation](/framework/javax-validation) for more details.
