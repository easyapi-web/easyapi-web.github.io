# folder.name

> Used to set the name of the folder to which the API belongs
> By default, the class where the API resides is used as the folder name

## demo

***Configuration is as follows:***

```properties
# read folder name from tag `folder`
folder.name=#folder
```

***Usage is as follows:*** 

```java
/**
* Some Mock related APIs
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * @folder Mock String
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }
}
```

In the default scenario, the above API would belong to the folder `Some Mock related APIs`. After adding the annotation `@folder Mock String`, it belongs to `Mock String`.