# `fieldContext` provides context during the field parsing process

When parsing complex nested classes, `fieldContext` can be used to obtain information such as the path of the current field in the final result.

## Main Methods

| method  |  return  |  desc  |  demo  |
| ------------ | ------------ | ------------ |------------ |
| path() | string | Current full path | fieldContext.path() |
| property("propertyName") | string | Provides the full path of the specified field | fieldContext.property("xxx") |

---

## Example

For the classes below:

```java
class A{
    B b;
}
class B{
    C c;
}
class C{
    String d;
    String e;
}

```

When parsing the d field:

- `fieldContext.path()` will return `b.c`
- `fieldContext.property("e")` will return `b.c.e`