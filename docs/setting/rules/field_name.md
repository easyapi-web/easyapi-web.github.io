# ~~field.name~~

- The `field.name` property is used to set the field name for output/input purposes when the field name in JSON differs from the field name in the class.


## Built-in Recommended Configuration

```properties
#Support for Jackson annotations
field.name=@com.fasterxml.jackson.annotation.JsonProperty#value

#Support for Gson annotations
field.name=@com.google.gson.annotations.SerializedName#value
```

## demo

***TestJsonFieldBean.java***

```java
public class TestJsonFieldBean {
    @JsonProperty("a")
    private Long propertyA;

    @SerializedName("b")
    private Long propertyB;

    //constructors...

    //getters...
}
```

### Export as API response:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| a | integer | optional |  |  | mock: @natural(0,10000) |
| b | integer | optional |  |  | mock: @natural(0,10000) |
