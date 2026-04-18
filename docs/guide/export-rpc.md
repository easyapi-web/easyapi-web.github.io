# Export to RPC

EasyApi supports exporting API definitions in RPC format for Dubbo and similar frameworks.

## How to Export

1. Open a file containing RPC service interfaces
2. Right-click in the editor > **EasyApi** > **Export to RPC**
3. The RPC definitions will be exported

## Dubbo Support

For Dubbo services, EasyApi recognizes:

- `@DubboService` / `@DubboReference` annotations
- `@Service` (Alibaba Dubbo) annotations
- Standard Dubbo interface definitions

See [Dubbo Framework](/frameworks/dubbo) for detailed configuration.
