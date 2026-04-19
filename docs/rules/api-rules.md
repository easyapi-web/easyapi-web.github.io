# API Rules

Rules for controlling how APIs are named, grouped, and identified.

## Available Rules

| Rule Key | Description |
|----------|-------------|
| `api.name` | Set API name |
| `class.prefix.path` | Set class-level prefix path |
| `class.is.ctrl` | Determine if a class is a controller |
| `class.doc` | Set class documentation |
| `folder.name` | Set folder/group name for API |
| `ignore` | Ignore a class or method |
| `method.default.http.method` | Set default HTTP method |
| `method.content.type` | Set content type |
| `method.additional.header` | Add additional headers |
| `method.additional.param` | Add additional parameters |
| `method.doc` | Set method documentation |
| `method.return` | Set method return type |
| `method.return.main` | Set primary return type |
| `path.multi` | Handle multiple paths |

## api.name

Set the API name for a class:

```properties
# Use class name without "Controller" suffix
api.name=#regex:^(.+)Controller$=$1

# Use Groovy for complex logic
api.name=groovy:it.name().replace("Controller", "").replace("Resource", "")
```

## class.is.ctrl

Determine if a class should be treated as an API controller:

```properties
# Default: classes with @RestController or @Controller
# Custom: also treat Dubbo services as controllers
class.is.ctrl=groovy:it.hasAnn("org.apache.dubbo.config.annotation.DubboService")||it.hasAnn("com.alibaba.dubbo.config.annotation.Service")
```

## class.prefix.path

Set the prefix path for all APIs in a class:

```properties
# Use Spring context-path
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false

# Use custom prefix
class.prefix.path=groovy:"/api/v1" + it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value()
```

## folder.name

Group APIs into folders:

```properties
# Group by package name
folder.name=groovy:it.pkg().name().split("\\.")[-1]

# Group by annotation
folder.name=groovy:it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value()?.replace("/", "-") ?: "default"
```

## ignore

Ignore specific classes or methods:

```properties
# Ignore deprecated APIs
ignore=groovy:it.hasAnn("java.lang.Deprecated")

# Ignore by name pattern
ignore=#regex:^internal.*
```
