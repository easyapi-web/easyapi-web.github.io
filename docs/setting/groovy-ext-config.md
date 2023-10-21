# Groovy Local Extensions

> This feature has been deprecated. Please refrain from using it.

## Introduction:
- In extremely exceptional cases where fulfilling requirements through simple configuration is not possible, Groovy extensions can be utilized to achieve highly customized functionality.
- Compared to regular configurations, this approach requires developers to have a certain level of technical expertise, including knowledge of Groovy and the structure of the current plugin.
- [wiki](https://en.wikipedia.org/wiki/Apache_Groovy)
- [offical](http://groovy-lang.org/)
- [demo](https://github.com/Earth-1610/spring-demo/tree/feature/ext/.easyapi/ext)

## Usage Steps

- Create a directory named `/.easyapi/ext` in your project directory.
- Create an extension file named `${ActionName}Ext.groovy``. The currently supported actions are:
  - `ApiCallAction`
  - `ApiDashBoardAction`
  - `YApiDashBoardAction`
  - `FieldsToJsonAction`
  - `MarkdownExportAction`
  - `PostmanExportAction`

- Declare the extension class in the extension file:
```groovy
class ActionNameExt implements ActionExt {

    void init(ActionContext.ActionContextBuilder builder) {
        //Here, you can use the bind method to inject customized components and implement the desired functionality.
        builder.bind(Xxx.class, KtHelper.INSTANCE.ktFunction({
            it.to(Yyy.class).in(com.google.inject.Singleton.class)
            return null
        }))
    }
}
```

### demo

- `YapiExportActionExt.groovy`
```groovy
import com.intellij.psi.*
import com.itangcent.common.model.Request
import com.itangcent.idea.plugin.api.export.ClassExporter
import com.itangcent.idea.plugin.api.export.SpringRequestClassExporter
import com.itangcent.idea.plugin.api.export.yapi.YapiClassExportRuleKeys
import com.itangcent.idea.plugin.api.export.yapi.YapiRequestKitKt
import com.itangcent.idea.plugin.script.ActionExt
import com.itangcent.idea.plugin.utils.KtHelper
import com.itangcent.intellij.context.ActionContext

import java.util.stream.Collectors
import java.util.stream.Stream

class YapiExportActionExt implements ActionExt {

    void init(ActionContext.ActionContextBuilder builder) {

        builder.bind(ClassExporter.class, KtHelper.INSTANCE.ktFunction({
            it.to(CustomClassExporter.class).in(com.google.inject.Singleton.class)
            return null
        }))

    }

    static class CustomClassExporter extends SpringRequestClassExporter {

        void processCompleted(PsiMethod method, Request request) {
            super.processCompleted(method, request)

            String tags = ruleComputer.computer(YapiClassExportRuleKeys.TAG, method)
            if (tags != null && !tags.isEmpty()) {
                YapiRequestKitKt.setTags(request, Stream.of(tags.split("\n"))
                        .map { it.trim() }
                        .filter { !it.isEmpty() }
                        .collect(Collectors.toList())
                )
            }

            String status = ruleComputer.computer(YapiClassExportRuleKeys.STATUS, method)
            logger.info(YapiRequestKitKt.class.toString())
            YapiRequestKitKt.setStatus(request, status)
        }
    }
}
```

## Note

### Due to the plugin source code being written in Kotlin, some syntactic sugar cannot be used in Groovy.

- The extension methods declared in Kotlin are as follows:

```kotlin
fun Doc.setTags(tags: List<String>?) {
    ...
}
```
- In Groovy, you can utilize these extension methods as shown below:

```groovy
YapiRequestKitKt.setTags(request,tags)
```