# json.field.parse.after

- Callback after parsing field

| Rule Target (Context: it) | Additional Context |
| ------------ | ------------ |
| [field](../tools/it.html) | None  |

## demo

***Add log***

```properties
json.field.parse.after=groovy:logger.info("Field: "+it.name()+" parsing completed")
```