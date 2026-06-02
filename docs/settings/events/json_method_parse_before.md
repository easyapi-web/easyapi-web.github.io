# json.method.parse.before

Event fired before parsing a method as JSON.

## Usage

```properties
json.method.parse.before=groovy:logger.info("Parsing JSON method: " + it.name())
```

The `it` context is a method element.
