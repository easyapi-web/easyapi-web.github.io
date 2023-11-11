# `api` refers to the current exported `api`

- The application object only provides methods like `api.method()`✅, not properties like `api.property`❎.

## Main Methods

| Method  |  Return Type  |  Description  | Example                                                                                                                                  |
| ------------ | ------------ | ------------ |------------------------------------------------------------------------------------------------------------------------------------------|
| name() | string | api name | api.name()                                                                                                                               |
| setName("name") | void | Set api name | api.setName("xxx")                                                                                                                       |
| desc() | string | api description | api.desc()                                                                                                                               |
| setDesc("desc") | void | Set api description | api.setDesc("This is...")                                                                                                                |
| appendDesc("desc") | void | Append api description | api.appendDesc("This is...")                                                                                                             |
| method() | string | api's Http Method | api.method()                                                                                                                             |
| setMethod("method") | void | Set api's Http Method | api.setMethod("POST")                                                                                                                    |
| setMethodIfMissed("method") | void | Set api's Http Method if it doesn't exist | api.setMethodIfMissed("POST")                                                                                                            |
| path() | string | api path, if this api has multiple paths, return the first one | api.path()                                                                                                                               |
| paths() | string[] | Array of api paths | api.paths()                                                                                                                              |
| setPath("path") | void | Set api path | api.setPath("/a/b/c")                                                                                                                    |
| setPaths(["path"*]) | void | Set api paths | api.setPaths(["/a/b/c"."/a/b/d"])                                                                                                        |
| bodyAttr() | string | Description of api body | api.bodyAttr()                                                                                                                           |
| setBody(object) | void | Set api body | api.setBody(["x":"y"])                                                                                                                   |
| setBodyClass("class") | void | Set api body through class name | api.setBodyClass("com.itangcent.XxxxDTO")                                                                                                |
| setJsonBody(object,"attr") | void | Set api body | api.setBody(["x":"y"],"Description")                                                                                                     |
| addModelAsParam(object) | void | Set api parameters | api.addModelAsParam(["x":"y"])                                                                                                           |
| addModelClass("class") | void | Set api parameters through class name | api.addModelClass("com.itangcent.XxxxDTO")                                                                                               |
| addParam(paramName,defaultVal,desc) | void | Add parameter | api.addParam("name","tang","user name")                                                                                                  |
| addParam(paramName,defaultVal,required,desc) | void | Add parameter | api.addParam("name","tang",false,"user name")                                                                                            |
| setParam(paramName,defaultVal,required,desc) | void | Set parameter (existing parameter will be overridden) | api.setParam("name","tang",false,"user name")                                                                                            |
| addFormParam(paramName,defaultVal,desc) | void | Add form parameter | api.addFormParam("name","tang","user name")                                                                                              |
| addFormParam(paramName,defaultVal,required,desc) | void | Add form parameter | api.addFormParam("name","tang",false,"user name")                                                                                        |
| setFormParam(paramName,defaultVal,required,desc) | void | Set form parameter (existing parameter will be overridden) | api.setFormParam("name","tang",false,"user name")                                                                                        |
| addFormFileParam(paramName,required,desc) | void | Add file type form parameter | api.setFormParam("avatar",false,"user's avatar")                                                                                         |
| setFormFileParam(paramName,required,desc) | void | Set file type form parameter (existing parameter will be overridden)  | api.setFormFileParam("avatar",false,"user's avatar")                                                                                     |
| addPathParam(paramName,desc) | void | Add path parameter | api.addPathParam("id","user id")                                                                                                         |
| addPathParam(paramName,value,desc) | void | Add path parameter | api.addPathParam("id","1","user id")                                                                                                     |
| setPathParam(paramName,value,desc) | void | Set path parameter (existing parameter will be overridden) | api.setPathParam("id","1","user id")                                                                                                     |
| headers() | array\<Header> | Get all headers of api | api.headers()                                                                                                                            |
| header("name") | Header | Get the specified header of api by name | api.header("Content-Type")                                                                                                               |
| headers("name") | array\<Header> | Get all headers of api by specified name | api.headers("token")                                                                                                                     |
| removeHeader("name") | Header | Remove the specified header of api by name | api.removeHeader("token")                                                                                                                |
| addHeader("name","value") | void | Add header | api.addHeader("Content-Type","application/json")                                                                                         |
| addHeaderIfMissed("name","value") | void | Add header if specified header doesn't exist | api.addHeaderIfMissed("Content-Type","application/json")                                                                                 |
| addHeader("name","value",required,"desc") | void | Add header | api.addHeader("Content-Type","application/json",true,"header which is used to indicate the original media type of the resource")         |
| setHeader("name","value",required,"desc") | void | Set header (existing header will be overridden)  | api.setHeader("Content-Type","application/json",true,"header which is used to indicate the original media type of the resource")         |
| Below are `response` related methods | ----- | -----  | -----                                                                                                                                    |
| setResponseBody(body) | void | Set api response body</br>Default bodyType is raw | api.setResponseBody(["x":"y"])                                                                                                           |
| setResponseBody("bodyType",body)  | void | Set api response body</br>bodyType: raw/json/xml | api.setResponseBody("json",["x":"y"])                                                                                                    |
| setResponseBodyClass("bodyClass") | void | Set api response body through class name</br>Default bodyType is raw | api.setResponseBody("com.itangcent.XxxxVO")                                                                                              |
| setResponseBodyClass("bodyType","bodyClass") | void | Set api response body through class name</br>bodyType: raw/json/xml | api.setResponseBody("json","com.itangcent.XxxxVO")                                                                                       |
| setResponseCode(code) | void | Set response code | api.setResponseCode(200)                                                                                                                 |
| appendResponseBodyDesc("bodyDesc") | void | Set response description | api.appendResponseBodyDesc("user info")                                                                                                  |
| addResponseHeader("name","value") | void | Add response header | api.addResponseHeader("Content-Type","application/json")                                                                                 |
| addResponseHeader("name","value",required,"desc") | void | Add response header | api.addResponseHeader("Content-Type","application/json",true,"header which is used to indicate the original media type of the resource") |
| setResponseHeader("name","value",required,"desc") | void | Set response header | api.setResponseHeader("Content-Type","application/json",true,"header which is used to indicate the original media type of the resource") |