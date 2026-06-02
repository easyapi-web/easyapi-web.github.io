# field.doc

Set field documentation/description.

## Usage

```properties
field.doc=groovy:it.doc()
```

Alias: `doc.field`

This rule uses merge distinct mode — multiple values will be merged without duplicates.

## Example

### Use Swagger @ApiModelProperty

```properties
field.doc=groovy:it.ann("io.swagger.annotations.ApiModelProperty")?.value()
```

### Strip javadoc tags from description

```properties
field.doc=groovy:it.doc()?.replaceFirst("@\\S+\\s*", "")
```

### Add validation constraint info

```properties
field.doc[@javax.validation.constraints.Size]=groovy:"min:" + it.ann("javax.validation.constraints.Size","min") + ", max:" + it.ann("javax.validation.constraints.Size","max")
field.doc[@javax.validation.constraints.Min]=groovy:"min:" + it.ann("javax.validation.constraints.Min","value")
field.doc[@javax.validation.constraints.Email]=groovy:"email format"
```
