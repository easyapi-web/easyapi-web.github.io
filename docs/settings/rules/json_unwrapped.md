# json.unwrapped

Control whether fields annotated with `@JsonUnwrapped` should be flattened into the parent object.

## Usage

```properties
json.unwrapped=true
```

When enabled, fields from nested objects are merged into the parent instead of appearing as a nested object.
