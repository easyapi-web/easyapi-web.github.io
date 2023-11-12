# doc.param

- Additional comments of param

## Specifying parameter type in the comment

```properties
doc.param=js:"type:"+it.type().name()
```

## Specifying parameter type in the comment without the Java package name

```properties
doc.param=groovy:"type:"+tool.uncapitalize(it.type().name().replace("java.lang.",""))
```

### DemoAPI

```java
    /**
     * update username
     *
     * @param id      user id
     * @param newName new username
     * @param slogon  user slogon
     * @deprecated use {@link #update(UserInfo)}
     */
    @RequestMapping(value = "/set", method = RequestMethod.PUT)
    public Object set(long id,
                      @RequestParam String newName,
                      @RequestParam(required = false, defaultValue = "haha") String slogon,
                      @RequestParam(required = false, defaultValue = "10") long times) {
            ...
    }
```

### Export as API response:

***Request params:***

| param name | required |	demo | desc |
| --- | --- | --- | --- |
| id | Yes |   | user id<br>type:long |
| newName | Yes |   |new username<br> type:string |
| slogon | No |   |user slogon<br> type:string |
| times | No |   | type:long |