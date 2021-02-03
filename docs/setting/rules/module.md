# module

- Used to group APIs
- The name of urrent module/project is used by default
- When exporting `postman`, each `module` will be used as a separate folder


### Built-in recommended configuration

```properties
module=#module
```

### demo

```java
/**
* Mock Apis
*
* @module mock
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {
}
```