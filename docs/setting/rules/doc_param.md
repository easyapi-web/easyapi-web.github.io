# doc.param

- Additional comments of param

## 在注释中给出参数type

```properties
doc.param=js:"type:"+it.type().name()
```

## 在注释中给出参数type并去掉java包名

```properties
doc.param=groovy:"type:"+tool.uncapitalize(it.type().name().replace("java.lang.",""))
```

### 示例API

```java
    /**
     * 更新用户名
     *
     * @param id      用户id
     * @param newName 新的用户名
     * @param slogon  个人签名
     * @deprecated 改用{@link #update(UserInfo)}
     */
    @RequestMapping(value = "/set", method = RequestMethod.PUT)
    public Object set(long id,
                      @RequestParam String newName,
                      @RequestParam(required = false, defaultValue = "haha") String slogon,
                      @RequestParam(required = false, defaultValue = "10") long times) {
            ...
    }
```

### 导出结果如下:

***请求参数:***

| 参数name | required |	demo | desc |
| --- | --- | --- | --- |
| id | 是 |   | 用户id<br>type:long |
| newName | 是 |   |新的用户名<br> type:string |
| slogon | 否 |   |个人签名<br> type:string |
| times | 否 |   | type:long |