# Swagger

EasyApi supports Swagger (OpenAPI) annotations for enhanced API documentation.

## Supported Annotations

| Annotation | Description |
|------------|-------------|
| `@Api` | Marks a class as a Swagger resource |
| `@ApiOperation` | Describes an API operation |
| `@ApiParam` | Describes a parameter |
| `@ApiModel` | Describes a model |
| `@ApiModelProperty` | Describes a model property |
| `@ApiImplicitParam` | Describes an implicit parameter |
| `@ApiImplicitParams` | Container for multiple implicit parameters |
| `@ApiResponse` | Describes a response |
| `@ApiResponses` | Container for multiple responses |

## Swagger 2 Example

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

## Swagger 3 (OpenAPI 3)

EasyApi also supports OpenAPI 3 annotations:

| Annotation | Description |
|------------|-------------|
| `@Tag` | Replaces `@Api` |
| `@Operation` | Replaces `@ApiOperation` |
| `@Parameter` | Replaces `@ApiParam` |
| `@Schema` | Replaces `@ApiModel`/`@ApiModelProperty` |

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
}
```

## Loading Swagger Configuration

You can load additional Swagger configuration from a remote source:

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-api/master/third/swagger.config
```
