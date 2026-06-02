# class.is.feign.ctrl

Recognize Feign client interfaces as API controllers.

## Usage

```properties
class.is.feign.ctrl=groovy:it.hasAnn("org.springframework.cloud.openfeign.FeignClient")
```

## Example

```java
@FeignClient(name = "user-service", url = "https://api.example.com")
public interface UserClient {

    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}
```
