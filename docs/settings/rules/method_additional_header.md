# method.additional.header

Add extra headers to API methods.

## Usage

```properties
method.additional.header=groovy:{"name":"Authorization","value":"Bearer ${token}","desc":"Auth token","required":true}
```

This rule uses merge mode — multiple values will be accumulated.

## Example

```properties
# Add authorization header
method.additional.header=groovy:{"name":"Authorization","value":"Bearer ${token}","desc":"Auth token","required":true}

# Add API version header
method.additional.header=groovy:{"name":"X-API-Version","value":"v1","desc":"API version","required":false}
```
