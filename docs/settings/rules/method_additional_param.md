# method.additional.param

Add extra parameters to API methods.

## Usage

```properties
method.additional.param=groovy:{"name":"version","value":"v1","desc":"API version","required":false}
```

This rule uses merge mode — multiple values will be accumulated.

## Example

```properties
method.additional.param=groovy:{"name":"version","value":"v1","desc":"API version","required":false}

method.additional.param=groovy:{"name":"requestId","value":"","desc":"Request trace ID","required":false}
```
