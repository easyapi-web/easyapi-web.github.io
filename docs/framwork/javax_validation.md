**There are some configurations for `javax.validation` in the built-in recommended configuration**

```properties
#Support for javax.validation annotations
param.required=@javax.validation.constraints.NotBlank
field.required=@"javax.validation.constraints.NotBlank
param.required=@"javax.validation.constraints.NotNull
field.required=@javax.validation.constraints.NotNull
param.required=@javax.validation.constraints.NotEmpty
field.required=@javax.validation.constraints.NotEmpty
```