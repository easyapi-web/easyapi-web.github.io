# json.class.parse.after

- Callback after parsing the class

| Rule Target (Context: it) | Additional Context |
| ------------ | ------------ |
| [class](../tools/it.html) | None  |

## demo

***Add log***

```properties
json.class.parse.after=groovy:logger.info("Class:" + it.name() + " parsing completed")
```