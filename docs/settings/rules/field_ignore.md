# field.ignore

Ignore a field in API documentation.

## Usage

```properties
field.ignore=groovy:it.name() == "password"
```

## Example

### Ignore by name

```properties
field.ignore=groovy:it.name().toLowerCase().contains("password")
```

### Ignore by annotation

```properties
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")
```

### Ignore by annotation rule

```properties
field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value
```

### Ignore non-annotated fields (Gson @Expose mode)

```properties
field.ignore=groovy:!it.hasAnn("com.google.gson.annotations.Expose")
```
