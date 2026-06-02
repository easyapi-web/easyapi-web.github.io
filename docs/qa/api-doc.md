# How to Set API/Folder Name/Description

## API Name

Use the `api.name` rule to set the API name:

```properties
api.name=#name
```

Or use a regex pattern:

```properties
api.name=#regex:^(.+)Controller$=$1
```

## API Description

Use the `method.doc` rule to set API descriptions from Javadoc:

```properties
method.doc=groovy:it.doc()
```

Or from Swagger annotations:

```properties
method.doc=groovy:it.ann("io.swagger.annotations.ApiOperation")?.value()
```

## Folder Name

Use the `folder.name` rule to set the folder/group name:

```properties
folder.name=groovy:it.packageName().split("\\.")[-1]
```

## Class Description

Use the `class.doc` rule:

```properties
class.doc=groovy:it.doc()
```
