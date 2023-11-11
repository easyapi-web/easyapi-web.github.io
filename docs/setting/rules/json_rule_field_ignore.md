# json.rule.field.ignore

- Ignore fields (indicates that the property should be ignored in request body/form and response body)


## Built-in recommended configuration

```properties
#Support for Jackson annotations
json.rule.field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value

#Support for Gson annotations
json.rule.field.ignore=!@com.google.gson.annotations.Expose#serialize
```

## demo

***TestJsonIgnoreBean.java***

```java
public class TestJsonIgnoreBean {

    @Expose(serialize = true)
    private Long shouldNotIgnoreForGson;

    @Expose(serialize = false)
    private Long shouldIgnoreForGson;

    @JsonIgnore(false)
    private Long shouldNotIgnoreForJackson;

    @JsonIgnore
    private Long shouldIgnoreForJackson;

    //constructors...

    //getters...
}
```

### Export as API response:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| shouldNotIgnoreForGson |	integer | NO |  |  | mock: @natural(0,10000) |
| shouldNotIgnoreForJackson | integer | NO |  |  | mock: @natural(0,10000) |

## Special custom configuration Demo

- Ignores the field with special name:

  - Configuration

    ```properties
    # ignore field 'log'
    json.rule.field.ignore=log
    ```

  - The following fields will be ignored

    ```java
    private String log;
    ```

- Ignores the field of the special type:

  - Configuration

    ```properties
    # ignore field 'log' typed xxx.xxx.Log
    json.rule.field.ignore=groovy:it.type().name()=="xxx.xxx.Log"
    ```

  - The following fields will be ignored
  
    ```java
    private Log xxx;
    ```

- Ignore the field with special `modifier`:

  - Configuration
    ```properties
    #ignore transient field
    json.rule.field.ignore=groovy:it.hasModifier("transient")||it.hasModifier("protected")
    ```

  - The following fields will be ignored
  
    ```java
    private transient Int xxx;
    protected Long yyy;
    ```