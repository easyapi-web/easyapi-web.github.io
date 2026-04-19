# FAQ

Frequently asked questions about EasyApi.

## How do I add a custom configuration?

Create a `.easy.api.config` file in your project root. See [Local File Config](/configuration/local-file-config) for details.

## How do I mark an API as deprecated?

Use the `@Deprecated` annotation on the method or class:

```java
@Deprecated
@GetMapping("/old-api")
public Result oldApi() {
    // ...
}
```

Or use the `ignore` rule to exclude deprecated APIs:

```properties
ignore=groovy:it.hasAnn("java.lang.Deprecated")
```

## How do I ignore specific fields?

Use the `field.ignore` rule:

```properties
# Ignore by name
field.ignore=groovy:it.name() == "password"

# Ignore by annotation
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")
```

See [Field Rules](/rules/field-rules) for more options.

## How do I ignore specific APIs?

Use the `ignore` rule:

```properties
# Ignore by annotation
ignore=groovy:it.hasAnn("java.lang.Deprecated")

# Ignore by name pattern
ignore=#regex:^internal.*
```

## How do I group APIs into folders?

Use the `folder.name` rule:

```properties
# Group by package
folder.name=groovy:it.packageName().split("\\.")[-1]

# Group by annotation value
folder.name=groovy:it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value()
```

## How do I handle multiple return types?

Use `@return` tags in your Java doc:

```java
/**
 * Get user info
 * @return success {@link User} User info
 * @return unauthorized {@link Error} Not authenticated
 */
@GetMapping("/users/{id}")
public Object getUser(@PathVariable Long id) {
    // ...
}
```

## How do I handle field type conversion?

Use `json.rule.convert`:

```properties
# Convert custom types
json.rule.convert[#regex:com.example.Wrapper<(.*?)>]=${1}
json.rule.convert[#regex:java.time.LocalDate]=java.lang.String
```

See [JSON Rules](/rules/json-rules) for more options.

## How do I add Spring Security permission info?

Use `method.additional.header` to add authorization headers:

```properties
method.additional.header=groovy:{"name":"Authorization","value":"Bearer ${token}","desc":"Auth token","required":true}
```

## How do I use javax.validation with groups?

See [javax.validation](/frameworks/javax-validation) for detailed group-based validation configuration.
