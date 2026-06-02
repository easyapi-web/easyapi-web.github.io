# http.call.before

Run custom logic before making an HTTP call (in the API Call feature).

## Usage

```properties
http.call.before=groovy:logger.info("Calling: " + request.url())
```
