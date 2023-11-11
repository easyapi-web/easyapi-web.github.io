# field.doc(doc.field)

> Additional documents for the field

## Default Recommended Configuration

```properties
#deprecated info(java)
field.doc[#deprecated]=groovy:"\n「Deprecated」" + it.doc("deprecated")
field.doc[@java.lang.Deprecated]=「Deprecated」

#deprecated info(kotlin)
field.doc[@kotlin.Deprecated]=groovy:"\n「Deprecated」" + it.ann("kotlin.Deprecated","message")

```

## Add support for swagger @ApiModelProperty

```properties
field.doc=@io.swagger.annotations.ApiModelProperty#value
```

## demo

***SwaggerModel.java***

```java
public class SwaggerModel {

    /**
     * @deprecated No longer used
     */
    @ApiModelProperty(value = "Field A", required = true)
    private String a;

    //constructors...

    //getters...
}
```

## Exported as API return value:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| a | string | NO |  | Field A<br/>「Deprecated」No longer used |  |