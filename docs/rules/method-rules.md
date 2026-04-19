# Method Rules

Rules for controlling how methods are documented and how return types are resolved.

## Available Rules

| Rule Key | Type | Description |
|----------|------|-------------|
| `method.doc` | string (merge distinct) | Set method documentation |
| `method.return` | string | Set method return type |
| `method.return.main` | string | Set primary return type for multiple returns |
| `method.content.type` | string | Set content type |
| `method.default.http.method` | string | Set default HTTP method |
| `method.additional.header` | string (merge) | Add additional headers to method |
| `method.additional.param` | string (merge) | Add additional parameters to method |
| `method.additional.response.header` | string (merge) | Add additional response headers to method |

## Method Lifecycle Events

| Rule Key | Type | Description |
|----------|------|-------------|
| `api.method.parse.before` | event | Before parsing a method as API |
| `api.method.parse.after` | event | After parsing a method as API |

## method.doc

Set method descriptions:

```properties
method.doc=groovy:it.doc()?.split("\n")?.find { line -> !line.startsWith("@") }

method.doc=groovy:it.ann("io.swagger.annotations.ApiOperation")?.value()
```

## method.return

Override method return types:

```properties
method.return=groovy:it.ann("com.example.CustomReturn")?.value()
```

## method.return.main

When a method has multiple possible return types, set the primary one:

```properties
method.return.main=groovy:it.doc()?.find("@return\\s+(\\S+)")?.group(1)
```

## method.default.http.method

Set the default HTTP method when not specified by annotations:

```properties
method.default.http.method=groovy:it.name().startsWith("save") || it.name().startsWith("create") ? "POST" : "GET"
```

## method.content.type

Set the content type for the request body:

```properties
method.content.type=groovy:it.hasAnn("org.springframework.web.bind.annotation.PostMapping") ? "application/json" : null
```

## method.additional.header

Add extra headers to API methods:

```properties
method.additional.header=groovy:{"name":"Authorization","value":"Bearer ${token}","desc":"Auth token","required":true}
```

## method.additional.param

Add extra parameters to API methods:

```properties
method.additional.param=groovy:{"name":"version","value":"v1","desc":"API version","required":false}
```

## method.additional.response.header

Add extra response headers to API methods:

```properties
method.additional.response.header=groovy:{"name":"X-Total-Count","value":"0","desc":"Total count","required":false}
```
