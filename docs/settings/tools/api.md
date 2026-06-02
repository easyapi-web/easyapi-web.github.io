# api

API endpoint context, available **only during export rules** (not in the script executor).

## Usage

```groovy
api.name()                          // endpoint name
api.path()                          // endpoint path
api.method()                        // HTTP method (GET, POST, etc.)
api.description()                   // endpoint description

api.setPath("/api/v2/users")        // modify path
api.setMethod("POST")               // modify HTTP method
api.setDescription("desc")          // set description
api.appendDesc("additional info")   // append to description

api.setParam("name", "default", true, "description")
api.setFormParam("field", null, false, "description")
api.setPathParam("id", null, "path variable")
api.setHeader("X-Custom", "value", false, "description")

api.setResponseCode(200)
api.appendResponseBodyDesc("response description")
api.setResponseHeader("X-Total", "100", false, "total count")
api.setResponseBodyClass("com.example.User")
```
