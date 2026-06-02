# field.name

Set the field name in API documentation.

## Usage

```properties
field.name=groovy:it.ann("com.fasterxml.jackson.annotation.JsonProperty")?.value()
```

Alias: `json.rule.field.name` (deprecated)

## Example

### Use @JsonProperty value

```properties
field.name=@com.fasterxml.jackson.annotation.JsonProperty#value
```

### Convert camelCase to snake_case

```properties
field.name=groovy:it.name().replaceAll("([A-Z])", "_$1").toLowerCase()
```
