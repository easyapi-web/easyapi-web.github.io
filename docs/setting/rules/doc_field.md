# doc.field

- Additional comments on field

### Built-in recommended configuration

```properties
#deprecated info(java)
doc.field[#deprecated]=groovy:"\n「deprecated」" + it.doc("deprecated")
doc.field[@java.lang.Deprecated]=「deprecated」

#deprecated info(kotlin)
doc.field[@kotlin.Deprecated]=groovy:"\n「deprecated」" + it.ann("kotlin.Deprecated","message")

```

## Add support for swagger @ApiModelProperty

```properties
doc.field=@io.swagger.annotations.ApiModelProperty#value
```

## demo

***SwaggerModel.java***

```java
public class SwaggerModel {

    /**
     * @deprecated No longer used
     */
    @ApiModelProperty(value = "fieldA", required = true)
    private String a;

    //constructors...

    //getters...
}
```

## Export as API response:

| name | type | required | default | desc | other |
| --- | --- |----------| --- | --- | --- |
| a | string | No       |  | fieldA<br/>「deprecated」No longer used |  |