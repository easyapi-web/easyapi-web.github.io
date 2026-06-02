# param.required

Mark a parameter as required.

## Usage

```properties
param.required=groovy:it.ann("org.springframework.web.bind.annotation.RequestParam")?.required() ?: true
```

## Example

### Use javax.validation annotations

```properties
param.required=groovy:it.hasAnn("javax.validation.constraints.NotNull")||it.hasAnn("javax.validation.constraints.NotBlank")
```

### Use annotation rule

```properties
param.required=@javax.validation.constraints.NotNull
param.required=@javax.validation.constraints.NotBlank
param.required=@javax.validation.constraints.NotEmpty
```
