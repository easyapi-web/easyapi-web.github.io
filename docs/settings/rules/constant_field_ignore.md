# constant.field.ignore

Ignore static final constant fields in model classes.

## Usage

```properties
constant.field.ignore=true
```

## Example

```properties
# Always ignore constant fields
constant.field.ignore=true

# Ignore constants except in enums
constant.field.ignore=groovy:it.containingClass()?.isEnum() == false
```
