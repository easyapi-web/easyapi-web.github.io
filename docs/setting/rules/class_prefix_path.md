# class.prefix.path

- Set API prefix path

### Built-in recommended configuration

```properties
#Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```

### By the recommended configuration, The following spring configuration `server.servlet.context-path` will be used as API prefix path.

- spring application.properties 

```properties
server.servlet.context-path=/demo
```
- spring application.yaml/application.yml

```yaml
server:
  servlet:
      context-path: /demo
```

### demo

```properties
class.prefix.path=/demo
```