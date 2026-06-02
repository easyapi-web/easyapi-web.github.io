# How to Declare API Permission (javax)

Use `javax.annotation.security` annotations to document API permissions:

```java
import javax.annotation.security.DenyAll;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;

@RolesAllowed({"admin", "manager"})
@GetMapping("/admin/users")
public List<User> listUsers() {
    // ...
}

@PermitAll
@GetMapping("/public/info")
public Info getInfo() {
    // ...
}
```

To include permission info in the API documentation, add a custom rule:

```properties
method.doc[@javax.annotation.security.RolesAllowed]=groovy:"Roles: " + it.ann("javax.annotation.security.RolesAllowed")?.value()?.join(", ")
method.doc[@javax.annotation.security.DenyAll]=groovy:"Access: Denied"
method.doc[@javax.annotation.security.PermitAll]=groovy:"Access: Public"
```
