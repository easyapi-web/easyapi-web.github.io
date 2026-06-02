# api.method.parse.after

Event fired after parsing a method as an API.

## Usage

```properties
api.method.parse.after=groovy:logger.info("Parsed method: " + it.name())
```

The `it` context is a method element.
