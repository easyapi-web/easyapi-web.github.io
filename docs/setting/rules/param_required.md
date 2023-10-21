# param.required

- Used to indicate whether an API parameter is required (means cannot be empty).

## Built-in recommended configuration

```properties
#Support for javax.validation annotations
param.required=@javax.validation.constraints.NotBlank
param.required=@"javax.validation.constraints.NotNull
param.required=@javax.validation.constraints.NotEmpty
```

## Add support for swagger @ApiParam

```properties
param.required=@io.swagger.annotations.ApiParam#required
```

## demo

***MockCtrl.java***

```java
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @GetMapping("/string")
    public String mockString(
            @ApiParam(value = "seed for mock", required = true, defaultValue = "666666") long seed) {
        return Result.success("mock string");
    }

}
```

### Export as API response:

***Request Parameters:***

| Parameter name | required |	Demo | desc |
| --- | --- | --- | --- |
| seed | Yes | 666666 | seed for mock |