## How to Organize APIs into Specified Folders

   * `module` is used for categorizing APIs.
        * When exporting to `postman`, each `module` will be treated as a separate folder.

   * By default, the current module name is used (or the project name for single-module projects).

   * Default recommended configuration:

   ```properties
   #find module from comment tag 
   module=#module
   ```
   
   * Comment on the class like this:

   ```java
   /**
    * Mock Apis
    *
    * @module mock
    */
   @RestController
   @RequestMapping(value = "mock")
   public class MockCtrl {
   }
   ```
