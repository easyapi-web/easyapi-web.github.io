# class.prefix.path

Set the prefix path for all APIs in a class.

## Usage

```properties
class.prefix.path=groovy:"/api/v1"
```

## Example

### Use server.servlet.context-path from Spring properties

```properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```

### Combine with annotation value

```properties
class.prefix.path=groovy:"/api/v1" + it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value()
```
