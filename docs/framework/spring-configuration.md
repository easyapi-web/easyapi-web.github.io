# Spring Configuration & Properties

EasyApi provides extensions for Spring configuration and properties support.

## Spring ConfigurationProperties

The `spring-configuration` extension (enabled by default) supports `@ConfigurationProperties` annotation:

```properties
# Resolve @ConfigurationProperties prefix
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties#prefix
```

When a class is annotated with `@ConfigurationProperties(prefix = "app.security")`, EasyApi uses the prefix to resolve property placeholders:

```java
@ConfigurationProperties(prefix = "app.security")
public class SecurityProperties {
    private String tokenHeader;    // resolves app.security.tokenHeader
    private long tokenExpiration;  // resolves app.security.tokenExpiration
    // getters and setters
}
```

## Spring Properties

The `spring-properties` extension (disabled by default) can import and resolve Spring application properties:

```properties
# Import spring properties
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml

# Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```

When enabled, the `server.servlet.context-path` from your `application.yml` will be automatically used as the class prefix path.

::: warning
Spring Properties support is **disabled by default** because it loads all Spring properties which may include sensitive values. Enable it in IDE settings if needed.
:::

## Spring Validations

The `spring-validations` extension (enabled by default) supports Spring validation annotations:

```properties
field.required=@org.springframework.lang.NonNull
param.ignore=groovy:it.type().isExtend("org.springframework.validation.BindingResult")
```

This extension is enabled by default when `org.springframework.lang.NonNull` is on the classpath.
