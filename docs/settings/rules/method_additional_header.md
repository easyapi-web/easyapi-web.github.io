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

### Add a header scoped to a package (excluding one controller)

```properties
# Add Authorization header to all controllers in a package except AuthController
method.additional.header[groovy: it.containingClass()?.qualifiedName().startsWith("com.example.merchant.") && it.containingClass()?.qualifiedName() != "com.example.merchant.AuthController"]={"name":"Authorization","value":"Bearer ${token}","desc":"JWT","required":true}
```
