## How to Set the Name/Description for APIs/Folders

 * Generally:

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
        public String mockString() {
            return Result.success("mock string");
        }
    }
    ```
 
 * For special requirements, refer to:[class.doc](/setting/rules/class_doc.html) | [method.doc](/setting/rules/method_doc.html) | [api.name](/setting/rules/api_name.html)