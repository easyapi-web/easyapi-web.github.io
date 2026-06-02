# field.name.prefix

Add a prefix to field names.

## Usage

```properties
field.name.prefix=groovy:it.containingClass()?.name() == "UserDTO" ? "user_" : null
```
