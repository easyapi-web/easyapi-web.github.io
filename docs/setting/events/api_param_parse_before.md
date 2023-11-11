# api.param.parse.before

- Callback before parsing the API parameter

| Rule Target (Context: it) | Additional Context |
| ------------ | ------------ |
| [param](../tools/it.html) | None  |

## demo

***Add log***

```properties
api.param.parse.before=groovy:logger.info("Beginning to parse API parameter:" + it.name())
```
