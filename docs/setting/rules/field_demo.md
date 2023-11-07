# field.demo

> Field example information, used in multiple places for displaying JSON in markdown/postman

## demo

***Configuration is as follows:***

```properties
field.demo=#demo
```

***Usage is as follows:*** 

```java
    /**
     * @demo tangcent
     */
    private String name;//user name
```


---

## Configuring `demo` rules based on field name and type characteristics

- Configuration is slightly difficult, but non-intrusive.
- Very suitable for projects with well-defined field names.
- The configuration is done using the following format: `field.demo[field:path|type]=xxx`, as shown in the example below.

```properties
#Common response mocks
field.demo[field:c|int]=0
field.demo[field:code|int]=0
field.demo[field:status|int]=0
field.demo[field:ok|boolean]=true
field.demo[field:success|boolean]=true
field.demo[field:m|string]=ok
field.demo[field:msg|string]=ok
field.demo[field:message|string]=ok
field.demo[field:errMsg|string]=failed

#Common pagination mocks
field.demo[field:*.p|int]=2
field.demo[field:*.l|int]=100
field.demo[field:*.t|int]=1000
field.demo[field:*.offset|int]=50
field.demo[field:*.page|int]=2
field.demo[field:*.pageIndex|int]=2
field.demo[field:*.pageSize|int]=100
field.demo[field:*.limit|int]=100
field.demo[field:*.total|int]=1000

# The xxxTime mocks for integers are represented as timestamps.
field.demo[field:*Time|int]=1681649569869

#Sex&Gender
field.demo[field:*.sex|int]=1
field.demo[field:*.sex|string]=男
field.demo[field:*.gender|int]=1
field.demo[field:*.gender|string]=女

#User Info
field.demo[field:*.name|string]=tangcent
field.demo[field:*.age|int]=18
field.demo[field:*.phone|string]=18888888888
field.demo[field:*.mobile|string]=18888888888
field.demo[field:*Phone|string]=18888888888
field.demo[field:*Mobile|string]=18888888888

#链接
field.demo[field:*.url|string]=https://github.com/
field.demo[field:*.link|string]=https://github.com/
field.demo[field:*.linkUrl|string]=https://github.com/
field.demo[field:*Link|string]=https://github.com/

# Integer and number are more natural
field.demo[field:*Type|int]=1
field.demo[field:*Status|int]=1
field.demo[field:*.type|int]=1
field.demo[field:*.status|int]=1
field.demo[field:*|int]=9999
field.demo[field:*|number]=9999.99
```



