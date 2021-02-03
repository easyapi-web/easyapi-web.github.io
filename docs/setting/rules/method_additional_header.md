# method.additional.header

- API requires additional ` header`

### For example, JWT, all interfaces need to carry tokens in the header

```properties
method.additional.header={name: "Authorization",value: "",desc: "authenticationToken",required:true, example:""}
```

### If you need to exclude the specified open apis without `token`, you can configure as follows:

- Define the following annotation:

```java
package com.itangcent.common.annotation;

/**
 * Declare interface as public
 */
@Documented
@Retention(RUNTIME)
@Target({TYPE, METHOD})
public @interface Public {
}

```

- Configured as follows

```properties
method.additional.header[!@com.itangcent.common.annotation.Public]={name: "Authorization",value: "",desc: "authenticationToken",required:true, example:""}
```

- Equivalent to

```properties
method.additional.header[groovy:!it.hasAnn("com.itangcent.common.annotation.Public")]={name: "Authorization",value: "",desc: "authenticationToken",required:true, example:""}
```


### demo

```java
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * public api
    * Token is not required
    */
    @Public
    @GetMapping("/apiWithoutToken")
    public Result<String> apiWithoutToken() {
        return Result.success("no token");
    }

    /**
    * private api
    * Token is required
    */
    @GetMapping("/apiWithToken")
    public Result<String> apiWithToken() {
        return Result.success("wow,you got a token");
    }

}
```