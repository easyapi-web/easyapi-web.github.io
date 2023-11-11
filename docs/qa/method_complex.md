## During Export, an Error Appears Stating `com.xxx.Xxx is to complex. Blocked cause by xxx reached xxx`, How to Handle

   - Check whether the class in the error message should not appear in the request/response body. You could try the following configuration:
   ```
   # ignore field with type com.xxx.Xxx
   field.ignore=groovy:it.type().name()=="com.xxx.Xxx"
   ```
   
   - If this class indeed has numerous fields and needs to be fully parsed, you can relax the parsing limits through configuration:
   ```
   max.deep=8
   max.elements=512
   ```

