# json.class.parse.before

- Callback before parsing class

| Rule Target (Context: it) | Additional Context |
| ------------ | ------------ |
| [class](../tools/it.html) | None  |

## demo

***Add log***

```properties
json.class.parse.before=groovy:logger.info("Beginning to parse class: "+it.name())
```
