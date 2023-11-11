# field.order

> Returns an int value to set the order of fields in the result.
  
Note: It has a lower priority than [field.order.with](field_order_with.md), and it's generally not recommended to use them at the same time.


## Some configurations related to field.order can be found in the recommended configurations

1. Order by tag on fields

```properties
field.order=#order
```

2. Set order through JsonProperty
```properties
field.order=@com.fasterxml.jackson.annotation.JsonProperty#index
```

## demo

***Select in the recommended configurations***

```
field.order=@com.fasterxml.jackson.annotation.JsonProperty#index
```

***TestJsonFieldBean.java***

```java
public class TestJsonFieldBean {
    @JsonProperty(value = "a", index = 99)
    private Long propertyA;

    private Long propertyB;

    @JsonProperty(value = "c", index = 0)
    private Long propertyC;
    //constructors...

    //getters...
}
```

### Exported as API return value:

| name | type |
| --- | --- |
| c |	integer |
| propertyB | integer | 
| a | integer |