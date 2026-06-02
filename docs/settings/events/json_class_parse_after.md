# json.class.parse.after

Event fired after parsing a class as JSON.

## Usage

```properties
json.class.parse.after=groovy:logger.info("Parsed JSON class: " + it.name())
```

The `it` context is a class element.
