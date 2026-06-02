# path.multi

Handle multiple paths for a single API method.

## Usage

```properties
path.multi=groovy:it.ann("org.springframework.web.bind.annotation.RequestMapping")?.path()?.size() > 1
```

When a method maps to multiple paths (e.g., `@RequestMapping(path = {"/users", "/api/users"})`), this rule controls how they are handled.
