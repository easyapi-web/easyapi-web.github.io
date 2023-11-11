# api.class.parse.after

- Callback after parsing the controller class

| Rule Target (Context: it) | Additional Context |
| ------------ | ------------ |
| [class](../tools/it.html)  | None  |

## demo

***Add log***

```properties
api.class.parse.after=groovy:logger.info("Controller:" + it.name() + " parsing completed")
```