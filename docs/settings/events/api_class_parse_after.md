# api.class.parse.after

Event fired after parsing a class as an API.

## Usage

```properties
api.class.parse.after=groovy:logger.info("Parsed class: " + it.name())
```

The `it` context is a class element.
