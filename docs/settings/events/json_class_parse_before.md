# json.class.parse.before

Event fired before parsing a class as JSON.

## Usage

```properties
json.class.parse.before=groovy:logger.info("Parsing JSON class: " + it.name())
```

The `it` context is a class element.
