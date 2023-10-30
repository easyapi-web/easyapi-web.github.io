# param.demo

> Parameter example information

## demo

***Configuration:***

```properties
param.demo=groovy:it.method().doc("demo",it.name())
```

***Usage:*** 

```java
    /**
     * @demo newName tangcent
     */
    @RequestMapping(value = "/set", method = RequestMethod.PUT)
    public Object set(@RequestParam String newName) {
                      ...
    }
```