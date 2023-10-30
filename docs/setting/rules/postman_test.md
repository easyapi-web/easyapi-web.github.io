# postman.test

> Set [`test`](https://learning.postman.com/docs/postman/scripts/test-scripts/) for the `postman` API.

> Multiple rules are allowed.

## Example of a fixed `test` configuration

``````
postman.test=```
pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});
var jsonObject = xml2Json(responseBody);
var schema = {
  "items": {
    "type": "boolean"
  }
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});
```
``````

## Set `test` for `APIs` with specified annotation

``````
postman.test[@com.itangcent.common.annotation.RequiredLogin]=```
pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});
var jsonObject = xml2Json(responseBody);
var schema = {
  "items": {
    "type": "boolean"
  }
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});
```
``````

## Set `test` for `APIs` without specified annotation

``````
postman.test[!@com.itangcent.common.annotation.Public]=```
pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});
var jsonObject = xml2Json(responseBody);
var schema = {
  "items": {
    "type": "boolean"
  }
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});
```
``````

## Provide multiple `test` in the configuration and choose which one to use based on code comments

``````
postman.test.groupA=```pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});
```
postman.test.groupB=```
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
```
postman.test.groupC=```
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
```
postman.test.groupD=```
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
```
postman.test[#test]=groovy:config.get("postman.test."+it.doc("test"))
``````

***Usage:***

```java
/**
  * Get a list of users
  *
  * @param type User type {@link com.itangcent.common.constant.UserType}
  * @test groupA
  */
@RequestMapping(value = "/list", method = RequestMethod.GET)
public IResult list(Integer type) {
    ...
    return Result.success(Collections.singletonList(userInfo));
}
```


---

# class.postman.test

- Set [test](https://learning.postman.com/docs/writing-scripts/test-scripts/#testing-collections-and-folders) for the folder on the `class`.

- Multiple rules are allowed.

- The context is `class`.

---

# collection.postman.test

- Set [`test`](https://learning.postman.com/docs/writing-scripts/test-scripts/#testing-collections-and-folders) for the `collection`.

- Multiple rules are allowed.

- Note that `collection.postman.test` does not have a context, meaning `it` is `null`.