# json.rule.enum.convert

- This rule is used to define conversion rules for enum types.
- It has lower priority than [json.rule.convert](json_rule_convert.md).

**Assuming the following enum class exists** 

```java
public enum UserType {
    //Admin
    ADMIN(1, "Admin"),

    //Member
    MEMBER(2, "Member"),

    //Guest
    GUEST(3, "Guest");

    private int type;
    private String desc;

    public int getType() {
        return type;
    }

    public String getDesc() {
        return desc;
    }

    UserType(int type, String desc) {
        this.type = type;
        this.desc = desc;
    }
}
```

**For the following field:**

```java
/**
* User type
*/
private UserType type;
```

### Default behavior

- By default, the enum type is converted to a String and the available values are the instance names of the enum.
- The field will be processed as:

```java
/**
* User type
* @see UserType
*/
private String type;
```
- The exported API result will be::

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| type | string | NO | | USER type | ENUM: ADMIN,MEMBER,GUEST<br>ENUMdesc: ADMIN :Admin MEMBER :Member GUEST :Guest<br>mock: @pick(["ADMIN","MEMBER","GUEST"])

### Adding configuration

- To configure the conversion to `int` and use the `type` field of the enum as the available values, add the following configuration:

```properties
json.rule.enum.convert[com.itangcent.common.constant.UserType]=~#type
```

- The field will be processed as:

```java
/**
* USER type
* @see UserType#type
*/
private int type;
```

- The exported API result will be:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| type | integer | 非必须 | | USER type | ENUM: 1,2,3<br>ENUMdesc: 1 :Admin 2 :Member 3 :Guest<br>mock: @pick([1,2,3])



### Handling in a Unified Way

- In a special case, declare the following interface::

```java
package com.itangcent.common.constant;

public interface TypeAble {
    int getType();
}
```

- Modify the `UserType` enum to implement `TypeAble`:

```java
public enum UserType implements TypeAble {
    ...
}
```

- Then, you can configure the conversion of all classes implementing `TypeAble` to `int` and use the `type` field of the enum as the available values:

```properties
json.rule.enum.convert[groovy:it.extend("com.itangcent.common.constant.TypeAble")]=~#type
```
