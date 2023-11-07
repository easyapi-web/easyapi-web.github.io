# postman.prerequest

- Used to set the [`prerequest`](https://learning.postman.com/docs/postman/scripts/pre-request-scripts) for the postman API

- You can configure multiple rules for the prerequest

## Example of fixed `prerequest` configuration

``````
postman.prerequest=```
pm.environment.get("variable_key");
pm.globals.get("variable_key");
pm.variables.get("variable_key");
pm.environment.set("variable_key", "variable_value");
pm.globals.set("variable_key", "variable_value");
pm.environment.unset("variable_key");
pm.globals.unset("variable_key");
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
```
``````

## Adding `prerequest` to APIs with specific annotations

``````
postman.prerequest[@com.itangcent.common.annotation.RequiredLogin]=```
pm.environment.get("variable_key");
pm.globals.get("variable_key");
pm.variables.get("variable_key");
pm.environment.set("variable_key", "variable_value");
pm.globals.set("variable_key", "variable_value");
pm.environment.unset("variable_key");
pm.globals.unset("variable_key");
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
```
``````

## Adding `prerequest` to APIs without specific annotations

``````
postman.prerequest[!@com.itangcent.common.annotation.Public]=```
pm.environment.get("variable_key");
pm.globals.get("variable_key");
pm.variables.get("variable_key");
pm.environment.set("variable_key", "variable_value");
pm.globals.set("variable_key", "variable_value");
pm.environment.unset("variable_key");
pm.globals.unset("variable_key");
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
```
``````

## Providing multiple `prerequest` in the configuration, selecting which one to use with code comments

``````
postman.prerequest.groupA=```
pm.environment.get("variable_key");
```
postman.prerequest.groupB=```
pm.globals.get("variable_key");
```
postman.prerequest.groupC=```
pm.environment.set("variable_key", "variable_value");
```
postman.prerequest.groupD=```
pm.globals.set("variable_key", "variable_value");
```
postman.prerequest[#prerequest]=groovy:config.get("postman.prerequest."+it.doc("prerequest"))
``````

***Usage:***

```java
/**
  * Get the user list
  *
  * @param type User type {@link com.itangcent.common.constant.UserType}
  * @prerequest groupA
  */
@RequestMapping(value = "/list", method = RequestMethod.GET)
public IResult list(Integer type) {
    ...
    return Result.success(Collections.singletonList(userInfo));
}
```

---

# class.postman.prerequest

- Set [`prerequest`](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/#re-using-pre-request-scripts) on the `folder` using pre-request scripts.

- Multiple rules can be set.

- The context is `class`.

---

# collection.postman.prerequest

- Set [`prerequest`](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/#re-using-pre-request-scripts) on the `collection` using pre-request scripts.

- Multiple rules can be set.

- Note that `collection.postman.prerequest` has no context, meaning `it` is `null`.