# fieldContext

Field path context, available **only in field rules**. Provides access to the current field's path in the object hierarchy.

## Usage

```groovy
fieldContext.path()                 // current field path (e.g., "user.address.street")
fieldContext.property("street")    // resolve a child property path (e.g., "user.address.street")
```

This is particularly useful with `@JsonIgnoreProperties` and `@JsonUnwrapped` for tracking nested field paths.
