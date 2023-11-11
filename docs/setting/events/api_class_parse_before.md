# api.class.parse.before

- Callback before parsing the controller class

| Rule Target (Context: it) | Additional Context |
| ------------ | ------------ |
| [class](../tools/it.html)  | None  |

## demo

***Add log***

```properties
api.class.parse.before=groovy:logger.info("Beginning to parse controller:" + it.name())
```