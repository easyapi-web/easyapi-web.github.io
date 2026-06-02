# endpoint.prefix.path

Set a prefix path at the endpoint level. This is applied after `class.prefix.path`.

## Usage

```properties
endpoint.prefix.path=groovy:"/v2"
```

Unlike `class.prefix.path` which applies at the class level, `endpoint.prefix.path` can be applied per method.
