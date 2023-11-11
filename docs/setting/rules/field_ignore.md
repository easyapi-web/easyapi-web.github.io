# field.ignore

> Ignore fields (set certain fields not to appear in json, or not to be provided when requested)


## Default Recommended Configuration

```properties
#Support for Jackson annotations
field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value

#Support for Gson annotations
field.ignore=!@com.google.gson.annotations.Expose#serialize
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

### Exported as API return value:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| shouldNotIgnoreForGson |	integer | NO |  |  | mock: @natural(0,10000) |
| shouldNotIgnoreForJackson | integer | NO |  |  | mock: @natural(0,10000) |

## Customized Configuration Example

- Ignore fields with specified names:

  - Configuration as follows

    ```properties
    # ignore field 'log'
    field.ignore=log
    ```

  - The following field will be ignored

    ```java
    private String log;
    ```

- Ignore fields with specified types:

  - Configuration as follows

    ```properties
    # ignore field 'log' typed xxx.xxx.Log
    field.ignore=groovy:it.type().name()=="xxx.xxx.Log"
    ```

  - The following field will be ignored
  
    ```java
    private Log xxx;
    ```

- Ignore fields with specified `modifier`:

  - Configuration as follows
    ```properties
    #ignore transient field
    field.ignore=groovy:it.hasModifier("transient")||it.hasModifier("protected")
    ```

  - The following field will be ignored
  
    ```java
    private transient Int xxx;
    protected Long yyy;
    ```