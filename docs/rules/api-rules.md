# API Rules

Rules for controlling how APIs are named, grouped, and identified.

## Available Rules

| Rule Key | Type | Description |
|----------|------|-------------|
| `api.name` | string | Set API name |
| `folder.name` | string | Set folder/group name for API |
| `class.doc` | string (merge distinct) | Set class documentation |
| `class.prefix.path` | string | Set class-level prefix path |
| `endpoint.prefix.path` | string | Set endpoint-level prefix path |
| `ignore` | boolean | Ignore a class or method |
| `method.doc` | string (merge distinct) | Set method documentation |
| `method.default.http.method` | string | Set default HTTP method |
| `method.content.type` | string | Set content type |
| `method.return` | string | Set method return type |
| `method.return.main` | string | Set primary return type |
| `method.additional.header` | string (merge) | Add additional headers |
| `method.additional.param` | string (merge) | Add additional parameters |
| `method.additional.response.header` | string (merge) | Add additional response headers |
| `path.multi` | string | Handle multiple paths |

## Property Resolution Rules

| Rule Key | Type | Description |
|----------|------|-------------|
| `properties.prefix` | string | Set property prefix for `@ConfigurationProperties` classes |
| `properties.additional` | string | Load additional properties files |

## Class Recognition Rules

| Rule Key | Type | Aliases | Description |
|----------|------|---------|-------------|
| `class.is.ctrl` | boolean | `class.is.spring.ctrl` | Determine if a class is a Spring controller |
| `class.is.feign.ctrl` | boolean | — | Determine if a class is a Feign client |
| `class.is.jaxrs.ctrl` | boolean | — | Determine if a class is a JAX-RS resource |
| `class.is.quarkus.ctrl` | boolean | — | Determine if a class is a Quarkus resource |
| `class.is.grpc` | boolean | — | Determine if a class is a gRPC service |

## API Lifecycle Events

| Rule Key | Type | Aliases | Description |
|----------|------|---------|-------------|
| `api.class.parse.before` | event | — | Before parsing a class as API |
| `api.class.parse.after` | event | — | After parsing a class as API |
| `api.method.parse.before` | event | — | Before parsing a method as API |
| `api.method.parse.after` | event | — | After parsing a method as API |
| `api.param.parse.before` | event | `param.before` | Before parsing a parameter |
| `api.param.parse.after` | event | `param.after` | After parsing a parameter |
| `export.after` | event | — | After export completes |

## HTTP Call Events

| Rule Key | Type | Description |
|----------|------|-------------|
| `http.call.before` | event | Before making an HTTP call (in API Call feature) |
| `http.call.after` | event | After an HTTP call completes |

## api.name

Set the API name for a class:

```properties
api.name=#regex:^(.+)Controller$=$1

api.name=groovy:it.name().replace("Controller", "").replace("Resource", "")
```

## class.is.ctrl

Determine if a class should be treated as an API controller:

```properties
class.is.ctrl=groovy:it.hasAnn("org.apache.dubbo.config.annotation.DubboService")||it.hasAnn("com.alibaba.dubbo.config.annotation.Service")
```

## class.is.feign.ctrl

Recognize Feign client interfaces:

```properties
class.is.feign.ctrl=groovy:it.hasAnn("org.springframework.cloud.openfeign.FeignClient")
```

## class.is.jaxrs.ctrl

Recognize JAX-RS resource classes:

```properties
class.is.jaxrs.ctrl=groovy:it.hasAnn("javax.ws.rs.Path")
```

## class.is.grpc

Recognize gRPC service classes:

```properties
class.is.grpc=groovy:it.isExtend("io.grpc.BindableService")
```

## class.prefix.path

Set the prefix path for all APIs in a class:

```properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false

class.prefix.path=groovy:"/api/v1" + it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value()
```

## endpoint.prefix.path

Set a prefix path at the endpoint level (applied after `class.prefix.path`):

```properties
endpoint.prefix.path=groovy:"/v2"
```

## folder.name

Group APIs into folders:

```properties
folder.name=groovy:it.packageName().split("\\.")[-1]

folder.name=groovy:it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value()?.replace("/", "-") ?: "default"
```

## ignore

Ignore specific classes or methods:

```properties
ignore=groovy:it.hasAnn("java.lang.Deprecated")

ignore=#regex:^internal.*
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

## properties.prefix

Set the property prefix for `@ConfigurationProperties` classes. This is used by the `spring-configuration` extension:

```properties
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties#prefix
```

When a class is annotated with `@ConfigurationProperties(prefix = "app.security")`, the prefix `app.security` will be used to resolve property placeholders in that class.

## properties.additional

Load additional properties files for placeholder resolution:

```properties
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml
```

You can also load remote properties:

```properties
properties.additional=https://raw.githubusercontent.com/example/config/main/application.properties
```

Use `###set ignoreNotFoundFile = true` to suppress errors when a file doesn't exist:

```properties
###set ignoreNotFoundFile = true
properties.additional=${module_path}/src/main/resources/application.properties
###set ignoreNotFoundFile = false
```
