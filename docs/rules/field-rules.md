# Field Rules

Rules for controlling how fields are named, documented, and displayed.

## Available Rules

| Rule Key | Description |
|----------|-------------|
| `field.name` | Set field name in documentation |
| `field.doc` | Set field documentation/description |
| `field.ignore` | Ignore a field |
| `field.default.value` | Set field default value |
| `field.required` | Set whether a field is required |
| `field.demo` | Set field demo/example value |
| `field.order` | Set field display order |
| `field.order.with` | Set field order relative to another field |
| `constant.field.ignore` | Ignore constant fields |

## field.name

Rename fields in the documentation:

```properties
# Use Jackson @JsonProperty annotation
field.name=groovy:it.ann("com.fasterxml.jackson.annotation.JsonProperty")?.value()

# Custom naming convention
field.name=groovy:it.name().replaceAll("([A-Z])", "_$1").toLowerCase()
```

## field.doc

Set field descriptions:

```properties
# Use Swagger @ApiModelProperty
field.doc=groovy:it.ann("io.swagger.annotations.ApiModelProperty")?.value()

# Use Java doc comment
field.doc=groovy:it.doc()?.replaceFirst("@\\S+\\s*", "")
```

## field.ignore

Exclude fields from documentation:

```properties
# Ignore password fields
field.ignore=groovy:it.name().toLowerCase().contains("password")

# Ignore fields with @JsonIgnore
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")

# Ignore by annotation
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnoreProperties")
```

## field.default.value

Set default values for fields:

```properties
# Use validation annotation for required fields
field.default.value=groovy:it.hasAnn("javax.validation.constraints.NotNull") ? "required" : null

# Use Swagger example
field.default.value=groovy:it.ann("io.swagger.annotations.ApiModelProperty")?.example()
```

## field.required

Mark fields as required:

```properties
# Use javax.validation annotations
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull")||it.hasAnn("javax.validation.constraints.NotBlank")||it.hasAnn("javax.validation.constraints.NotEmpty")

# Use Swagger required attribute
field.required=groovy:it.ann("io.swagger.annotations.ApiModelProperty")?.required()
```

## field.order

Control field display order:

```properties
# Move "id" field to the top
field.order=groovy:it.name() == "id" ? 0 : 100
```

## field.order.with

Position a field relative to another:

```properties
# Place "confirmPassword" after "password"
field.order.with[password]=confirmPassword
```
