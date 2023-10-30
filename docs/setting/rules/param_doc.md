# param.doc(doc.param)

> Additional comments for parameters

## Include parameter type in the comment

```properties
param.doc=groovy:"Type:"+it.type().name()
```

## Include parameter type in the comment without Java package name

```properties
param.doc=groovy:"Type:"+tool.uncapitalize(it.type().name().replace("java.lang.",""))
```

### Example API

```java
    /**
     * Update username
     * 
     * @param id      User ID
     * @param newName New username
     * @param slogan  Personal slogan
     * @deprecated Use {@link #update(UserInfo)} instead
     */
    @RequestMapping(value = "/set", method = RequestMethod.PUT)
    public Object set(long id,
                      @RequestParam String newName,
                      @RequestParam(required = false, defaultValue = "haha") String slogon,
                      @RequestParam(required = false, defaultValue = "10") long times) {
            ...
    }
```

### Exported Result:

***Request Parameters:***

| Parameter | Name     |      | Required	Example	Description |
| --------- | -------- | ---- | ------------------------------- |
| id        | Yes      |      | User ID<br>Type: long           |
| newName   | Yes      |      | New username<br>Type: string    |
| slogan    | No       |      | Personal slogan<br>Type: string |
| times     | No       |      | Type: long                      |