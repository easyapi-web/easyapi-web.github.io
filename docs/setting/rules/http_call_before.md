# http.call.before

> Callback before http request

> Note: All http requests from the plugin will trigger this callback.

| Rule Target (context it) | Additional Context |
| ------------ | ------------ |
| None | [request](../tools/httpClient.html#request) |

## demo

***Logging all requests from the plugin***

```properties
http.call.before=groovy:logger.info("call:"+request.url())
```

***Automatically adding a specified token***

``````properties
http.call.before=groovy:```
request.header("token","xxxxxxxxxxxxx")
```
``````

***Automatically adding a token retrieved from localStorage***

``````properties
http.call.before=groovy:```
//Retrieve token from localStorage
request.header("token",localStorage.get("token"))
```
``````