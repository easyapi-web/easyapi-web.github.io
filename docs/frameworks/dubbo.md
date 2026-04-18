# Dubbo

EasyApi supports Dubbo RPC framework for exporting service definitions.

## Supported Annotations

| Annotation | Description |
|------------|-------------|
| `@DubboService` | Apache Dubbo service annotation |
| `@DubboReference` | Apache Dubbo reference annotation |
| `@Service` (Alibaba) | Alibaba Dubbo service annotation |

## Example

```java
@DubboService
public class UserServiceImpl implements UserService {

    @Override
    public User getUser(Long id) {
        // ...
    }

    @Override
    public List<User> listUsers() {
        // ...
    }
}
```

## Configuration

To enable Dubbo support, add the following to your configuration:

```properties
# Recognize Dubbo service classes
class.is.ctrl=groovy:it.hasAnn("org.apache.dubbo.config.annotation.DubboService")||it.hasAnn("com.alibaba.dubbo.config.annotation.Service")
```

## Exporting Dubbo Services

1. Open a Dubbo service implementation class
2. Right-click > **EasyApi** > **Export to RPC**
3. The service definitions will be exported with method signatures and parameter types
