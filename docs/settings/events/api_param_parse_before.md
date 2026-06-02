# api.param.parse.before

Event fired before parsing a parameter.

Alias: `param.before`

## Usage

```properties
api.param.parse.before=groovy:logger.info("Parsing param: " + it.name())
```

The `it` context is a parameter element.
