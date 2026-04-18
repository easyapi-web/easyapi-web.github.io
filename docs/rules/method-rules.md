# Method Rules

Rules for controlling how methods are documented and how return types are resolved.

## Available Rules

| Rule Key | Description |
|----------|-------------|
| `method.doc` | Set method documentation |
| `method.return` | Set method return type |
| `method.return.main` | Set primary return type for multiple returns |
| `method.content.type` | Set content type |
| `method.default.http.method` | Set default HTTP method |
| `method.additional.header` | Add additional headers to method |
| `method.additional.param` | Add additional parameters to method |
| `mdoc.method.path` | Set method path for method docs |
| `mdoc.method.http.method` | Set HTTP method for method docs |
| `mdoc.class.filter` | Filter classes for method doc export |

## method.doc

Set method descriptions:

```properties
# Use Java doc
method.doc=groovy:it.doc()?.split("\n")?.find { line -> !line.startsWith("@") }

# Use Swagger @ApiOperation
method.doc=groovy:it.ann("io.swagger.annotations.ApiApiOperation")?.value()
```

## method.return

Override method return types:

```properties
# Use @return tag in Java doc
method.return=groovy:it.doc()?.find("@return\\s+(\\S+)")?.group(1)

# Custom return type based on annotation
method.return=groovy:it.ann("com.example.CustomReturn")?.value()
```

## method.return.main

When a method has multiple possible return types, set the primary one:

```properties
# Use the first @return type as main
method.return.main=groovy:it.doc()?.find("@return\\s+(\\S+)")?.group(1)
```

## method.default.http.method

Set the default HTTP method when not specified by annotations:

```properties
# Default to POST for methods starting with "save" or "create"
method.default.http.method=groovy:it.name().startsWith("save") || it.name().startsWith("create") ? "POST" : "GET"
```

## method.additional.header

Add extra headers to API methods:

```properties
# Add authorization header to all APIs
method.additional.header=groovy:{"name":"Authorization","value":"Bearer ${token}","desc":"Auth token","required":true}
```

## method.additional.param

Add extra parameters to API methods:

```properties
# Add common query parameter
method.additional.param=groovy:{"name":"version","value":"v1","desc":"API version","required":false}
```

## mdoc.class.filter

Filter which classes are included in method doc export:

```properties
# Only include classes in the "service" package
mdoc.class.filter=groovy:it.pkg().name().contains(".service.")
```
