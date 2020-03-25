# field.default.value(v1.7.1+)

- 用于设置`字段`的default 

## 原生编码支持

默认的所有含有默认初始值的字段，取其默认初始值.
如:
```java
private Integer code = 200;//响应码
```

## 额外的配置

***配置如下:***

```properties
field.default.value=#default
```

***DemoDto.java***

```java
public class DemoDto{

    /**
     * 价格
     * @default 666
     */
    @NotNull
    private Float price;

    ...
}
```

***导出结果如下:***


| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| price	| number | 必须 | 666 | 价格	| |