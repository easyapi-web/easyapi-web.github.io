# path.multi

> Used for handling cases where an API has multiple available paths.

> Currently available strategies (case insensitive):

| Available Strategy | Strategy Description |
| ------------ | ------------ |
| FIRST | Choose the first available path |
| LAST | Choose the last available path |
| LONGEST | Choose the longest available path |
| SHORTEST | Choose the shortest available path |
| ALL | Generate an API for every available path |

***Possible configurations are as follows:***

1. Choose the first available path

```properties
path.multi=first
```

2. Choose the last available path

```properties
path.multi=last
```

3. Choose the longest available path

```properties
path.multi=longest
```

4. Choose the shortest available path

```properties
path.multi=shortest
```

5. Generate an API for every available path

```properties
path.multi=all
```


***The API can also decide the selection strategy itself***

```properties
path.multi=#multi
```

***Usage is as follows:*** 

```java
/**
* Some Mock related APIs
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * @multi all
    */
    @GetMapping(value = {"/string", "string2"})
    public String mockString() {
        return Result.success("mock string");
    }
}
```