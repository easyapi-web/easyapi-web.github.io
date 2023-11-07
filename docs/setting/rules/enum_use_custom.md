# enum.use.custom

> Used to set the default value field when using `@see` enum types

### Example

**Assuming the following enum class**

```java
public enum UserType {
    // Administrator
    ADMIN(1, "Administrator"),

    // Member
    MEMBER(2, "Member"),

    // Guest
    GUEST(3, "Guest");

    private int code;
    private String desc;

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    UserType(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }
}
```

**For the following field**

```java
/**
* User type
*
* @see UserType
*/
private int type;
```

### Default behavior

- Since `UserType` does not have a field named type, the `@see UserType` will be ignored in the default case.


### Adding configuration

- To set the `code` field as the default value for `@see UserType`, add the following configuration:

```properties
enum.use.custom[com.itangcent.common.constant.UserType]=code
```

- This will make the `@see UserType` use the `code` field as the default value.

```java
/**
* User type
* @see UserType#code
*/
private int type;
```

- The API result will be:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- | 
| type | integer | Not Required | | User Type | Enum: 1,2,3Enum Remark: 1 : Administrator 2 : Member 3 : GuestMock: @pick([1,2,3])



### Unified handling

- For special cases, declare the following interface:

```java
package com.itangcent.common.constant;

public interface BaseEnum {

    Long getCode();
}
```

- Modify `UserType` to inherit `BaseEnum`:

```java
public enum UserType implements BaseEnum {
    ...
}
```

- Then, you can configure the following to set the `code` field as the default value for all classes that inherit `BaseEnum`:

```properties
enum.use.custom[groovy:it.isExtend("com.itangcent.common.constant.BaseEnum")]=code
```
