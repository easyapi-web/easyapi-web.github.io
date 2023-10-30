
# Use config file (current project)

 - Add the configuration files to the root of the project or module

| file  |  type  |  effect operations  |
| ------------ | ------------ | ------------ |
| .easy.api.config | property | markdown/postman |
| .easy.api.yml/.easy.api.yaml | yml | markdown/postman |
| .postman.config | property | postman |
| .postman.yml/.postman.yaml | yml | postman |

- You can use the `properties.additional` field in the configuration file to load additional configuration files:
```properties
properties.additional=$additional_properties_file_path$
```

### The directory structure after configuration is as follows:

```
project-root
├── java(module1)
│   ├── common.iml
│   ├── pom.xml
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── **
│   │   │   │           └── **
│   │   │   │               └── **
│   │   │   │                   └── **.java
│   │   │   └── resources
│   │   └── test
│   │       └── java
│   └────.easy.api.config①
├── kotlin(module2)
│   ├── kotlin-demo.iml
│   ├── pom.xml
│   ├── src
│   │   ├── main
│   │   │   ├── kotlin
│   │   │   │   └── com
│   │   │   │       └── **
│   │   │   │           └── **
│   │   │   │               └── **
│   │   │   │                   └── **
│   │   │   │                       └── **.kt
│   │   │   └── resources
│   │   │       ├── application.yaml②
│   │   │       ├── static
│   │   │       └── templates
│   │   └── test
│   │       └── kotlin
│   └────.easy.api.yml③
├── springboot-demo(module3)
│   ├── pom.xml
│   ├── springboot-demo.iml
│   └── src
│       ├── main
│       │   ├── java
│       │   │   └── com
│       │   │       └── **
│       │   │           └── **
│       │   │               └── **
│       │   │                   └── **
│       │   │                       └── **
│       │   │                           └── **.java
│       │   └── resources
│       │       ├── application.properties④
│       │       ├── static
│       │       └── templates
│       └── test
├── springboot-webflux-demo(module4)
│   ├── pom.xml
│   ├── springboot-webflux-demo.iml
│   └── src
│       ├── main
│       │   ├── java
│       │   │   └── **
│       │   │       └── **
│       │   │           └── **
│       │   │               └── **
│       │   │                   └── **
│       │   │                       └── **.java
│       │   └── resources
│       │       └── application.yml⑤
│       └── test
└────.easy.api.config⑥
```

### In the directory structure:
- ①: Only affects `java(module1)`.
- ②: If the default recommended configuration is enabled, it will be loaded by default, so the property in it can be used through `{property}` in ③.
- ③: Only affects kotlin(module2).
- ④/⑤: `application.properties/application.yml/application.yaml` can also be loaded as ②.
- ⑥: Affects `java(module1)/kotlin(module2)/springboot-demo(module3)/springboot-webflux-demo(module4)`.