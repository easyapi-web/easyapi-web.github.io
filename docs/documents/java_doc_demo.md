
### api demo

```java

/**
 * group name
 * group comment/desc
 *
 * @module module_name
 */
@RestController
@RequestMapping(value = "/pathOfCtrl")
public class MockCtrl {

    /**
    * api name
    * api comment/desc
    * @param param1 name/comment/desc of param1
    * @param param2 You can use '@link' to indicate that the value of this parameter is an enumeration:{@link some.enum.or.constant.class}
    * @param param3 Specifies linked field if the target enumeration field does not match the parameter name:{@link some.enum.or.constant.class#property1}
    * @return desc of response
    */
    @RequestMapping(value = "/pathOfApi1")
    public Result methodName1(long param1,
                      @RequestParam String param2,
                      @RequestParam(required = false, defaultValue = "defaultValueOfParam3") String param3){
        ...
    }


    /**
    * By default content-type:`application/x-www-form-urlencoded`,
    * For '@requestbody', 'application/json' will be used
    * Deprecated API can annotated with '@Deprecated ',
    * you can also use the comment doc '@deprecated'
    *
    * @deprecated use {@link #methodName3(String)} instead of
    */
    @Deprecated
    @RequestMapping(value = "/pathOfApi2")
    public Result methodName2(@RequestBody MockDtoOrVo jsonModel){
        ...
    }

    ...
}
```

### model(dto/vo) demo

```java
public class MockDtoOrVo {

    /**
     * field comment
     */
    private Long field1;

    private Double field2;//Comments can also be written here

    /**
     * Use `@see` to indicate that the value of this field is an enumeration
     * @see some.enum.or.constant.class
     */
    private int field3;

    /**
     * Specifies linked field if the target enumeration field does not match the parameter name:{@link some.enum.or.
     * constant.class#property1}
     * @see some.enum.or.constant.class#property1
     */
    private int field4;

    /**
     * Deprecated field can annotated with '@Deprecated ',
     * you can also use the comment doc '@deprecated'
     * @deprecated It's a secret
     */
    @Deprecated
    private int field5;

    /**
     * If you use javax.validation
     * You can use @notblank / @notnull to indicate that the field must be
     */
    @NotBlank
    @NotNull
    private String field6;

    ...
}
```