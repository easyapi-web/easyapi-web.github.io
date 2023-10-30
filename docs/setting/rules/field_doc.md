# field.doc(doc.field)

> 字段的额外注释

## 默认推荐配置

```properties
#deprecated info(java)
field.doc[#deprecated]=groovy:"\n「Deprecated」" + it.doc("deprecated")
field.doc[@java.lang.Deprecated]=「Deprecated」

#deprecated info(kotlin)
field.doc[@kotlin.Deprecated]=groovy:"\n「Deprecated」" + it.ann("kotlin.Deprecated","message")

```

## 添加对swagger @ApiModelProperty支持

```properties
field.doc=@io.swagger.annotations.ApiModelProperty#value
```

## demo

***SwaggerModel.java***

```java
public class SwaggerModel {

    /**
     * @deprecated 不再使用
     */
    @ApiModelProperty(value = "字段A", required = true)
    private String a;

    //constructors...

    //getters...
}
```

## 作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| a | string | 非必须 |  | 字段A<br/>「Deprecated」不再使用 |  |