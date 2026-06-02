# api.name

Set the API name.

## Usage

```properties
api.name=#name
```

The value can be:
- A Javadoc tag name (e.g., `#name` uses the first line of Javadoc)
- A Groovy script (e.g., `groovy:it.name()`)
- A regex pattern
- A static string

## Example

### Use Javadoc first line as API name

```properties
api.name=#name
```

```java
/**
 * Get user list
 */
@GetMapping("/users")
public List<User> listUsers() {}
```

The API name will be "Get user list".

### Strip Controller suffix

```properties
api.name=#regex:^(.+)Controller$=$1
```

### Custom logic with Groovy

```properties
api.name=groovy:it.name().replace("Controller", "").replace("Resource", "")
```
