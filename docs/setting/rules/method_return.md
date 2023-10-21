# method.return

- Set the return type of the method.
- Commonly used in the following scenarios:
    - When the method returns an Object.
    - When the generic type of the method's return type is not explicitly defined as `<Object>`/`<?>`/`<*>`.
    - When the method's return type is unrelated to the actual response, such as returning a response through manipulating HttpServletResponse.

## For example, consider the following API:

***API:***

```java
    /**
     * Write response using `HttpServletResponse`
     */
    @RequestMapping(value = "/writeByResponse", method = RequestMethod.GET)
    public void writeByResponse(HttpServletResponse response) throws IOException {
        UserInfo userInfo = new UserInfo();
        userInfo.setId(1l);
        userInfo.setName("Tom");
        userInfo.setAge(25);
        response.getOutputStream().write(new Gson().toJson(Result.success(userInfo)).getBytes(Charsets.UTF_8));
    }
```

- This method returns `void`, but the actual response is of type `Result<UserInfo>`. Therefore, an additional approach is needed to indicate the actual response of this `API`.

---

***Simple configuration:***

```properties
method.return=#real_return
```

***Usage in method:***

```java
/**
 * @real_return com.itangcent.common.dto.Result<com.itangcent.common.model.UserInfo>
 */
```

---

For convenience, we can try using `{@link}` to set the actual response type and use `helper.resolveLink` to resolve it.

***For example, configure the following:***

```properties
method.return[#real_return]=groovy: helper.resolveLink(it.doc("real_return"))
```

***Usage in method:***

```java
/**
 * @real_return {@link Result<UserInfo>}
 */
```


---

Furthermore, if all responses are wrapped by `com.itangcent.common.dto.Result`

***Configure the following:***

```properties
method.return[#real_return]=groovy: "com.itangcent.common.dto.Result<" +  helper.resolveLink(it.doc("real_return")) +">"
```

***Usage in method:***

```java
/**
 * @real_return {@link UserInfo}
 */
```