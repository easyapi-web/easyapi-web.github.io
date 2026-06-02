# Multiple Return Types

Use multiple `@return` tags in Javadoc to document different response scenarios:

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

## Set Primary Return Type

Use `method.return.main` to set the primary return type:

```properties
method.return.main=groovy:it.doc()?.find("@return\\s+(\\S+)")?.group(1)
```

See [method.return.main](/settings/rules/method_return_main) for more details.
