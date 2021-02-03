# doc.class

- Additional comments on class

### Add support for swagger @Api

```properties
doc.class=@io.swagger.annotations.Api#value
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