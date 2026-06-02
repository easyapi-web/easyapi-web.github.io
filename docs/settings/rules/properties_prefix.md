# properties.prefix

Set the property prefix for `@ConfigurationProperties` classes.

## Usage

```properties
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties#prefix
```

When a class is annotated with `@ConfigurationProperties(prefix = "app.security")`, the prefix `app.security` will be used to resolve property placeholders in that class.

This rule is provided by the `spring-configuration` extension (enabled by default).
