# json.field.parse.after

Event fired after parsing a field as JSON.

Alias: `field.parse.after`

## Usage

```properties
json.field.parse.after=groovy:logger.info("Parsed JSON field: " + it.name())
```

The `it` context is a field element.
