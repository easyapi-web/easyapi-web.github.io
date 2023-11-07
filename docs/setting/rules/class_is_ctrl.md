# class.is.ctrl

> By default, only classes annotated with `org.springframework.stereotype.Controller` or `org.springframework.web.bind.annotation.RestController` will be exported as api.

> When there is a need to export api from classes that are not annotated with `org.springframework.stereotype.Controller` or `org.springframework.web.bind.annotation.RestController`, you can configure this rule.

## Allowing export of `api` from all classes

- You can configure:

 ```properties
 class.is.ctrl=true
 ```

---

## Allowing export of `api` from classes annotated with `ctrl` comment

- If configuring to export `api` from all classes causes lag, and you want to control which classes include `api` using the `@ctrl` comment, you can configure:

 ```properties
 class.is.ctrl=#ctrl
 ```

***Demo***
 
 ```java
 /**
  * @ctrl
  */
@RequestMapping("/base")
public interface BaseController {

    /**
     * Current controller name
     *
     * @public
     */
    @RequestMapping("/ctrl/name")
    String ctrlName();
}
 ```