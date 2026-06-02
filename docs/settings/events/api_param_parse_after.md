# api.param.parse.after

Event fired after parsing a parameter.

Alias: `param.after`

## Usage

```properties
api.param.parse.after=groovy:logger.info("Parsed param: " + it.name())
```

The `it` context is a parameter element.
