# method.additional.param

> Additional `param` required for the API.
> Only applicable to URL parameters, does not support `form/body`.

###For instance, if all interfaces need to carry a `token` in the `param`:

```properties
method.additional.param={name: "Authorization",value: "",desc: "Authentication Token",required:true}
```

### If you need to exclude specific open interfaces from requiring a token, you can configure as follows:

- Assume the following annotation:

```java
package com.itangcent.common.annotation;

/**
 * Declares the interface as a public interface.
 */
@Documented
@Retention(RUNTIME)
@Target({TYPE, METHOD})
public @interface Public {
}
```

- Then it can be configured as follows:

```properties
method.additional.param[!@com.itangcent.common.annotation.Public]={name: "Authorization",value: "",desc: "Authentication Token",required:true, example:""}
```

- Equivalent to:

```properties
method.additional.param[groovy:!it.hasAnn("com.itangcent.common.annotation.Public")]={name: "Authorization",value: "",desc: "Authentication Token",required:true, example:""}
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