# How to Ignore API

Use the `ignore` rule to exclude specific classes or methods from API documentation.

## By Annotation

```properties
ignore=groovy:it.hasAnn("java.lang.Deprecated")
```

## By Name Pattern

```properties
ignore=#regex:^internal.*
```

## By Custom Logic

```properties
# Ignore methods that are not public
ignore=groovy:!it.hasModifier("public")

# Ignore specific gRPC methods
ignore=groovy:it.name() == "getServiceDescriptor" || it.name() == "bindService"
```

See [ignore](/settings/rules/ignore) for more details.
