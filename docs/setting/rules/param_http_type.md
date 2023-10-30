# param.http.type

- The `param.http.type` configuration is used to set the type of API parameters in the HTTP request (location: `body/form/query`).

- Parameters annotated with `@RequestBody`/`@ModelAttribute`/`@RequestHeader`/`@PathVariable`, and others will ignore this rule.

- Parameters annotated with `@RequestParam` and the HTTP method is `GET` will also ignore this rule.

- For parameters that do not meet the above conditions and have no specific configuration, the default behavior is to prioritize the `query` mode.

## Configuration Examples

### Set all parameters as form, prioritize form submission:

```properties
param.http.type=form
```

### Set @RequestParam parameters as query and others as form:

```properties
param.http.type[@org.springframework.web.bind.annotation.RequestParam]=query
param.http.type=form
```