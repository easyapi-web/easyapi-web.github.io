# Export to RPC

EasyApi supports exporting API definitions in RPC format for gRPC services.

## How to Export

1. Open a file containing gRPC service interfaces
2. Right-click in the editor > **EasyApi** > **Export**
3. The RPC definitions will be exported

## gRPC Support

For gRPC services, EasyApi recognizes:

- Classes extending `io.grpc.BindableService`
- Classes extending generated `ImplBase` superclasses
- Classes annotated with `@GrpcService` (from grpc-spring-boot-starter)
- Methods annotated with `@RpcMethod`

See [gRPC Framework](/frameworks/grpc) for detailed configuration.
