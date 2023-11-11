## How to Convert Specified Types to Another Type for Processing

   * Treat `java.time.LocalDateTime` as a `yyyy-mm-dd` formatted string:

   ```properties
   #Resolve 'java.time.LocalDateTime' as 'java.lang.String'
   json.rule.convert[java.time.LocalDateTime]=java.lang.String
   json.rule.convert[java.time.LocalDate]=java.lang.String
   ```
   
   * Treat `java.time.LocalDateTime` as a `timestamp`:
   
   ```properties
   #Resolve 'java.time.LocalDateTime' as 'java.lang.Long'
   json.rule.convert[java.time.LocalDateTime]=java.lang.Long
   json.rule.convert[java.time.LocalDate]=java.lang.Long
   ```