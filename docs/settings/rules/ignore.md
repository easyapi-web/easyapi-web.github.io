# ignore

Ignore specific classes or methods from API documentation.

## Usage

```properties
ignore=groovy:it.hasAnn("java.lang.Deprecated")
```

## Example

### Ignore deprecated APIs

```properties
ignore=groovy:it.hasAnn("java.lang.Deprecated")
```

### Ignore by name pattern

```properties
ignore=#regex:^internal.*
```

### Ignore internal gRPC methods

```properties
ignore=groovy:it.name() == "getServiceDescriptor" || it.name() == "bindService" || it.name() == "getMethodDescriptors"
```
