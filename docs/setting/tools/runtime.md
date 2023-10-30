# `runtime` provides runtime information (v2.5.5+)

---

## Methods

| Method  |  Return Type  |  Description  |  Example  |
| ------------ | ------------ | ------------ |------------ |
| channel() | string | Get the current export channel: markdown/postman | runtime.channel()| 
| projectName() | string | Get the current project name | runtime.projectName()| 
| projectPath() | string | Get the current project path | runtime.projectPath()| 
| module() | string | Get the current module name (after applying rules) | runtime.module()|
| moduleName() | string | Get the original module name | runtime.moduleName()|
| filePath() | string | Get the path of the file being parsed | runtime.filePath()|
| getBean() | object | Get a bean from the plugin | runtime.getBean("com.itangcent.intellij.jvm.DocHelper")|
| async() | null | Execute operations asynchronously | runtime.async{logger.info("async")}|