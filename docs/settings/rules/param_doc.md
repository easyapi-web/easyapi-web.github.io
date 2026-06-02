# param.doc

Set parameter documentation.

## Usage

```properties
param.doc=groovy:it.ann("io.swagger.annotations.ApiParam")?.value()
```

Alias: `doc.param`

This rule uses merge distinct mode — multiple values will be merged without duplicates.

## Example

### Use Swagger @ApiParam

```properties
param.doc=groovy:it.ann("io.swagger.annotations.ApiParam")?.value()
```

### Use annotation rule

```properties
param.doc=@io.swagger.annotations.ApiParam#value
```
