# Support for Spring Boot

### Many Spring Boot-related configurations are found in the recommended settings

- Auto-loading of Spring Boot configurations:

```properties
#Import spring properties
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml
```

- Default usage of `server.servlet.context-path` from Spring Boot configurations:

```
#Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```