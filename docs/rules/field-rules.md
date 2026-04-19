# Field Rules

Rules for controlling how fields are named, documented, and displayed.

## Available Rules

| Rule Key | Type | Aliases | Description |
|----------|------|---------|-------------|
| `field.name` | string | `json.rule.field.name` | Set field name in documentation |
| `field.name.prefix` | string | — | Add prefix to field name |
| `field.name.suffix` | string | — | Add suffix to field name |
| `field.doc` | string (merge distinct) | `doc.field` | Set field documentation/description |
| `field.ignore` | boolean | — | Ignore a field |
| `field.default.value` | string | — | Set field default value |
| `field.required` | boolean | — | Set whether a field is required |
| `field.demo` | string | — | Set field demo/example value |
| `field.order` | string | — | Set field display order |
| `field.order.with` | string | — | Set field order relative to another field |
| `field.advanced` | string (merge) | — | Set field as advanced (collapsed by default) |
| `field.max.depth` | int | — | Maximum depth for field expansion |
| `param.max.depth` | int | — | Maximum depth for parameter expansion |
| `constant.field.ignore` | boolean | — | Ignore constant fields |

## Field Lifecycle Events

| Rule Key | Type | Description |
|----------|------|-------------|
| `json.field.parse.before` | event (alias: `field.parse.before`) | Before parsing a field as JSON |
| `json.field.parse.after` | event (alias: `field.parse.after`) | After parsing a field as JSON |

## field.name

Rename fields in the documentation:

```properties
field.name=groovy:it.ann("com.fasterxml.jackson.annotation.JsonProperty")?.value()

field.name=groovy:it.name().replaceAll("([A-Z])", "_$1").toLowerCase()
```

## field.name.prefix

Add a prefix to field names:

```properties
field.name.prefix=groovy:it.containingClass()?.name() == "UserDTO" ? "user_" : null
```

## field.name.suffix

Add a suffix to field names:

```properties
field.name.suffix=groovy:it.type()?.isEnum() ? "_enum" : null
```

## field.doc

Set field descriptions:

```properties
field.doc=groovy:it.ann("io.swagger.annotations.ApiModelProperty")?.value()

field.doc=groovy:it.doc()?.replaceFirst("@\\S+\\s*", "")
```

## field.ignore

Exclude fields from documentation:

```properties
field.ignore=groovy:it.name().toLowerCase().contains("password")

field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")
```

## field.default.value

Set default values for fields:

```properties
field.default.value=groovy:it.ann("io.swagger.annotations.ApiModelProperty")?.example()
```

## field.required

Mark fields as required:

```properties
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull")||it.hasAnn("javax.validation.constraints.NotBlank")||it.hasAnn("javax.validation.constraints.NotEmpty")

field.required=groovy:it.ann("io.swagger.annotations.ApiModelProperty")?.required()
```

## field.demo

Set demo/example values for fields:

```properties
field.demo=groovy:it.name() == "email" ? "user@example.com" : null
```

## field.order

Control field display order (lower values appear first):

```properties
field.order=groovy:it.name() == "id" ? 0 : 100
```

## field.order.with

Position a field relative to another:

```properties
field.order.with[password]=confirmPassword
```

## field.advanced

Mark fields as advanced (typically collapsed or hidden by default in UI):

```properties
field.advanced=groovy:it.hasAnn("com.example.AdvancedField") ? "true" : null
```

## field.max.depth

Limit the depth of nested object expansion for fields:

```properties
field.max.depth=5
```

## param.max.depth

Limit the depth of nested object expansion for parameters:

```properties
param.max.depth=3
```

## constant.field.ignore

Ignore static final constant fields in model classes:

```properties
constant.field.ignore=true

constant.field.ignore=groovy:it.containingClass()?.isEnum() == false
```
