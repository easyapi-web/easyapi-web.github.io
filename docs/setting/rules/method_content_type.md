# method.content.type

> Used to set the default `content-type` for API requests. The plugin will still override this when necessary.
> For example, when encountering `@RequestBody`, it will be forcibly overridden to `application/json`.

### By default, the plugin prioritizes `application/x-www-form-urlencoded`. If you prefer to use `multipart/form-data`

***Configuration is as follows:***

```properties
method.content.type=multipart/form-data
```