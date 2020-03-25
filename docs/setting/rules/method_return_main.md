# method.return.main

- 此配置仅设置返回值的核心主体，使得`@return`的注释落在主体属性上,不影响返回type及字段.

## demo

***Result.java***

```java
package com.itangcent.common.dto;

public class Result<T> implements IResult {

    private Integer code;//响应码

    private String msg;//响应消息

    private T data;//响应数据

    //constructors...

    //getters...
}
```

### 可做如下配置

```properties
method.return.main[groovy:it.returnType().isExtend("com.itangcent.common.dto.Result")]=data
```

### 接口示例1:

- 接口代码:

```java
    /**
     * 获取当前用户type
     *
     * @return 当前用户type,{@link com.itangcent.common.constant.UserTypeConstant}
     */
    @GetMapping("/type")
    public Result<Integer> currUserType() {
        return Result.success(UserType.values()[new Random(System.currentTimeMillis()).nextInt(UserType.values().length)].getType());
    }
```

- 导出API的响应:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| msg |	string | 非必须 |  | 响应消息 | mock: |
| code | integer | 非必须 |  | 响应码 | mock: 0 |
| data | integer | 非必须 |  | 响应数据<br>当前用户type,[用户type] | 枚举: 1,2,3<br>枚举desc: 1 :管理员 2 :成员 3 :游客<br>mock: @pick([1,2,3]) |


### 接口示例2:

- 接口代码:

```java
    /**
     * 获取所有用户type
     *
     * @return {@link com.itangcent.common.constant.UserType#getType()}
     */
    @GetMapping("/types")
    public Result<List<Integer>> types() {
        final List<Integer> types = Stream.of(UserType.values()).map(UserType::getType).collect(Collectors.toList());
        return Result.success(types);
    }
```

- 导出API的响应:

| &nbsp;&nbsp;&nbsp;&nbsp;name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| &nbsp;&nbsp;&nbsp;&nbsp;msg |	string | 非必须 |  | 响应消息 | mock: |
| &nbsp;&nbsp;&nbsp;&nbsp;code | integer | 非必须 |  | 响应码 | mock: 0 |
| ＋data | integer[] | 非必须 |  | 响应数据<br>[用户type] | item type: integer |
|   | integer  |   |  |   | 枚举: 1,2,3<br>枚举desc: 1 :管理员 2 :成员 3 :游客<br>mock: @pick([1,2,3]) |

### 附:

***UserTypeConstant.java***

```java
/**
 * 用户type
 */
public class UserTypeConstant implements Serializable {

    private static final long serialVersionUID = -4607862808303533196L;

    public static final int ADMIN = 1;//管理员
    public static final int MEMBER = 2;//成员
    public static final int GUEST = 3;//游客

}
```

***UserType.java***

```java
package com.itangcent.common.constant;

/**
 * 用户type
 */
public enum UserType {
    //管理员
    ADMIN(1, "管理员"),

    //成员
    MEMBER(2, "成员"),

    //游客
    GUEST(3, "游客");

    private int type;//用户type

    private String desc;

    //constructors...

    //getters...
}
```