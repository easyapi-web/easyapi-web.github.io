# field.required

- Used to mark whether the field is required (it cannot be empty)

## Built-in recommended configuration

```properties
#Support for javax.validation annotations
field.required=@"javax.validation.constraints.NotBlank
field.required=@javax.validation.constraints.NotNull
field.required=@javax.validation.constraints.NotEmpty
```

## Add support for swagger @ApiModelProperty

```properties
field.required=@io.swagger.annotations.ApiModelProperty#required
```

## demo

***SwaggerModel.java***

```java
public class SwaggerModel {

    @ApiModelProperty(value = "Field A", required = true)
    private String a;

    public String getA() {
        return a;
    }

    public void setA(String a) {
        this.a = a;
    }
}
```

### Export as API response:

| name | type     | required | default | desc | other                   |
|------|----------|----------|---------|------|-------------------------|
| a    | 	integer | Yes      |         |      | mock: @natural(0,10000) |