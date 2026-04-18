# JAX-RS

EasyApi supports JAX-RS (Java API for RESTful Web Services) frameworks including Quarkus and Jersey.

## Supported Annotations

| Annotation | Description |
|------------|-------------|
| `@Path` | Maps a resource path |
| `@GET` | Maps a GET request |
| `@POST` | Maps a POST request |
| `@PUT` | Maps a PUT request |
| `@DELETE` | Maps a DELETE request |
| `@PATCH` | Maps a PATCH request |
| `@HEAD` | Maps a HEAD request |
| `@OPTIONS` | Maps an OPTIONS request |
| `@PathParam` | Binds a path parameter |
| `@QueryParam` | Binds a query parameter |
| `@FormParam` | Binds a form parameter |
| `@HeaderParam` | Binds a header parameter |
| `@CookieParam` | Binds a cookie parameter |
| `@Consumes` | Specifies consumed media types |
| `@Produces` | Specifies produced media types |

## Example

```java
@Path("/users")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {

    @GET
    @Path("/{id}")
    public User getUser(@PathParam("id") Long id) {
        // ...
    }

    @POST
    public User createUser(UserRequest request) {
        // ...
    }
}
```

## Quarkus Support

Quarkus uses standard JAX-RS annotations, so EasyApi works out of the box with Quarkus applications. No additional configuration is needed.

## Jersey Support

Jersey also uses standard JAX-RS annotations. EasyApi supports Jersey applications directly.
