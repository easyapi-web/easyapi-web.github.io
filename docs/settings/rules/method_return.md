# method.return

Override method return types.

## Usage

```properties
method.return=groovy:it.ann("com.example.CustomReturn")?.value()
```

## Example

```properties
# Use annotation value as return type
method.return=groovy:it.ann("com.example.CustomReturn")?.value()
```

See also: [method.return.main](/settings/rules/method_return_main) for setting the primary return type when multiple exist.
