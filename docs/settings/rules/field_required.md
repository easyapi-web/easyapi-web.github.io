# field.required

Mark a field as required.

## Usage

```properties
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull")
```

## Example

### Use javax.validation annotations

```properties
field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull")||it.hasAnn("javax.validation.constraints.NotBlank")||it.hasAnn("javax.validation.constraints.NotEmpty")
```

### Use annotation rule

```properties
field.required=@javax.validation.constraints.NotNull
field.required=@javax.validation.constraints.NotBlank
field.required=@javax.validation.constraints.NotEmpty
```

### Use Swagger @ApiModelProperty

```properties
field.required=groovy:it.ann("io.swagger.annotations.ApiModelProperty")?.required()
```
