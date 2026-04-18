# Helper

The `helper` tool provides various utility methods.

## Available Methods

| Method | Description |
|--------|-------------|
| `helper.resolveLink(link)` | Resolve a link reference |
| `helper.loadClass(name)` | Load a class by name |
| `helper.getOrPut(map, key, value)` | Get or put a value in a map |

## Example Usage

```groovy
// Resolve a link
def resolved = helper.resolveLink("User")
logger.info("Resolved: ${resolved}")

// Load a class
def clazz = helper.loadClass("com.example.User")
logger.info("Class: ${clazz?.name}")
```
