## A Field May Have Values of Different Types

   * You can use [field.doc](/setting/rules/field_doc.html) to place possible type values in field comments.

   ***Configuration is as follows:***

   ```properties
    field.doc[#maybe]=groovy:it.docs("maybe").collect{helper.resolveLink(it)}.collect{"Possible types:\n\n```json\n" + it.toJson(true) +"\n```\n\n"}.join("\n")
   ```

   ***Usage is as follows:***

   ```java
    /**
     * @maybe {@link UserInfo}
     * @maybe {@link java.lang.String}
     */
    public Object target;
   ```