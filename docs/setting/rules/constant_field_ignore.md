# constant.field.ignore

- Ignore constant fields


### Built-in recommended configuration

```properties
#ignore serialVersionUID
constant.field.ignore=serialVersionUID
```

### demo

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

### For the following annotations:

```java
@see com.itangcent.common.constant.UserTypeConstant
```
or
```java
{@link com.itangcent.common.constant.UserTypeConstant}
```

### They will be parsed as:

```
1 :Admin 2 :Member 3 :Guest
```