# api.name

- Set the API name
- By default, the first line of the API comment will be used as the name of the API

## demo

***Configuration like this:***

```properties
# read api name from tag `api.name`
api.name=#api.name
```

***Usage:*** 

```java
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * @api.name Mock String
    * @undone
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }
}
```