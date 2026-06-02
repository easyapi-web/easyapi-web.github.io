# json.method.parse.after

Event fired after parsing a method as JSON.

## Usage

```properties
json.method.parse.after=groovy:logger.info("Parsed JSON method: " + it.name())
```

The `it` context is a method element.
