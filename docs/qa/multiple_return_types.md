## Some Interfaces May Have Different Returns

   * You can use [method.doc](/setting/rules/method_doc.html) to place possible returns in method comments.

   ***Configuration is as follows:***

   ```properties
   method.doc[#result]=groovy: it.docs("result").collect{helper.resolveLink(it)}.grep{it!=null}.collect{"Possible returns:\n\n```json\n"+it.toJson(true)+"\n```\n\n"}.join("\n")
   ```

   ***Usage is as follows:***

   ```java
    /**
     * @result {@link UserInfo}
     * @result {@link Result<UserInfo>}
     */
    public Result mockString() {
        ...
    }
   ```