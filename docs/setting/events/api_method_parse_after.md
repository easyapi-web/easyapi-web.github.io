# api.method.parse.after

- Callback after parsing the API method

| Rule Target (Context: it) | Additional Context |
| ------------ | ------------ |
| [method](../tools/it.html)  | None  |

## demo

***Add log***

```properties
api.method.parse.after=groovy:logger.info("API:" + it.name() + " parsing completed")
```
