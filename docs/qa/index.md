
***This plug-in configuration is too flexible, and the following are just examples that need to be adjusted according to the actual situation。***

---


## How to add a configuration file

   * see [local-file-config](/setting/local-file-config.html)
   
---


## How to organize API to specified folder

   * `module` is use for classification API
        * When exporting `postman`, each `module` will be used as a separate folder

   * The built-in configuration:

   ```properties
   #find module from comment tag 
   module=#module
   ```
   
   * Comment like this on the class:

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

---


## How to ignore API

   * The built-in configuration:

   ```properties
   #ignore class or method which has comment tag 'ignore' 
   ignore=#ignore
   ```
   
   * Comment like this on the class to ignore all apis in the class:

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
   
   * Comment like this on the method to ignore the api:

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

---


## How to set the name / description of API / folder

 * In general:

    ```java
    /**
     * The head line of comments will be used as the title of the folder
     * The remaining line comments are used as the description
     */
    @RestController
    @RequestMapping(value = "mock")
    public class MockCtrl {
    
        /**
         * The head line of comments will be used as the title of the api
         * The remaining line comments are used as the description
         */
        @GetMapping("/string")
        public String mockString() {
            return Result.success("mock string");
        }
    }
    ```
---



## How to explain in the description of API / folder that API / folder is deprecated

   * The built-in configuration:

    ```properties
    doc.method[#deprecated]=groovy:"\n「deprecated」" + it.doc("deprecated")
    doc.method[@java.lang.Deprecated]=「deprecated」
    doc.method[@kotlin.Deprecated]=groovy:"\n「deprecated」" + it.ann("kotlin.Deprecated","message")

    doc.method[groovy:it.containingClass().hasDoc("deprecated")]=groovy:"\n「deprecated」" + it.containingClass().doc("deprecated")
    doc.method[groovy:it.containingClass().hasAnn("java.lang.Deprecated")]=「deprecated」
    doc.method[groovy:it.containingClass().hasAnn("kotlin.Deprecated")]=groovy:"\n「deprecated」 " + it.containingClass().ann("kotlin.Deprecated","message")

    ```

---


    
## How to declare the permissions required by API in API description(javax annotation security)

   * add config for javax annotation security:

   ```properties
   ## security description
   doc.method[@javax.annotation.security.RolesAllowed]=groovy:"require role:"+it.ann("javax.annotation.security.RolesAllowed")
   ```
   
   * code:

   ```java
   /**
    * The head line of comments will be used as the title of the folder
    * The remaining line comments are used as the description
    */
   @RestController
   @RequestMapping(value = "mock")
   public class MockCtrl {
   
       /**
        * The head line of comments will be used as the title of the api
        * The remaining line comments are used as the description
        */
       @GetMapping("/string")
       @RolesAllowed("admin")
       public String mockString() {
           return Result.success("mock string");
       }
   }

   ```

---



## How to declare the permissions required by API in API description(spring security)

   * add config for spring security:

   ```properties
   ## security description
   find_role_in_PreAuthorize=(function(exp){var str="";if(exp.indexOf("hasRole")!=-1){var roles=exp.match(/hasRole\\((.*?)\\)/);if(roles&&roles.length>1){str+="require role:"+roles[1];}};return str})
   doc.method[@org.springframework.security.access.prepost.PreAuthorize]=js:${find_role_in_PreAuthorize}(it.ann("org.springframework.security.access.prepost.PreAuthorize"))
   ```
   
   * code:

   ```java
   /**
    * The head line of comments will be used as the title of the folder
    * The remaining line comments are used as the description
    */
   @RestController
   @RequestMapping(value = "mock")
   public class MockCtrl {
   
       /**
        * The head line of comments will be used as the title of the api
        * The remaining line comments are used as the description
        */
       @GetMapping("/string")
       @PreAuthorize("hasRole('admin')")
       public String mockString() {
           return Result.success("mock string");
       }
   }

   ```

---


 
## How to ignore special fields

   * Ignore fields with specific names:

   ```properties
   ## ignore field 'log'
   json.rule.field.ignore=log
   ```
   
   * Ignore fields of specific types:

   ```properties
   ## ignore field 'log' typed xxx.xxx.Log
   json.rule.field.ignore=groovy:it.type().name()=="xxx.xxx.Log"
   ```
   
   * Ignore fields with specific modifiers:

   ```properties
   #ignore transient field
   json.rule.field.ignore=groovy:it.hasModifier("transient")
   ```

---


## How to convert the specified type to another type

   * Parse `java.time.LocalDateTime` as a string of `yyyy-mm-dd`

   ```properties
   #Resolve 'java.time.LocalDateTime' as 'java.lang.String'
   json.rule.convert[java.time.LocalDateTime]=java.lang.String
   json.rule.convert[java.time.LocalDate]=java.lang.String
   ```
   
   * Parse `java.time.LocalDateTime` as a long of `timestamp`
   
   ```properties
   #Resolve 'java.time.LocalDateTime' as 'java.lang.Long'
   json.rule.convert[java.time.LocalDateTime]=java.lang.Long
   json.rule.convert[java.time.LocalDate]=java.lang.Long
   ```
   

## Some apis may have different returns

   * Use [doc.method](/setting/rules/doc_method.html) to show possible returns in method comments

   ***Configurations:***

   ```properties
   doc.method[#result]=groovy: it.docs("result").collect{helper.resolveLink(it)}.grep{it!=null}.collect{"may return:\n\n```json\n"+it.toJson(true)+"\n```\n\n"}.join("\n")
   ```

   ***Usages:***

   ```java
    /**
     * @result {@link UserInfo}
     * @result {@link Result<UserInfo>}
     */
    public Result mockString() {
        ...
    }
   ```

