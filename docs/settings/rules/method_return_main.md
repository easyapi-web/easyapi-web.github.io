# method.return.main

When a method has multiple possible return types, set the primary one.

## Usage

```properties
method.return.main=groovy:it.doc()?.find("@return\\s+(\\S+)")?.group(1)
```

## Example

When using multiple `@return` tags in Javadoc:

```java
/**
 * Get user info
 * @return success {@link User} User info
 * @return unauthorized {@link Error} Not authenticated
 */
@GetMapping("/users/{id}")
public Object getUser(@PathVariable Long id) {
    // ...
}
```

You can set the primary return type:

```properties
method.return.main=groovy:it.doc()?.find("@return\\s+(\\S+)")?.group(1)
```
