# How to Declare API Permission (Spring)

Use Spring Security annotations to document API permissions:

```java
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.access.prepost.PostAuthorize;

@PreAuthorize("hasRole('ADMIN')")
@GetMapping("/admin/users")
public List<User> listUsers() {
    // ...
}

@PreAuthorize("hasAuthority('user:read')")
@GetMapping("/users/{id}")
public User getUser(@PathVariable Long id) {
    // ...
}
```

To include permission info in the API documentation, add a custom rule:

```properties
method.doc[@org.springframework.security.access.prepost.PreAuthorize]=groovy:"Requires: " + it.ann("org.springframework.security.access.prepost.PreAuthorize")?.value()
method.doc[@org.springframework.security.access.prepost.PostAuthorize]=groovy:"Post-check: " + it.ann("org.springframework.security.access.prepost.PostAuthorize")?.value()
```

Or add an authorization header to the request:

```properties
method.additional.header=groovy:it.hasAnn("org.springframework.security.access.prepost.PreAuthorize") ? '{"name":"Authorization","value":"Bearer ${token}","desc":"Auth token","required":true}' : null
```
