# json.field.parse.before

- Callback before parsing field

| Rule Target (Context: it) | Additional Context |
| ------------ | ------------ |
| [field](../tools/it.html) | None  |

## demo

***Add log***

```properties
json.field.parse.before=groovy:logger.info("Beginning to parse field: "+it.name())
```