# export.after

> The callback will be performed after each API export completion

| Contextual Target (it) | Additional Context |
| ------------ | ------------ |
| [method](../tools/it.html) | [api](../tools/api.html)  |


## demo

***Add interface description information***

```properties
export.after=groovy:api.appendDesc("\nThis interface is deprecated\n")
```

***Do not display the token in the header***

```properties
export.after=groovy:api.removeHeader("token")
```

***Modify the url***

```properties
export.after=groovy:api.setPath("/pre"+api.path())
```

***The response header include the current user's membership level***

```properties
export.after=groovy:api.addResponseHeader("level","","true","Current user's membership level")
```

***Include the `@version xxx` from the method in the `url`***

``````properties
export.after[#version]=groovy:```
    def tag = it.doc("version")
    def url = api.path()
    if(url.contains("?")){
        url = url +"&version=" + tag
    }else{
        url = url +"?version=" + tag
    }
    api.setPath(url)
```
``````

