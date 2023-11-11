## How to Indicate in the API/Folder Description that the API/Folder has been Deprecated

*  The default recommended configuration is as follows:

    ```properties
    method.doc[#deprecated]=groovy:"\n「deprecated」" + it.doc("deprecated")
    method.doc[@java.lang.Deprecated]=「deprecated」
    method.doc[@kotlin.Deprecated]=groovy:"\n「deprecated」" + it.ann("kotlin.Deprecated","message")

    method.doc[groovy:it.containingClass().hasDoc("deprecated")]=groovy:"\n「deprecated」" + it.containingClass().doc("deprecated")
    method.doc[groovy:it.containingClass().hasAnn("java.lang.Deprecated")]=「deprecated」
    method.doc[groovy:it.containingClass().hasAnn("kotlin.Deprecated")]=groovy:"\n「deprecated」 " + it.containingClass().ann("kotlin.Deprecated","message")

    ```

*  Use annotations or comments to mark the API as deprecated:

    ```java
    /**
    * You can use the `@Deprecated` annotation to indicate the API is deprecated,
    * or use the `@deprecated` comment.
    *
    * @deprecated Use {@link #methodName3(String)} instead.
    */
    @Deprecated
    @RequestMapping(value = "/pathOfApi2")
    public Result methodName2(@RequestBody MockDtoOrVo jsonModel){
        ...
    }

    ```