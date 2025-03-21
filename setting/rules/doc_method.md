# doc.method

- Additional comments on method(api)


### Built-in recommended configuration

```properties
#deprecated info(java)
doc.method[#deprecated]=groovy:"\n「deprecated」" + it.doc("deprecated")
doc.method[@java.lang.Deprecated]=「deprecated」

doc.method[groovy:it.containingClass().hasDoc("deprecated")]=groovy:"\n「deprecated」" + it.containingClass().doc("deprecated")
doc.method[groovy:it.containingClass().hasAnn("java.lang.Deprecated")]=「deprecated」


#deprecated info(kotlin)
doc.method[@kotlin.Deprecated]=groovy:"\n「deprecated」" + it.ann("kotlin.Deprecated","message")
doc.method[groovy:it.containingClass().hasAnn("kotlin.Deprecated")]=groovy:"\n「deprecated」 " + it.containingClass().ann("kotlin.Deprecated","message")

```

### Add support for swagger @ApiOperation

```properties
doc.method=@io.swagger.annotations.ApiOperation#value
```

### demo

```java

/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @ApiOperation(value = "mock string")
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```