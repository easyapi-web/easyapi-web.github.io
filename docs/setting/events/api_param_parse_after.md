# api.param.parse.after

- Callback after parsing the API parameter

| Rule Target (Context: it) | Additional Context |
| ------------ | ------------ |
| [param](../tools/it.html) | None  |

## demo

***Add log***

```properties
api.param.parse.after=groovy:logger.info("API parameter:" + it.name() + " parsing completed")
```
