# enum.use.ordinal

Used to set `ordinal` as the default value when using @see with enum types.
 
This setting has lower priority than enum.use.custom](enum_use_custom.md) and [enum.use.by.type](enum_use_by_type.md). Therefore, to use `enum.use.ordinal`, you need to first disable [enum.use.by.type](enum_use_by_type.md) in the recommended configuration.

**Assuming the following enum class exists** 

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

**For the following field:**

```java
/**
* User type
*
* @see UserType
*/
private int type;
```

### Default Case

- Since the UserType class does not have a type field, by default, the `@see UserType` in this case will be ignored.

### Adding Configuration

- 
- Configure the default value for `@see UserType` to use the `ordinal` field:

```properties
enum.use.ordinal[com.itangcent.common.constant.UserType]=true
```

- With this configuration, the above comment will be equivalent to:
- 
```java
/**
* User type
* @see UserType#ordinal()
*/
private int type;
```

- The exported API result would be:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| type | integer | optional | | User type | Enum: 0, 1, 2Enum Remarks: 0: Administrator, 1: Member, 2: GuestMock: @pick([0, 1, 2]) |


### Unified Handling

- Declare the following interface:

```java
package com.itangcent.common.constant;

public interface BaseEnum {
}
```

- Modify the `UserType` class to implement the `BaseEnum` interface:

```java
public enum UserType implements BaseEnum {
    ...
}
```

- With this, you can configure all classes that implement `BaseEnum` to use the `ordinal` as the default value:

```properties
enum.use.ordinal[groovy:it.isExtend("com.itangcent.common.constant.BaseEnum")]=true
```

### Defaulting to use `ordinal` for all `@see` with enum types in the entire project


```properties
enum.use.ordinal=true
```
