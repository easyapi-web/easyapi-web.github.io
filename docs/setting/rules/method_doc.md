# method.doc(doc.method)

> Additional comments for methods (APIs).


### Default Recommended Configuration

```properties
#deprecated info(java)
method.doc[#deprecated]=groovy:"\n「Deprecated」" + it.doc("deprecated")
method.doc[@java.lang.Deprecated]=「Deprecated」

method.doc[groovy:it.containingClass().hasDoc("deprecated")]=groovy:"\n「Deprecated」" + it.containingClass().doc("deprecated")
method.doc[groovy:it.containingClass().hasAnn("java.lang.Deprecated")]=「Deprecated」


#deprecated info(kotlin)
method.doc[@kotlin.Deprecated]=groovy:"\n「Deprecated」" + it.ann("kotlin.Deprecated","message")
method.doc[groovy:it.containingClass().hasAnn("kotlin.Deprecated")]=groovy:"\n「Deprecated」 " + it.containingClass().ann("kotlin.Deprecated","message")

```

### Adding support for Swagger's @ApiOperation

```properties
method.doc=@io.swagger.annotations.ApiOperation#value
```

### Demo

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