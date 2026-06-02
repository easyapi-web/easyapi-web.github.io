# class.doc

Set class-level documentation.

## Usage

```properties
class.doc=groovy:it.doc()
```

This rule uses merge distinct mode — multiple values will be merged without duplicates.

## Example

```properties
# Use Javadoc as class documentation
class.doc=groovy:it.doc()

# Add Swagger @Api description
class.doc=groovy:it.ann("io.swagger.annotations.Api")?.description()
```
