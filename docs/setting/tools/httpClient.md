# `httpClient`is a provided helper class for HTTP-related tasks (v1.9.0+)

---

## Main Methods

| Method  |  Return Type  |  Description  |  Example  |
| ------------ | ------------ | ------------ |------------ |
| cookieStore() | cookieStore | Obtain cookie manager | httpClient.cookieStore()|
| request() | request | Create `request` | httpClient.request()|
| delete() | request | Create `request`, set `method` to `DELETE` | httpClient.delete()| 
| delete(str) | request | Create `request`, set `method` to `DELETE`, set `url` | httpClient.delete("https://easyapi.itangcent.com")|
| get() | request | Create `request`, set `method` to `GET` | httpClient.get()| 
| get(str) | request | Create `request`, set `method` to `GET`, set `url` | httpClient.get("https://easyapi.itangcent.com")|
| options() | request | Create `request`, set `method` to `OPTIONS` | httpClient.options()| 
| options(str) | request | Create `request`, set `method` to `OPTIONS`, set `url` | httpClient.options("https://easyapi.itangcent.com")|
| post() | request | Create `request`, set `method` to `POST` | httpClient.post()| 
| post(str) | request | Create `request`, set `method` to `POST`, set `url` | httpClient.post("https://easyapi.itangcent.com")|
| put() | request | Create `request`, set `method` to `PUT` | httpClient.put()| 
| put(str) | request | Create `request`, set `method` to `PUT`, set `url` | httpClient.put("https://easyapi.itangcent.com")|
| trace() | request | Create `request`, set `method` to `TRACE` | httpClient.trace()| 
| trace(str) | request | Create `request`, set `method` to `TRACE`, set `url` | httpClient.trace("https://easyapi.itangcent.com")|

---

# request

- Can be created by `httpClient`

## Methods:

| Method  |  Return Type  |  Description  |  Example  |
| ------------ | ------------ | ------------ |------------ |
| call() | response | Perform `http` request | request.call()|
| method() | string | Get the current request `method` | request.method()|
| method(string) | request | Set the current request `method` | request.method("POST")|
| url() | string | Get the current request `url` | request.url()|
| url(string) | request | Set the current request `url` | request.url("https://easyapi.itangcent.com")|
| body() | object | Get the current request body | request.body()|
| body(object) | request | Set the current request body | request.body({"name":"admin"})|
| contentType() | string | Get the current request `Content-type` | request.contentType()|
| contentType(string) | string | Set the current request `Content-type` | request.contentType("application/json")|
| querys() | request | Get all query parameters | request.querys()|
| query(string, string) | request | Set query (will be appended to url) | request.query("name","Tom")|
| params() | array\<param> | Get all parameters | request.params()|
| params(string) | array\<param> | Get all parameters of specified name | request.params("name")|
| containsParam(string) | bool | Check if current request contains specified parameter | request.containsParam("name")|
| fileParam(string, string) | request | Set a file parameter | request.fileParam("file","/xxx/xxx/xxxx.xxx")|
| firstParam(string) | param | Get the first request parameter (Note: return value is param, containing parameter name/value/type [text/file]) | request.firstParam("name")|
| firstParamValue(string) | param | Get the value of the first request parameter | request.firstParamValue("name")|
| lastParam(string) | param | Get the last request parameter (Note: return value is param, containing parameter name/value/type [text/file]) | request.lastParam("name")|
| lastParamValue(string) | param | Get the value of the last request parameter | request.lastParamValue("name")|
| param(string, string) | request | Set `param` | request.param("name","Tom")|
| paramValues(string) | array\<string> | Get all values of specified parameter | request.paramValues("name")|
| header(string, string) | request | Set `header` | request.header("Content-type","application/json")|
| headers() | array\<header> | Get all `header` | request.headers()|
| headers(string) | array\<string> | Get all values of specified `header` | request.headers("Content-type")|
| containsHeader(string) | bool | Check if current request contains specified `header` | request.containsHeader("token")|
| firstHeader(string) | string | Get the first header parameter | request.firstHeader("Content-type")|
| lastHeader(string) | string | Get the last header parameter | request.lastHeader("Content-type")|
| setHeader(string, string) | request | Remove all values of current `header` name and set `header` | request.setHeader("Content-type","application/json")|
| removeHeader(string, string) | request | Remove specified value of specified `header` name | request.removeHeader("Content-type","application/json")|
| removeHeaders(string) | request | Remove all values of specified `header` name | request.removeHeaders("Content-type")|


---

# response

- Can be obtained by `request.call()`

## Methods:

| Method  |  Return Type  |  Description  |  Example  |
| ------------ | ------------ | ------------ |------------ |
| discard() | void | Discard the result of this request, and re-call it | response.discard()|
| code() | int | Response code | response.code()|
| string() | string | Response content | response.string()|
| contentType() | string | Response Content-type | response.contentType()|
| headers() | array\<header> | Get all `header` | response.headers()|
| headers(string) | array\<string> | Get all values of specified `header` | response.headers("Content-type")|
| containsHeader(string) | bool | Check if current response contains specified `header` | response.containsHeader("token")|
| firstHeader(string) | string | Get the first header parameter | response.firstHeader("Content-type")|
| lastHeader(string) | string | Get the last header parameter | response.lastHeader("Content-type")|
| request() | request | Get the `request` that resulted in this response | response.request()|

---


# cookieStore

- Can be obtained by `httpClient.cookieStore()`

## Methods:

| Method  |  Return Type  |  Description  |  Example  |
| ------------ | ------------ | ------------ |------------ |
| addCookie(cookie) | void | Add a cookie | httpClient.cookieStore().addCookie(cookie) |
| addCookies(cookies) | void | Add multiple cookies | httpClient.cookieStore().addCookies(cookies) |
| clear() | void | Clear cookie | httpClient.cookieStore().clear() |
| cookies() | array\<cookie> | Get current cookies | httpClient.cookieStore().cookies() |
| newCookie() | cookie | Create a `cookie`, note: it will not be automatically added to `cookieStore`, you need to call `addCookie` to add it manually | httpClient.cookieStore().newCookie() |