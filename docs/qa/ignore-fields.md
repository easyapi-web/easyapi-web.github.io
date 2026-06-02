# How to Ignore Fields

Use the `field.ignore` rule to exclude fields from API documentation.

## By Name

```properties
field.ignore=groovy:it.name() == "password"
```

## By Name Pattern

```properties
field.ignore=groovy:it.name().toLowerCase().contains("password")
```

## By Annotation

```properties
# Jackson @JsonIgnore
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")

# Gson @Expose(serialize = false)
field.ignore=groovy:it.hasAnn("com.google.gson.annotations.Expose") && it.ann("com.google.gson.annotations.Expose")?.serialize() == false
```

## By Annotation Rule

```properties
field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value
```

## By Type

```properties
field.ignore=groovy:it.type().qualifiedName() == "byte[]"
```

See [field.ignore](/settings/rules/field_ignore) for more details.
