# api.method.parse.before

Event fired before parsing a method as an API.

## Usage

```properties
api.method.parse.before=groovy:logger.info("Parsing method: " + it.name())
```

The `it` context is a method element.
