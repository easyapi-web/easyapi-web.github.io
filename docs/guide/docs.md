# Comment Standards

EasyApi generates API documentation based on [Javadoc](#javadoc), [KDoc](#kdoc), and [ScalaDoc](#scaladoc).

## Javadoc

Javadoc is the standard documentation comment format in Java. EasyApi uses Javadoc to extract API names, descriptions, and parameter information.

### Basic Format

```java
/**
 * API name (first line)
 *
 * API detailed description
 *
 * @param name Parameter description
 * @return Return value description
 */
@GetMapping("/hello")
public String hello(@RequestParam String name) {
    return "Hello " + name;
}
```

### Common Tags

| Tag | Purpose | Example |
|-----|---------|---------|
| `@param` | Parameter description | `@param name Username` |
| `@return` | Return value description | `@return Greeting message` |
| `@deprecated` | Mark as deprecated | `@deprecated Use helloV2 instead` |
| `@module` | API grouping | `@module User Management` |
| `@mock` | Mock data | `@mock admin` |
| `@see` | See also | `@see User` |

### Multiple Return Types

Use multiple `@return` tags to document different response scenarios:

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

## KDoc

KDoc is the documentation comment format in Kotlin, similar to Javadoc but supports Markdown syntax.

### Basic Format

```kotlin
/**
 * API name
 *
 * API detailed description
 *
 * @param name Parameter description
 * @return Return value description
 */
@GetMapping("/hello")
fun hello(@RequestParam name: String): String {
    return "Hello $name"
}
```

## ScalaDoc

ScalaDoc is the documentation comment format in Scala. EasyApi supports ScalaDoc for Scala projects.

### Basic Format

```scala
/**
 * API name
 *
 * API detailed description
 *
 * @param name Parameter description
 * @return Return value description
 */
@GetMapping(path = Array("/hello"))
def hello(@RequestParam name: String): String = {
  s"Hello $name"
}
```
