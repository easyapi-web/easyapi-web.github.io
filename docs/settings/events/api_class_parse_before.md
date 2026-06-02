# api.class.parse.before

Event fired before parsing a class as an API.

## Usage

```properties
api.class.parse.before=groovy:logger.info("Parsing class: " + it.name())
```

The `it` context is a class element.
