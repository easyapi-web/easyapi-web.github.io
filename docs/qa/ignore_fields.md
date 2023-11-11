## How to Ignore Certain Fields

* Use the rule:[json.rule.field.ignore](/setting/rules/json_rule_field_ignore.md.html)

   * To ignore fields with a specific name:

   ```properties
   ## ignore field 'log'
   json.rule.field.ignore=log
   ```
   
   * To ignore fields of a specific type:

   ```properties
   ## ignore field 'log' typed xxx.xxx.Log
   json.rule.field.ignore=groovy:it.type().name()=="xxx.xxx.Log"
   ```
   
   * To ignore fields with a specific qualifier:

   ```properties
   #ignore transient field
   json.rule.field.ignore=groovy:it.hasModifier("transient")
   ```