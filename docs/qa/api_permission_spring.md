## How to Declare the Required Permissions for an API in the API Description (spring security)

* Consider adding the following configuration:

``````properties
## security description
doc.method[@org.springframework.security.access.prepost.PreAuthorize]=groovy:```
   def preAuthorize = it.ann("org.springframework.security.access.prepost.PreAuthorize")
   if(tool.nullOrBlank(preAuthorize)){
      return
   }
   def role = regex.getGroup1("hasRole\\('(.*?)'\\)",preAuthorize)
   return "require role: $role"
```
``````
   
* Example:

```java
/**
 * The first line of comments serves as the title for the folder.
   * The remaining lines of comments serve as the description for the folder.
   */
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

      /**
       * The first line of comments serves as the title for the API.
      * The remaining lines of comments serve as the description for the API.
      */
      @GetMapping("/string")
      @PreAuthorize("hasRole('admin')")
      public String mockString() {
         return Result.success("mock string");
      }
}
```