# Swagger

EasyApi supports Swagger (OpenAPI) annotations for enhanced API documentation.

## Swagger 2 (io.swagger.annotations)

The `swagger` extension (enabled by default) provides support for Swagger 2.x annotations.

### Supported Annotations

| Annotation | Rules Applied |
|------------|--------------|
| `@Api` | `class.doc` (value, tags), `ignore` (hidden) |
| `@ApiModel` | `class.doc` (value, description) |
| `@ApiModelProperty` | `field.name` (name), `field.doc` (value, notes), `field.required` (required), `field.ignore` (hidden) |
| `@ApiOperation` | `method.doc` (value) |
| `@ApiParam` | `param.doc` (value), `param.default.value` (defaultValue), `param.required` (required), `param.ignore` (hidden) |

### Swagger 2 Example

```java
@Api(tags = "User Management")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @ApiOperation(value = "Get user by ID", notes = "Returns a single user")
    @GetMapping("/{id}")
    public User getUser(
            @ApiParam(value = "User ID", required = true)
            @PathVariable Long id) {
        // ...
    }
}
```

### @ApiModelProperty

```java
public class User {
    @ApiModelProperty(value = "User name", required = true)
    private String name;

    @ApiModelProperty(value = "Email address", notes = "Must be unique")
    private String email;

    @ApiModelProperty(hidden = true)
    private String internalId;

    @ApiModelProperty(name = "user_name")
    private String username;
}
```

## Swagger 3 / OpenAPI 3 (io.swagger.v3.oas.annotations)

The `swagger3` extension (enabled by default) provides comprehensive support for OpenAPI 3.x annotations.

### Supported Annotations

| Annotation | Rules Applied |
|------------|--------------|
| `@Operation` | `api.name` (summary), `method.doc` (summary, description), `method.default.http.method` (method), deprecated marking |
| `@Parameter` | `param.doc` (description), `param.required` (required), `param.ignore` (hidden), deprecated marking, parameter extraction |
| `@Parameters` | Extracts multiple parameters with type resolution |
| `@Schema` | `field.name` (name), `field.doc` (description), `field.required` (requiredMode), `field.ignore` (hidden), `param.doc`, `param.required`, `param.ignore` |
| `@Hidden` | `ignore`, `field.ignore`, `param.ignore` |
| `@ApiResponse` | Response code, description, and headers |
| `@ApiResponses` | Multiple response resolution |

### Swagger 3 Example

```java
@Tag(name = "User Management")
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

### @Schema with requiredMode

OpenAPI 3.1 uses `requiredMode` instead of `required`:

```java
public class User {
    @Schema(description = "User name", requiredMode = Schema.RequiredMode.REQUIRED)
    private String name;

    @Schema(description = "Email address")
    private String email;
}
```

### @Parameter Extraction

The `@Parameter` annotation is automatically extracted to set the correct parameter type:

| `@Parameter.in` value | Parameter Type |
|----------------------|----------------|
| `query` (default) | Query parameter |
| `form` | Form parameter |
| `path` | Path variable |
| `header` | Header parameter |

### @ApiResponse Resolution

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

## Loading Additional Swagger Configuration

You can load additional Swagger configuration from a remote source:

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-api/master/third/swagger.config
```
