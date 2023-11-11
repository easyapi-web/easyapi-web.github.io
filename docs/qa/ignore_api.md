## How to Ignore APIs

   * Add configuration:

   ```properties
   #ignore class or method which has comment tag 'ignore' 
   ignore=#ignore
   ```
   
   * Comment @ignore on the class to ignore the current class:

   ```java
   /**
    * Mock Apis
    *
    * @ignore
    */
   @RestController
   @RequestMapping(value = "mock")
   public class MockCtrl {
   }
   ```
   
   * Comment @ignore on the method to ignore the current API:

   ```java
   /**
    * Mock Apis
    */
   @RestController
   @RequestMapping(value = "mock")
   public class MockCtrl {
   
        /**
         * Mock String
         * @ignore
         */
        @GetMapping("/string")
        public String mockString() {
            return Result.success("mock string");
        }

   }
   ```