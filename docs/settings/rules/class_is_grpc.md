# class.is.grpc

Recognize gRPC service classes.

## Usage

```properties
class.is.grpc=groovy:it.isExtend("io.grpc.BindableService")
```

## Example

```properties
# Default: detect by extending BindableService
class.is.grpc=groovy:it.isExtend("io.grpc.BindableService")

# Also detect by @GrpcService annotation
class.is.grpc=groovy:it.isExtend("io.grpc.BindableService") || it.hasAnn("net.devh.boot.grpc.server.service.GrpcService")
```
