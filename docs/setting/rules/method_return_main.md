# method.return.main

- This configuration is used to specify the main body for the return statement, so that the `@return` annotation applies to the main body property and does not affect the return type and fields.

## demo

***Result.java***

```java
package com.itangcent.common.dto;

public class Result<T> implements IResult {

    private Integer code; // Response code

    private String msg; // Response message

    private T data; // Response data

    //constructors...

    //getters...
}
```

### Configuration

```properties
method.return.main[groovy:it.returnType().isExtend("com.itangcent.common.dto.Result")]=data
```

### API Demo1:

- API code:

```java
/**
     * Get the current user's type
     *
     * @return The current user's type, {@link com.itangcent.common.constant.UserTypeConstant}
     */
    @GetMapping("/type")
    public Result<Integer> currUserType() {
        return Result.success(UserType.values()[new Random(System.currentTimeMillis()).nextInt(UserType.values().length)].getType());
    }
```

- Exported API response:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| msg |	string | optional |  | Response message | mock: |
| code | integer | optional |  | Response code | mock: 0 |
| data | integer | optional |  | Response data<br>The current user's type, [User type] | Enum: 1,2,3<br>Enum desc: 1: Admin 2: Member 3: Guest<br>mock: @pick([1,2,3]) |


### API Demo2:

- API code:

```java
/**
     * Get all user types
     *
     * @return {@link com.itangcent.common.constant.UserType#getType()}
     */
    @GetMapping("/types")
    public Result<List<Integer>> types() {
        final List<Integer> types = Stream.of(UserType.values()).map(UserType::getType).collect(Collectors.toList());
        return Result.success(types);
    }
```

- Exported API response:

| &nbsp;&nbsp;&nbsp;&nbsp;name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| &nbsp;&nbsp;&nbsp;&nbsp;msg |	string | optional |  | Response message | mock: |
| &nbsp;&nbsp;&nbsp;&nbsp;code | integer | optional |  | Response code | mock: 0 |
| ＋data | integer[] | optional |  | Response data<br>[User type] | item type: integer |
|   | integer  |   |  |   | Enum: 1,2,3<br>Enum desc: 1: Admin 2: Member 3: Guest<br>mock: @pick([1,2,3]) |

### Additional Information:

***UserTypeConstant.java***

```java
/**
 * User type
 */
public class UserTypeConstant implements Serializable {

    private static final long serialVersionUID = -4607862808303533196L;

    public static final int ADMIN = 1;//Admin
    public static final int MEMBER = 2;//Member
    public static final int GUEST = 3;//Guest

}
```

***UserType.java***

```java
package com.itangcent.common.constant;

/**
 * User type
 */
public enum UserType {
    // Admin
    ADMIN(1, "Admin"),

    // Member
    MEMBER(2, "Member"),

    // Guest
    GUEST(3, "Guest");

    private int type; // User type

    private String desc;

    // constructors...

    // getters...
}
```