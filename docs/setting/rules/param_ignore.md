# param.ignore

- Setting the ignoring of API parameters.

### Add support for swagger @ApiParam

```properties
param.ignore=@io.swagger.annotations.ApiParam#hidden
```

### demo

```java
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @GetMapping("/string")
    public String mockString(
            @ApiParam(value = "seed for mock",hidden = true)  long seed) {
        return Result.success("mock string");
    }

}
```