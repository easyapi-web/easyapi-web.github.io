## How to Declare the Required Permissions for an API in the API Description (javax annotation security)

   * Consider adding the following configuration:

   ```properties
   ## security description
   method.doc[@javax.annotation.security.RolesAllowed]=groovy:"require role:"+it.ann("javax.annotation.security.RolesAllowed")
   ```
   
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
        @RolesAllowed("admin")
        public String mockString() {
            return Result.success("mock string");
        }
    }
   ```