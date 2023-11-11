# api.method.parse.before

- Callback before parsing the API method

| Rule Target (Context: it) | Additional Context |
| ------------ | ------------ |
| [method](../tools/it.html)  | None  |

## demo

***Add log***


```properties
api.method.parse.before=groovy:logger.info("Beginning to parse API:" + it.name())
```
