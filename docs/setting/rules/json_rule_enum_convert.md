# json.rule.enum.convert

- 用于设置枚举type的转换
- 优先级低于[json.rule.convert](json_rule_convert.md)


**假定有如下枚举类** 

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

**对于如下字段**

```java
/**
* 用户type
*/
private UserType type;
```

### 默认情况

- 默认将枚举type转换为`String`处理,给出可用值为枚举中的实例名

- 上述字段将被处理为

```java
/**
* 用户type
* @see UserType
*/
private String type;
```
- 导出API结果为:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| type | string | 非必须 | | 用户type | 枚举: ADMIN,MEMBER,GUEST<br>枚举desc: ADMIN :Admin MEMBER :Member GUEST :Guest<br>mock: @pick(["ADMIN","MEMBER","GUEST"]))

### 增加配置

- 做如下配置,将其转换为`int`处理,给出可用值为枚举中的`type`字段

```properties
json.rule.enum.convert[com.itangcent.common.constant.UserType]=~#type
```

- 则上述字段将被处理为

```java
/**
* 用户type
* @see UserType#type
*/
private int type;
```

- 导出API结果为:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| type | integer | 非必须 | | 用户type | 枚举: 1,2,3<br>枚举desc: 1 :Admin 2 :Member 3 :Guest<br>mock: @pick([1,2,3])



### 统一处理

- 特殊的，声明如下接口:

```java
package com.itangcent.common.constant;

public interface TypeAble {
    int getType();
}
```

- 改造`UserType`,使其继承`TypeAble`

```java
public enum UserType implements TypeAble {
    ...
}
```

- 则可做如下配置,将所有继承`TypeAble`的类转换为`int`处理,给出可用值为枚举中的`type`字段

```properties
json.rule.enum.convert[groovy:it.extend("com.itangcent.common.constant.TypeAble")]=~#type
```
