# mdoc.method.path

> Used to set the path for method documentation (rpc).
> To prevent method overloading from causing conflicts, the default generated path includes argument information: `$className/$methodName/$args`.
> Depending on the project, the path can be configured to simplify its length.

## Modify Default Behavior

***Assuming the following class exists***

```java
package com.itangcent.dubbo.demo.client;

/**
 * User related Client
 *
 * @module user_dubbo
 */
public interface UserClient {

    /**
     * Update username
     *
     * @param id      User id
     * @param newName New username
     * @param slogan  Personal signature
     * @deprecated Use {@link #update(UserInfo)} instead
     */
    public UserInfo set(long id, String newName,
                        String slogan,
                        long times);
}
```

***In the default scenario:***

- The exported path is:<br>
    `/com.itangcent.dubbo.demo.client.UserClient/set/long/java.lang.String/java.lang.String/long/`

***If it's confirmed that there are no overloaded methods, you can attempt to remove the argument information:***

- Configuration is as follows:

```properties
mdoc.method.path=groovy:it.containingClass().name()+"/"+it.name()
```

- The exported interface path is: `/com.itangcent.dubbo.demo.client.UserClient/set`

***You can try removing the package name:***

- Configuration is as follows:

```properties
mdoc.method.path=groovy:it.containingClass().getSimpleName()+"/"+it.name()
```

- The exported interface path is:`/UserClient/set`

***You can further convert the class name to lowercase:***

- Configuration is as follows:

```properties
mdoc.method.path=groovy:it.containingClass().getSimpleName().toLowerCase()+"/"+it.name()
```

- The exported interface path is:`/userclient/update`
