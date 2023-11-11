# mdoc.method.http.method

> Set the HTTP request method for method documentation (rpc), default is `POST`


## Modify Default Behavior

***Setting methods with no arguments to `GET`***

- Configuration is as follows:

```properties
mdoc.method.http.method=groovy:it.argCnt()==0?"GET":null
```