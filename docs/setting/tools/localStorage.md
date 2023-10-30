# `localStorage` - The local storage (v1.9.1+)

- When no group is specified, all operations are performed in the default group.
- By default, the localStorage is stored in the user's root directory and can be accessed across different projects. If you want to restrict it to the current project, you need to specify a group for all operations.
- Note: The `value` in `set(key, value)` and the `value` obtained from `get(key)` are not the same object.

```groovy
def obj = ["a":"b"]
localStorage.set("key",obj)
localStorage.get("key")["a"]=c //Modifying the object obtained from get("key") does not affect the original obj.
obj["a"] == "b" //obj remains ["a":"b"]
```


## Methods

| Method                  | Return Value   | Description                                         | Example                              |
| ----------------------- | -------------- | --------------------------------------------------- | ------------------------------------ |
| set(key, value)         | void           | Set a key-value pair                                | session.set("key", "value")          |
| set(group, key, value)  | void           | Set a key-value pair (specified group)              | session.set("groupA","key", "value") |
| get(key)                | object         | Retrieve a stored value by key                      | session.get("key")                   |
| get(group, key)         | object         | Retrieve a stored value by key (specified group)    | session.get("groupA", "key")         |
| pop(key)                | object         | Pop an element from a queue                         | session.pop("key")                   |
| pop(group, key)         | object         | Pop an element from a queue (specified group)       | session.pop("groupA", "key")         |
| peek(key)               | object         | View the first element in a queue                   | session.peek("key")                  |
| peek(group, key)        | object         | View the first element in a queue (specified group) | session.peek("groupA", "key")        |
| push(key, value)        | object         | Add an element to a queue                           | session.push("key", value)           |
| push(group, key, value) | object         | Add an element to a queue (specified group)         | session.push("groupA", "key", value) |
| remove(key)             | void           | Remove a stored value                               | session.remove("key")                |
| remove(group, key)      | void           | Remove a stored value(specified group)              | session.remove("groupA", "key")      |
| clear()                 | void           | Remove all stored values(default group only)        | session.clear()                      |
| clear(group)            | void           | Remove all stored values(specified group)           | session.clear("groupA")              |
| keys()                  | array\<object> | Get all keys of stored values(default group only)   | session.keys()                       |
| keys(group)             | array\<object> | Get all keys of stored values(specified group)      | session.keys("groupA")               |