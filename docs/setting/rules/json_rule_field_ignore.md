# json.rule.field.ignore

- 忽略字段(设置某些字段不出现在json中,或不需要请求时给出)


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

### 作为API返回值导出:

| name | type | required | default | desc | other |
| --- | --- | --- | --- | --- | --- |
| shouldNotIgnoreForGson |	integer | 非必须 |  |  | mock: @natural(0,10000) |
| shouldNotIgnoreForJackson | integer | 非必须 |  |  | mock: @natural(0,10000) |

## 定制化配置示例

- 忽略指定name的字段:

  - 配置如下

    ```properties
    # ignore field 'log'
    json.rule.field.ignore=log
    ```

  - 将忽略如下字段

    ```java
    private String log;
    ```

- 忽略指定type的字段:

  - 配置如下

    ```properties
    # ignore field 'log' typed xxx.xxx.Log
    json.rule.field.ignore=groovy:it.type().name()=="xxx.xxx.Log"
    ```

  - 将忽略如下字段
  
    ```java
    private Log xxx;
    ```

- 忽略指定`modifier`的字段:

  - 配置如下
    ```properties
    #ignore transient field
    json.rule.field.ignore=groovy:it.hasModifier("transient")||it.hasModifier("protected")
    ```

  - 将忽略如下字段
  
    ```java
    private transient Int xxx;
    protected Long yyy;
    ```