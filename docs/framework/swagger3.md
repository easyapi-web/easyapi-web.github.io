# Swagger 3 (OpenAPI)

EasyApi supports Swagger 3 / OpenAPI 3 annotations via the `swagger3` extension (enabled by default).

## Supported Annotations

| Annotation | Rules Applied |
|------------|--------------|
| `@Tag` | `class.doc` (name, description) |
| `@Operation` | `api.name` (summary), `method.doc` (summary, description), `method.default.http.method` (method), deprecated marking |
| `@Parameter` | `param.doc` (description), `param.required` (required), `param.ignore` (hidden), deprecated marking, parameter extraction |
| `@Parameters` | Extracts multiple parameters with type resolution |
| `@Schema` | `field.name` (name), `field.doc` (description), `field.required` (requiredMode), `field.ignore` (hidden), `param.doc`, `param.required`, `param.ignore` |
| `@Hidden` | `ignore`, `field.ignore`, `param.ignore` |
| `@ApiResponse` | Response code, description, and headers |
| `@ApiResponses` | Multiple response resolution |

## Example

```java
@Tag(name = "User Management", description = "APIs for managing users")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Operation(summary = "Get user by ID", description = "Returns a single user")
    @GetMapping("/{id}")
    public User getUser(
            @Parameter(description = "User ID", required = true)
            @PathVariable Long id) {
        // ...
    }

    @Operation(summary = "Create user")
    @ApiResponses({
        @ApiResponse(responseCode = "201", description = "User created"),
        @ApiResponse(responseCode = "400", description = "Invalid input")
    })
    @PostMapping
    public User createUser(@RequestBody UserRequest request) {
        // ...
    }
}
```

## @Schema with requiredMode

OpenAPI 3.1 uses `requiredMode` instead of `required`:

```java
public class User {
    @Schema(description = "User name", requiredMode = Schema.RequiredMode.REQUIRED)
    private String name;

    @Schema(description = "Email address")
    private String email;
}
```

## @Parameter Extraction

The `@Parameter` annotation is automatically extracted to set the correct parameter type:

| `@Parameter.in` value | Parameter Type |
|----------------------|----------------|
| `query` (default) | Query parameter |
| `form` | Form parameter |
| `path` | Path variable |
| `header` | Header parameter |

## @ApiResponse Resolution

`@ApiResponse` and `@ApiResponses` annotations are automatically resolved into response documentation:

```java
@Operation(summary = "Update user")
@ApiResponses({
    @ApiResponse(responseCode = "200", description = "User updated successfully"),
    @ApiResponse(responseCode = "404", description = "User not found",
        headers = @Header(name = "X-Error", description = "Error code"))
})
@PutMapping("/{id}")
public User updateUser(@PathVariable Long id, @RequestBody UserRequest request) {
    // ...
}
```
