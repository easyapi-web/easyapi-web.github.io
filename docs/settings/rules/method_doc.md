# method.doc

Set method documentation.

## Usage

```properties
method.doc=groovy:it.doc()
```

This rule uses merge distinct mode — multiple values will be merged without duplicates.

## Example

### Use Javadoc as method documentation

```properties
method.doc=groovy:it.doc()?.split("\n")?.find { line -> !line.startsWith("@") }
```

### Use Swagger @ApiOperation

```properties
method.doc=groovy:it.ann("io.swagger.annotations.ApiOperation")?.value()
```

### Add deprecated info

```properties
method.doc[#deprecated]=groovy:"\n「Deprecated」" + it.doc("deprecated")
method.doc[@java.lang.Deprecated]=「Deprecated」
```
