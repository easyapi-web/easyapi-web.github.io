# field.advanced

Mark a field as advanced (typically collapsed or hidden by default in UI).

## Usage

```properties
field.advanced=groovy:it.hasAnn("com.example.AdvancedField") ? "true" : null
```

This rule uses merge mode — multiple values will be accumulated.
