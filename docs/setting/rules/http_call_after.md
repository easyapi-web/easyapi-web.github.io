# http.call.after

> Callback after http request

> Note: All `http requests` from the plugin will trigger this callback.

| Rule Target (context it) | Additional Context |
| ------------ | ------------ |
| None | [request](../tools/httpClient.html#request), [response](../tools/httpClient.html#response)  |

## demo

***Logging responses for all requests from the plugin***

```properties
http.call.after=groovy:logger.info("response:"+response.string())
```

***Executing another API after a particular API request succeeds***

``````properties
http.call.after=groovy:```
// Check if it's the specified interface
if(request.code()==200&&request.url().endsWith("/xxx")){
    httpClient.post("http://xxx/xxx")
    .contentType("application/json")
    .body({"xxx":"xxx","xxx":"xxx"})
    .call()
}
```
``````

***Automatic login (Cookie) on `Call`***

``````properties
http.call.after=groovy:```
//Check if it's an interface that requires login
if(response.code()==401){
    httpClient.post("http://xxx/login")
        .contentType("application/json")
        .body({"username":"xxx","passwd":"xxx"})
        .call()
    response.discard()//Discard the result of this request
}
```
``````

***Automatic login (Token) on `Call`***


``````properties
http.call.after=groovy:```
// Check if it's an interface that requires login
if(response.code()==401){
    def loginResponse = httpClient.post("http://xxx/login")
        .contentType("application/json")
        .body({"username":"xxx","passwd":"xxx"})
        .call()
    def token = loginResponse.firstHeader("token")
    localStorage.set("token",token)
    response.discard()//Discard the result of this request
}
```
http.call.before=groovy:```
//Retrieve token from localStorage
request.header("token",localStorage.get("token"))
```
``````

---

***`Host` is not fixed***

``````properties
//You can try to obtain the current request's host through regex
def host = regex.getGroup1("(https?://.+?)/.*?",request.url());
``````

***`x-www-form-urlencoded` submission***

``````properties
httpClient.post("http://xxx/login")
    .contentType("application/x-www-form-urlencoded")
    .param("username","name")
    .param("password","pwd")
    .call();
``````