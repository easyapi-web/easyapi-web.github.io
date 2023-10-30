# class.doc(doc.class)

> 类上的额外注释

### 添加对swagger @Api支持

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