# enum.use.by.type

> By default, fields with the same type will be used for enums. This has lower priority than [enum.use.custom](enum_use_custom.md).


**Assuming the following enum class:** 

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

**Recommended configuration:**

```properties
enum.use.by.type=true
```

- The above comment will be processed as:

```java
/**
* User type
* @see UserType#code
*/
private int type;
```

- The exported API result will be:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| type | integer | NO | | User type | Enum: 1,2,3<br>Enum Remarks: 1: Administrator, 2: Member, 3: Guest<br>Mock: @pick([1,2,3]) |