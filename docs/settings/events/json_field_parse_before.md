# json.field.parse.before

Event fired before parsing a field as JSON.

Alias: `field.parse.before`

## Usage

```properties
json.field.parse.before=groovy:logger.info("Parsing JSON field: " + it.name())
```

The `it` context is a field element.
