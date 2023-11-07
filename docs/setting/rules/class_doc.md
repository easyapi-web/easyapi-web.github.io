# class.doc(doc.class)

> Additional comments on the class

### Adding support for Swagger @Api

```properties
class.doc=@io.swagger.annotations.Api#value
```

### demo

```java
@Api(value = "mock api tools", 
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```