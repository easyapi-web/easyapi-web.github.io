# session

Session-scoped key-value storage (cleared between export sessions).

Aliases: `S`, `sessionStorage`

## Usage

```groovy
session.get("key")
session.set("key", "value")
session.pop("key")                  // get and remove
session.peek("key")                 // get without removing
session.push("key", "value")        // push to stack
session.remove("key")
session.keys()
session.clear()
```
