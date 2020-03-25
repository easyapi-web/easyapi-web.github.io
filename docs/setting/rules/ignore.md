# ignore

- Used to ignore class/method
- Comment `@ignore` on the class to ignore all apis in the class.
- Comment `@ignore` on the method to ignore the api for the method.


### Built-in recommended configuration

```properties
ignore=#ignore
```

### demo

* Comment like this on the class to ignore all apis in the class

```java
/**
* Mock Apis
*
* @ignore
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {
}
```

* Comment like this on the method to ignore the api:

```java
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
        * Mock String
        * @ignore
        */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```