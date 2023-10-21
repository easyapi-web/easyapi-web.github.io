# param.default.value

- Setting the default value for parameters.

### Add support for swagger @ApiParam

```properties
param.default.value=@io.swagger.annotations.ApiParam#defaultValue
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
            @ApiParam(value = "seed for mock",defaultValue = "666")  long seed) {
        return Result.success("mock string");
    }

}
```