# How to Mark API as Deprecated

Use the `@Deprecated` annotation on the method or class:

```java
@Deprecated
@GetMapping("/old-api")
public Result oldApi() {
    // ...
}
```

Or use the `ignore` rule to exclude deprecated APIs entirely:

```properties
ignore=groovy:it.hasAnn("java.lang.Deprecated")
```

To add deprecated info to the documentation (instead of hiding), use the `deprecated` extension (enabled by default):

```properties
method.doc[#deprecated]=groovy:"\n「Deprecated」" + it.doc("deprecated")
method.doc[@java.lang.Deprecated]=「Deprecated」
```
