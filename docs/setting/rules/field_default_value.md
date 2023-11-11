# field.default.value(v1.7.1+)

- use to set default value of field

## By default

The default initial value of field
e.g.:

```java
private Integer code = 200;//default 200
```

## Additional configuration

***Configuration:***

```properties
field.default.value=#default
```

***DemoDto.java***

```java
public class DemoDto{

    /**
     * price of demo
     * @default 666
     */
    @NotNull
    private Float price;

    ...
}
```

***Export as API response:***

| name   | type   | required | default | desc   | other |
|--------|--------|----------|---------|--------|-------|
| price	 | number | YES      | 666     | price	 |       |