### The built-in recommended configuration

- Resolve `HttpEntity`/`RequestEntity`/`ResponseEntity`

```properties
#resolve HttpEntity/RequestEntity/ResponseEntity
###set resolveProperty = false
json.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.HttpEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object
###set resolveProperty = true
```

- Load spring boot configuration properties

```properties
#Import spring properties
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml
```

- Use 'server.servlet.context-path' as prefix path by default

```properties
#Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```