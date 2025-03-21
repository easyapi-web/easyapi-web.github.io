window.ydoc_plugin_search_json = {
  "document": [
    {
      "title": "Introduction",
      "content": "Easily export APIs from IDEA to Postman or Markdown.\nParsing based on Javadoc, KDoc, and ScalaDoc.\n",
      "url": "/documents/index.html",
      "children": [
        {
          "title": "Features",
          "url": "/documents/index.html#features",
          "content": "FeaturesExport API Doc to Postman\nExport API Doc to Markdown\nCall API - Built-in API Debugging\n"
        }
      ]
    },
    {
      "title": "Installation",
      "content": "Support the following IDEsIntelliJ IDEA 173+(2017.3+)\nIntelliJ IDEA Community Edition 173+(2017.3+)\nInstall from IDEA repositoryPreferences(Settings) > Plugins > Browse repositories... > find\"EasyApi\" > Install Plugin\nInstall manually:Download plugin from Jetbrains or Github -> Preferences(Settings) > Plugins > Install plugin from disk...\nRestart IDE.",
      "url": "/documents/installation.html",
      "children": []
    },
    {
      "title": "Usage",
      "content": "The following usage are supportedTo export APIs from IDEA to Postman or Markdown, follow these steps:\nOpen the file containing the API in the project or select the file or folder in the project file area on the left-hand\nside of IDEA.\nUse the shortcut alt shift E(windows)/ctrl E(mac) to open the export dialog.\nSelect the APIs you want to export and choose the export channel as either Markdown or Postman.\nFinally, click the [✔] button or press Enter to confirm the export.\nTo export APIs from IDEA to Postman or Markdown:\nOpen the file containing the API in the project.\nRight-click in the file editor or use the shortcut [Alt + Insert] (Windows) or [Ctrl + Enter] (Mac).\nSelect EasyApi and then choose either ExportPostman or ExportMarkdown.\nTo make an HTTP request to the API in the current file:\nOpen the file containing the API in the project.\nRight-click in the file editor or use the shortcut [Alt + Insert] (Windows) or [Ctrl + Enter] (Mac).\nSelect EasyApi and then choose Call. Now you can start an HTTP request to the API in the current file.\n",
      "url": "/documents/use.html",
      "children": []
    },
    {
      "title": "Export to Postman",
      "content": "You can export your APIs to Postman using either of these methods:",
      "url": "/documents/export2postman.html",
      "children": [
        {
          "title": "Context Menu",
          "url": "/documents/export2postman.html#context-menu",
          "content": "Context MenuRight-click on the API file in the project\nNavigate to EasyApi > Export Postman\n"
        },
        {
          "title": "Keyboard Shortcut",
          "url": "/documents/export2postman.html#keyboard-shortcut",
          "content": "Keyboard ShortcutOpen the API file in the project, or select file/folder in the project explorer\nPress Alt + Shift + E (Windows) or Ctrl + E (Mac)\nIn the export dialog:\n\nSelect the APIs you want to export\nChoose Postman as the export channel\nClick [✔] or press Enter to confirm\n\n\n"
        },
        {
          "title": "First-Time Setup",
          "url": "/documents/export2postman.html#first-time-setup",
          "content": "First-Time SetupWhen using the Postman export feature for the first time:You will be prompted to provide necessary configuration information\nFor detailed setup instructions, please refer to the Postman Configuration Guide\n"
        }
      ]
    },
    {
      "title": "Export to Markdown",
      "content": "You can export your APIs to Markdown using either of these methods:",
      "url": "/documents/export2markdown.html",
      "children": [
        {
          "title": "Context Menu",
          "url": "/documents/export2markdown.html#context-menu",
          "content": "Context MenuRight-click on the API file in the project\nNavigate to EasyApi > Export Markdown\n"
        },
        {
          "title": "Keyboard Shortcut",
          "url": "/documents/export2markdown.html#keyboard-shortcut",
          "content": "Keyboard ShortcutOpen the API file in the project, or select file/folder in the project explorer\nPress Alt + Shift + E (Windows) or Ctrl + E (Mac)\nIn the export dialog:\n\nSelect the APIs you want to export\nChoose Markdown as the export channel\nClick [✔] or press Enter to confirm\n\n\n"
        },
        {
          "title": "Markdown Export Settings",
          "url": "/documents/export2markdown.html#markdown-export-settings",
          "content": "Markdown Export SettingsYou can customize the Markdown export behavior in IDE Global Settings. The following options are available:\nOutput Demo (outputDemo):\n\nGenerates example response data for each API in the exported Markdown\nUseful for documentation that requires sample responses\n\n\n\nOutput Charset (outputCharset):\n\nControls the character encoding for the exported Markdown document\nIf you see garbled text in the output, try adjusting this setting\nCommon options include: UTF-8, UTF-16, etc.\n\n\n"
        }
      ]
    },
    {
      "title": "Export RPC",
      "content": "You can export your RPCs to Markdown using any of these methods:",
      "url": "/documents/export_rpc.html",
      "children": [
        {
          "title": "Keyboard Shortcut",
          "url": "/documents/export_rpc.html#keyboard-shortcut",
          "content": "Keyboard ShortcutOpen the file containing the RPCs in the project, or select file/folder in the project explorer\nPress Alt + Shift + E (Windows) or Ctrl + E (Mac)\nIn the export dialog:\n\nSelect the RPCs you want to export\nChoose Markdown as the export channel\nClick [✔] or press Enter to confirm\n\n\n"
        },
        {
          "title": "Context Menu",
          "url": "/documents/export_rpc.html#context-menu",
          "content": "Context MenuOpen the file containing the RPCs in the project\nRight-click on the file editor\nNavigate to Generate... or use shortcut Alt + Insert (Windows) / Ctrl + Enter (Mac)\nSelect Export Markdown\n"
        },
        {
          "title": "Main Menu",
          "url": "/documents/export_rpc.html#main-menu",
          "content": "Main MenuSelect the file or folder in the project explorer\nClick Code > Export Markdown in the main menu at the top of the IDE\n"
        },
        {
          "title": "RPC Rules",
          "url": "/documents/export_rpc.html#rpc-rules",
          "content": "RPC Rules\n\nKey\nTarget(context)\nVersion\nDescription\n\n\n\n\n☆mdoc.class.filter\nclass\nv0.9.5+\nFilter classes which can export method documents(rpc)\n\n\nmdoc.method.filter\nmethod\nv0.9.5+\nFilter methods which can export method documents(rpc)\n\n\nClick config rule to view more."
        },
        {
          "title": "Important Notes",
          "url": "/documents/export_rpc.html#important-notes",
          "content": "Important Notes\nThe feature to export RPC methods is disabled by default. To enable it, check: Preferences(Settings) > Other Settings > EasyApi > Support > methodDoc. For more information, please refer to the IDEA config\n\n\nThe exported RPC document supports only the Markdown format.\n\n"
        }
      ]
    },
    {
      "title": "Advanced useage",
      "content": "Built-in API debugging tool: Call Api\nScript executor: Script Executor\nCustom framework: Generic\n",
      "url": "/documents/advanced_use.html",
      "children": []
    },
    {
      "title": "Call API - Built-in API Debugging Tool",
      "content": "",
      "url": "/documents/call.html",
      "children": [
        {
          "title": "Overview",
          "url": "/documents/call.html#overview",
          "content": "OverviewCall API is a lightweight API debugging tool directly integrated into the IDE, allowing you to quickly test and debug APIs without switching to external applications. It provides a clean interface and convenient workflow, particularly suitable for daily API debugging needs during development.Use Cases: Quick API testing and debugging during daily development\nAdvantage: No need to switch to external tools, complete debugging directly in the IDE\nPositioning: Designed for quick verification during development; for more complex testing scenarios, consider using the Export to Postman feature\n"
        },
        {
          "title": "How to Use",
          "url": "/documents/call.html#how-to-use",
          "content": "How to UseOpen the file in your project that contains the API\nRight-click on the file content, and select Call Api\nEdit request parameters and send API requests through the window\n"
        },
        {
          "title": "Key Features",
          "url": "/documents/call.html#key-features",
          "content": "Key FeaturesAutomatic Login: Achieve through http.call.before rule configuration\nResponse Processing: Process response data using http.call.after rule configuration\nSeamless Integration: Perfectly integrated with the IDE for a smooth development experience\n"
        },
        {
          "title": "Usage Recommendations",
          "url": "/documents/call.html#usage-recommendations",
          "content": "Usage RecommendationsSuitable for scenarios requiring quick API response verification during development\nFor scenarios requiring saved test cases, test collections, or complex test workflows, use the API Export feature\nCombined with rule configurations, automated test processes and data processing can be achieved\n"
        },
        {
          "title": "Call Related Rules",
          "url": "/documents/call.html#call-related-rules",
          "content": "Call Related Rules\n\nKey\nTarget (Context)\nVersion\nDescription\n\n\n\n\nhttp.call.before\nrequest\nv1.9.0+\nHTTP request pre-callback, can be used for automatic login, adding common headers, etc.\n\n\nhttp.call.after\nrequest&response\nv1.9.0+\nHTTP request post-callback, can be used for response data processing, logging, etc.\n\n\nClick here to view more about rule configuration."
        }
      ]
    },
    {
      "title": "Generic (Custom Framework)",
      "content": "The plugin can support custom web frameworks through configuration. Here are the steps:Enable generic\nConfigure the related settings for generic\nGeneric Related Rules\n\n    key\ntarget(context)\nversion\ndesc\n\n\n\n\n    generic.class.has.api\nclass\nv2.2.1+\nDetermine if a class has any API\n\n\n    generic.path\nclass/method\nv2.2.1+\nGet the HTTP path from a class/method\n\n\n    generic.http.method\nclass/method\nv2.2.1+\nGet the HTTP method from a class/method\n\n\n    generic.method.has.api\nclass\nv2.2.1+\nDetermine if a method has an API\n\n\n    generic.param.name\nparam\nv2.2.1+\nGet the name of a parameter\n\n\n    generic.param.as.json.body\nparam\nv2.2.1+\nDetermine if a parameter should be treated as a JSON body\n\n\n    generic.param.as.form.body\nparam\nv2.2.1+\nDetermine if a parameter should be treated as a form\n\n\n    generic.param.as.path.var\nparam\nv2.2.1+\nDetermine if a parameter should be treated as a URL path variable\n\n\n    generic.param.path.var\nparam\nv2.2.1+\nGet the name of a parameter as a URL path variable\n\n\n    generic.param.as.cookie\nparam\nv2.2.1+\nDetermine if a parameter should be treated as a Cookie\n\n\n    generic.param.cookie\nparam\nv2.2.1+\nGet the name of a parameter as a Cookie\n\n\n    generic.param.cookie.value\nparam\nv2.2.1+\nGet the value of a parameter as a Cookie\n\n\n    generic.param.header\nparam\nv2.2.1+\nGet the content of a parameter as a Header\n\n\nThe following is an equivalent generic configuration for the spring framework# generic.class.has.apigeneric.class.has.api=@org.springframework.stereotype.Controller\ngeneric.class.has.api=@org.springframework.web.bind.annotation.RestController\n\n# generic.path\ngeneric.path[@org.springframework.web.bind.annotation.RequestMapping]=@org.springframework.web.bind.annotation.RequestMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.RequestMapping]=@org.springframework.web.bind.annotation.RequestMapping#path\ngeneric.path[@org.springframework.web.bind.annotation.GetMapping]=@org.springframework.web.bind.annotation.GetMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.GetMapping]=@org.springframework.web.bind.annotation.GetMapping#path\ngeneric.path[@org.springframework.web.bind.annotation.PostMapping]=@org.springframework.web.bind.annotation.PostMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.PostMapping]=@org.springframework.web.bind.annotation.PostMapping#path\ngeneric.path[@org.springframework.web.bind.annotation.PutMapping]=@org.springframework.web.bind.annotation.PutMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.PutMapping]=@org.springframework.web.bind.annotation.PutMapping#path\ngeneric.path[@org.springframework.web.bind.annotation.DeleteMapping]=@org.springframework.web.bind.annotation.DeleteMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.DeleteMapping]=@org.springframework.web.bind.annotation.DeleteMapping#path\ngeneric.path[@org.springframework.web.bind.annotation.PatchMapping]=@org.springframework.web.bind.annotation.PatchMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.PatchMapping]=@org.springframework.web.bind.annotation.PatchMapping#path\n\n# generic.http.method\ngeneric.http.method[@org.springframework.web.bind.annotation.RequestMapping]=@org.springframework.web.bind.annotation.RequestMapping#method\ngeneric.http.method[@org.springframework.web.bind.annotation.GetMapping]=GET\ngeneric.http.method[@org.springframework.web.bind.annotation.PostMapping]=POST\ngeneric.http.method[@org.springframework.web.bind.annotation.PutMapping]=PUT\ngeneric.http.method[@org.springframework.web.bind.annotation.DeleteMapping]=DELETE\ngeneric.http.method[@org.springframework.web.bind.annotation.PatchMapping]=PATCH\n\n# generic.method.has.api\ngeneric.method.has.api=@org.springframework.web.bind.annotation.RequestMapping\ngeneric.method.has.api=@org.springframework.web.bind.annotation.GetMapping\ngeneric.method.has.api=@org.springframework.web.bind.annotation.PostMapping\ngeneric.method.has.api=@org.springframework.web.bind.annotation.PutMapping\ngeneric.method.has.api=@org.springframework.web.bind.annotation.DeleteMapping\ngeneric.method.has.api=@org.springframework.web.bind.annotation.PatchMapping\n\n# generic.param.as.json.body\ngeneric.param.as.json.body=@org.springframework.web.bind.annotation.RequestBody\n\n# generic.param.as.form.body\ngeneric.param.as.form.body=@org.springframework.web.bind.annotation.ModelAttribute\n\n# generic.param.as.path.var\ngeneric.param.as.path.var=@org.springframework.web.bind.annotation.PathVariable\n\n# generic.param.path.var\ngeneric.param.path.var=@org.springframework.web.bind.annotation.PathVariable#value\ngeneric.param.path.var=@org.springframework.web.bind.annotation.PathVariable#name\n\n# generic.param.as.cookie\ngeneric.param.as.cookie=@org.springframework.web.bind.annotation.CookieValue\n# generic.param.cookie\ngeneric.param.cookie=@org.springframework.web.bind.annotation.CookieValue#value\ngeneric.param.cookie=@org.springframework.web.bind.annotation.CookieValue#name\n# generic.param.cookie.value\ngeneric.param.cookie=@org.springframework.web.bind.annotation.CookieValue#defaultValue\n\n# generic.param.name\ngeneric.param.name=@org.springframework.web.bind.annotation.RequestParam#value\ngeneric.param.name=@org.springframework.web.bind.annotation.RequestParam#name\n\n# generic.param.header\ngeneric.param.header[@org.springframework.web.bind.annotation.RequestHeader]=groovy:```\ndef headerAnn = it.annMap(\"org.springframework.web.bind.annotation.RequestHeader\")\ndef header = [:]\nif(headerAnn.containsKey(\"name\")){\n    header[\"name\"] = headerAnn[\"name\"]\n}\nif(headerAnn.containsKey(\"value\")){\n    header[\"name\"] = headerAnn[\"value\"]\n}\nif(headerAnn.containsKey(\"defaultValue\")){\n    header[\"example\"] = headerAnn[\"defaultValue\"]\n}\nif(headerAnn.containsKey(\"required\")){\n    header[\"required\"] = headerAnn[\"required\"]\n}\nreturn tool.toJson(header)\n```\n\n# param.required\nparam.required=@org.springframework.web.bind.annotation.RequestParam#required\n",
      "url": "/documents/generic.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/script_executor.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/docs.html",
      "children": [
        {
          "title": "Javadoc",
          "url": "/documents/docs.html#javadoc",
          "content": "Javadocwiki\noracle\nbaike\n"
        },
        {
          "title": "KDoc",
          "url": "/documents/docs.html#kdoc",
          "content": "KDockotlin-doc\n"
        },
        {
          "title": "ScalaDoc",
          "url": "/documents/docs.html#scaladoc",
          "content": "ScalaDocscaladoc\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/java_doc_demo.html",
      "children": [
        {
          "title": "api demo",
          "url": "/documents/java_doc_demo.html#api-demo",
          "content": "api demo/**\n * group name\n * group comment/desc\n *\n * @module module_name\n */\n@RestController\n@RequestMapping(value = \"/pathOfCtrl\")\npublic class MockCtrl {\n\n    /**\n    * api name\n    * api comment/desc\n    * @param param1 name/comment/desc of param1\n    * @param param2 You can use '@link' to indicate that the value of this parameter is an enumeration:{@link some.enum.or.constant.class}\n    * @param param3 Specifies linked field if the target enumeration field does not match the parameter name:{@link some.enum.or.constant.class#property1}\n    * @return desc of response\n    */\n    @RequestMapping(value = \"/pathOfApi1\")\n    public Result methodName1(long param1,\n                      @RequestParam String param2,\n                      @RequestParam(required = false, defaultValue = \"defaultValueOfParam3\") String param3){\n        ...\n    }\n\n\n    /**\n    * By default content-type:`application/x-www-form-urlencoded`,\n    * For '@requestbody', 'application/json' will be used\n    * Deprecated API can annotated with '@Deprecated ',\n    * you can also use the comment doc '@deprecated'\n    *\n    * @deprecated use {@link #methodName3(String)} instead of\n    */\n    @Deprecated\n    @RequestMapping(value = \"/pathOfApi2\")\n    public Result methodName2(@RequestBody MockDtoOrVo jsonModel){\n        ...\n    }\n\n    ...\n}\n"
        },
        {
          "title": "model(dto/vo) demo",
          "url": "/documents/java_doc_demo.html#modeldtovo-demo",
          "content": "model(dto/vo) demopublic class MockDtoOrVo {\n    /**\n     * field comment\n     */\n    private Long field1;\n\n    private Double field2;//Comments can also be written here\n\n    /**\n     * Use `@see` to indicate that the value of this field is an enumeration\n     * @see some.enum.or.constant.class\n     */\n    private int field3;\n\n    /**\n     * Specifies linked field if the target enumeration field does not match the parameter name:{@link some.enum.or.\n     * constant.class#property1}\n     * @see some.enum.or.constant.class#property1\n     */\n    private int field4;\n\n    /**\n     * Deprecated field can annotated with '@Deprecated ',\n     * you can also use the comment doc '@deprecated'\n     * @deprecated It's a secret\n     */\n    @Deprecated\n    private int field5;\n\n    /**\n     * If you use javax.validation\n     * You can use @notblank / @notnull to indicate that the field must be\n     */\n    @NotBlank\n    @NotNull\n    private String field6;\n\n    ...\n}\n"
        }
      ]
    }
  ],
  "config": [
    {
      "title": "Configuration Overview",
      "content": "This guide explains how to configure the plugin to match your needs. The plugin is designed with a configuration optional approach, allowing immediate use while providing extensive customization options when needed.",
      "url": "/setting/index.html",
      "children": [
        {
          "title": "Zero configuration, out of the box",
          "url": "/setting/index.html#zero-configuration,-out-of-the-box",
          "content": "Zero configuration, out of the boxOnce the plugin is installed, it can be used without any additional configuration. In general, if any information needs to be provided during the API export, the plugin will prompt a window for you to fill in as required.\n"
        },
        {
          "title": "Additional configuration options",
          "url": "/setting/index.html#additional-configuration-options",
          "content": "Additional configuration options\nSetting in IDEA\n\nQuick configuration through the IDE interface for adjusting common plugin behaviors and preferences.\n\n\n\nConfiguration file in project\n\nAdvanced configuration through project-level files for teams requiring specific code style rules and custom behaviors.\n\n\n"
        }
      ]
    },
    {
      "title": "IDE Settings (Global)",
      "content": "Navigate to: Preferences(Settings) > Other Settings > EasyApi",
      "url": "/setting/ide-setting.html",
      "children": [
        {
          "title": "General Settings",
          "url": "/setting/ide-setting.html#general-settings",
          "content": "General Settings"
        },
        {
          "title": "Common",
          "url": "/setting/ide-setting.html#general-settings-common",
          "content": "Commonlog: Controls the verbosity of logging output\n\nSet to \"high\" for normal operation (less output)\nSet to \"low\" when troubleshooting issues (more detailed information)\n\n\n"
        },
        {
          "title": "Support",
          "url": "/setting/ide-setting.html#general-settings-support",
          "content": "SupportmethodDoc: When enabled, allows:\n\nExport of method documentation\nExport of RPC documentation\nCurrently supports export to markdown format only\n\n\n"
        },
        {
          "title": "Postman",
          "url": "/setting/ide-setting.html#general-settings-postman",
          "content": "Postmantoken: Required for Postman API integration\n\nObtain your token from Postman Integrations Dashboard\nUsed for API calls to Postman services\n\n\n"
        },
        {
          "title": "Markdown",
          "url": "/setting/ide-setting.html#general-settings-markdown",
          "content": "MarkdownoutputDemo: When enabled, generates example response data for each API in exported markdown documents\noutputCharset: Specify the character encoding for generated markdown documents\n"
        },
        {
          "title": "Cache",
          "url": "/setting/ide-setting.html#general-settings-cache",
          "content": "Cacheglobal: Cache across all projects\nproject: Project-specific caches\n"
        },
        {
          "title": "Intelligent",
          "url": "/setting/ide-setting.html#general-settings-intelligent",
          "content": "IntelligentinferEnable: Enables smart type inference when encountering uncertain method return types (e.g., Object,\nSome)\nmaxDeep: Sets the recursion limit for type inference\ngetter as field: Treats getter methods as JSON fields in processing\nsetter as Field: Treats setter methods as JSON fields in processing\nuse recommend config: Enables built-in recommended settings\n"
        },
        {
          "title": "Built-in Recommended Configuration",
          "url": "/setting/ide-setting.html#built-in-recommended-configuration",
          "content": "Built-in Recommended ConfigurationSelect desired configurations by checking the corresponding options\nView the source code of built-in\nrecommendations: GitHub Repository\n"
        }
      ]
    },
    {
      "title": "Use config file (current project)",
      "content": "Add the configuration files to the root of the project or module\n\n\nfile\ntype\neffect operations\n\n\n\n\n.easy.api.config\nproperty\nmarkdown/postman\n\n\n.easy.api.yml/.easy.api.yaml\nyml\nmarkdown/postman\n\n\n.postman.config\nproperty\npostman\n\n\n.postman.yml/.postman.yaml\nyml\npostman\n\n\nYou can use the properties.additional field in the configuration file to load additional configuration files:\nproperties.additional=$additional_properties_file_path$",
      "url": "/setting/local-file-config.html",
      "children": [
        {
          "title": "The directory structure after configuration is as follows:",
          "url": "/setting/local-file-config.html#the-directory-structure-after-configuration-is-as-follows",
          "content": "The directory structure after configuration is as follows:project-root├── java(module1)\n│   ├── common.iml\n│   ├── pom.xml\n│   ├── src\n│   │   ├── main\n│   │   │   ├── java\n│   │   │   │   └── com\n│   │   │   │       └── **\n│   │   │   │           └── **\n│   │   │   │               └── **\n│   │   │   │                   └── **.java\n│   │   │   └── resources\n│   │   └── test\n│   │       └── java\n│   └────.easy.api.config①\n├── kotlin(module2)\n│   ├── kotlin-demo.iml\n│   ├── pom.xml\n│   ├── src\n│   │   ├── main\n│   │   │   ├── kotlin\n│   │   │   │   └── com\n│   │   │   │       └── **\n│   │   │   │           └── **\n│   │   │   │               └── **\n│   │   │   │                   └── **\n│   │   │   │                       └── **.kt\n│   │   │   └── resources\n│   │   │       ├── application.yaml②\n│   │   │       ├── static\n│   │   │       └── templates\n│   │   └── test\n│   │       └── kotlin\n│   └────.easy.api.yml③\n├── springboot-demo(module3)\n│   ├── pom.xml\n│   ├── springboot-demo.iml\n│   └── src\n│       ├── main\n│       │   ├── java\n│       │   │   └── com\n│       │   │       └── **\n│       │   │           └── **\n│       │   │               └── **\n│       │   │                   └── **\n│       │   │                       └── **\n│       │   │                           └── **.java\n│       │   └── resources\n│       │       ├── application.properties④\n│       │       ├── static\n│       │       └── templates\n│       └── test\n├── springboot-webflux-demo(module4)\n│   ├── pom.xml\n│   ├── springboot-webflux-demo.iml\n│   └── src\n│       ├── main\n│       │   ├── java\n│       │   │   └── **\n│       │   │       └── **\n│       │   │           └── **\n│       │   │               └── **\n│       │   │                   └── **\n│       │   │                       └── **.java\n│       │   └── resources\n│       │       └── application.yml⑤\n│       └── test\n└────.easy.api.config⑥\n"
        },
        {
          "title": "In the directory structure:",
          "url": "/setting/local-file-config.html#in-the-directory-structure",
          "content": "In the directory structure:①: Only affects java(module1).\n②: If the default recommended configuration is enabled, it will be loaded by default, so the property in it can be used through {property} in ③.\n③: Only affects kotlin(module2).\n④/⑤: application.properties/application.yml/application.yaml can also be loaded as ②.\n⑥: Affects java(module1)/kotlin(module2)/springboot-demo(module3)/springboot-webflux-demo(module4).\n"
        }
      ]
    },
    {
      "title": "Configuration of postman",
      "content": "\nIf the token of postman is required during export, an input will be provided in a pop-up window.\n\n\nAlternatively, it can be manually configured in Postman under Preferences(Settings) > Other Settings > EasyApi.\n\n\nThe token of postman refers to Postman API keys, which are used to authorize your requests to the Postman API. It can be generated from the Postman Integrations Dashboard.\n\n",
      "url": "/setting/postman.html",
      "children": []
    },
    {
      "title": "Supported rulesSupported Simple ConfigurationsSupported CallbacksSimple rulesAdvanced script rules",
      "content": "\n\n    key\ntarget(context)\nversion\ndesc\n\n\n\n\n    module\nclass\nv0.7.2+\ngroup api\n\n\n    ignore\nclass/method\nv0.7.2+\nignore API\n\n\n    json.rule.field.name\nfield\nv0.7.2+\nSet the output field name(while the field name used in JSON is inconsistent with the field name in the class)\n\n\n    json.rule.field.ignore\nfield\nv0.7.2+\nIgnore fields (the field will be skipped from the serialized output)\n\n\n☆json.rule.convert\n-\nv0.7.2+\nMark some type conversions to other type processing, usually when spring's custom type converter is used\n\n\n    json.rule.enum.convert\nclass\nv1.2.0+\nSpecial conversion for enumeration types\n\n\n☆doc.field\nfield\nv0.7.2+\nAdditional comments for fields\n\n\n    doc.method\nmethod\nv0.7.2+\nAdditional comments for method (API)\n\n\n    doc.class\nclass\nv1.3.0+\nAdditional comments for class\n\n\n    doc.param\narg\nv1.3.0+\nAdditional comments for parameter\n\n\n    param.required\narg\nv0.7.3+\nWhether the API parameter is required (NotNull)\n\n\n    param.ignore\narg\nv1.3.0+\nIgnore API parameter\n\n\n    param.default.value\narg\nv1.3.0+\nDefault value for API parameter\n\n\n    method.additional.header\nmethod\nv1.3.0+\nAPI requires additional headers\n\n\n\n\n\n{name: \"header name\",value: \"\",desc: \"\",required:false, example:\"\"}\n\n\n    method.additional.param\nmethod\nv1.3.0+\nAPI requires additional parameters\n\n\n\n\n\n{name: \"param name\",value: \"defaultValue\",desc: \"\",required:false}\n\n\n    method.additional.response.header\nmethod\nv1.3.0+\nAPI response contains additional headers\n\n\n\n\n\n{name: \"header name\",value: \"\",desc: \"\",required:false, example:\"\"}\n\n\n    field.required\nfield\nv0.7.3+\nWhether the field is required (NotNull)\n\n\n    field.default.value\n-\nv1.7.1+\nThe default value of a field\n\n\n    mdoc.class.filter\nclass\nv0.9.5+\nFilter classes which can export method documents(rpc)\n\n\n    mdoc.method.filter\nmethod\nv0.9.5+\nFilter methods which can export method documents(rpc)\n\n\n    class.prefix.path\nclass\nv1.3.0+\nSet base path for APIs in the class\n\n\n    constant.field.ignore\nfield\nv1.3.8+\nignore constant field\n\n\n☆method.return.main\nmethod\nv1.3.8+\nThe core body of the return value\n\n\n☆method.return\nmethod\nv1.6.1+\nThe type of return value\n\n\n    api.name\nmethod\nv1.4.1+\nthe name of api\n\n\n    method.default.http.method\nmethod\nv1.4.2+\nthe default httpmethod of the API\n\n\n    postman.host\nclass\nv1.5.2+\nSet the host of API (for 'postman' only)\n\n\nSimple configurations without context\n\n    key\ntarget(context)\nversion\ndesc\n\n\n\n\n    dev\nv2.2.1+\nbool\nEnables development mode, providing more detailed logs.\n\n\n    max.deep\nv2.3.6+\nint\nSets the maximum depth for json parsing, default is 6.\n\n\n    max.elements\nv2.3.6+\nint\nSets the maximum field count for json parsing, default is 256.\n\n\n    json.cache.disable\nv2.1.0+\nbool\nDisables json parsing cache.\n\n\n    http.timeOut\nv2.1.0+\nint\nSets the http request timeout (s), prioritized over setting.\n\n\n    ignore_static_and_final_field\nv2.1.0+\nbool\nBy default, the plugin ignores static final fields. Set to false to change this behavior.\n\n\n    ignore_irregular_api_method\nv2.5.4+\nbool\nBy default, the plugin ignores API methods with names matching basic Object method names. Set to false to change this behavior.\n\n\n    doc.source.disable\nv2.5.5+\nbool\nSet to true to prevent the plugin from reading comments.\n\n\nSome callback methods might not have it, but additional context may be available for use.\n\n    key\ntarget(context)\nversion\ndesc\n\n\n\n\n    api.class.parse.before\nclass\nNone\nv2.2.8+\n\n\n    api.class.parse.after\nclass\nNone\nv2.2.8+\n\n\n    api.method.parse.before\nmethod\nNone\nv2.2.8+\n\n\n    api.method.parse.after\nmethod\nNone\nv2.2.8+\n\n\n    api.param.parse.before\nparam\nNone\nv2.2.8+\n\n\n    api.param.parse.after\nparam\nNone\nv2.2.8+\n\n\n    export.after\nmethod\napi\nv2.0.1+\n\n\n    http.call.before\nNone\nrequest\nv1.9.0+\n\n\n    http.call.after\nNone\nrequest, response\nv1.9.0+\n\n\n    json.class.parse.before\nclass\nNone\nv2.2.8+\n\n\n    json.class.parse.after\nclass\nNone\nv2.2.8+\n\n\n    json.field.parse.before\nfield\nNone\nv2.2.8+\n\n\n    json.field.parse.after\nfield\nNone\nv2.2.8+\n\n\n\n# Read tag on comment\n\nFor example, #fake corresponds to the following comment:\n\n/**\n * @fake\n */\n\n\n\n@ Read annotation\n\n@xxx Read annotations on methods or fields\n\n@RequestMapping(\"path\")\npublic class FakeClass{...}\n\n\n@xxx#yyy Read attr value in annotation on method or field\n\n@RequestMapping(value = \"path\")\npublic class FakeClass{...}\n\n\n\ngroovy rule: groovy:groovyScript\n\n\njs rule: js:jsScript\n\nIt is recommended to use groovy as the first choice because the JS engine may be missing after jdk11.\n\n\n\nTools / objects are available in scripts: tools\n\n\nDebug Script : Deubg\n\n",
      "url": "/setting/config-rule.html",
      "children": []
    },
    {
      "title": "api.name",
      "content": "Set the API name\nBy default, the first line of the API comment will be used as the name of the API\n",
      "url": "/setting/rules/api_name.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/api_name.html#demo",
          "content": "demoConfiguration like this:# read api name from tag `api.name`api.name=#api.name\nUsage:/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * @api.name Mock String\n    * @undone\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n"
        }
      ]
    },
    {
      "title": "class.doc(doc.class)",
      "content": "Additional comments on the class\n",
      "url": "/setting/rules/class_doc.html",
      "children": [
        {
          "title": "Adding support for Swagger @Api",
          "url": "/setting/rules/class_doc.html#adding-support-for-swagger-api",
          "content": "Adding support for Swagger @Apiclass.doc=@io.swagger.annotations.Api#value"
        },
        {
          "title": "demo",
          "url": "/setting/rules/class_doc.html#demo",
          "content": "demo@Api(value = \"mock api tools\", @RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "class.is.ctrl",
      "content": "By default, only classes annotated with org.springframework.stereotype.Controller or org.springframework.web.bind.annotation.RestController will be exported as api.\nWhen there is a need to export api from classes that are not annotated with org.springframework.stereotype.Controller or org.springframework.web.bind.annotation.RestController, you can configure this rule.\n",
      "url": "/setting/rules/class_is_ctrl.html",
      "children": [
        {
          "title": "Allowing export of api from all classes",
          "url": "/setting/rules/class_is_ctrl.html#allowing-export-of-api-from-all-classes",
          "content": "Allowing export of api from all classesYou can configure:\nclass.is.ctrl=true"
        },
        {
          "title": "Allowing export of api from classes annotated with ctrl comment",
          "url": "/setting/rules/class_is_ctrl.html#allowing-export-of-api-from-classes-annotated-with-ctrl-comment",
          "content": "Allowing export of api from classes annotated with ctrl commentIf configuring to export api from all classes causes lag, and you want to control which classes include api using the @ctrl comment, you can configure:\nclass.is.ctrl=#ctrlDemo/** * @ctrl\n */\n@RequestMapping(\"/base\")\npublic interface BaseController {\n\n   /**\n    * Current controller name\n    *\n    * @public\n    */\n   @RequestMapping(\"/ctrl/name\")\n   String ctrlName();\n}\n"
        }
      ]
    },
    {
      "title": "postman.testclass.postman.testcollection.postman.test",
      "content": "Set test for the postman API.\nMultiple rules are allowed.\n\nSet test for the folder on the class.\n\n\nMultiple rules are allowed.\n\n\nThe context is class.\n\n\nSet test for the collection.\n\n\nMultiple rules are allowed.\n\n\nNote that collection.postman.test does not have a context, meaning it is null.\n\n",
      "url": "/setting/rules/postman_test.html",
      "children": [
        {
          "title": "Example of a fixed test configuration",
          "url": "/setting/rules/postman_test.html#example-of-a-fixed-test-configuration",
          "content": "Example of a fixed test configurationpostman.test=```pm.test(\"Body is correct\", function () {\n    pm.response.to.have.body(\"response_body_string\");\n});\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\npm.test(\"Status code name has string\", function () {\n    pm.response.to.have.status(\"Created\");\n});\nvar jsonObject = xml2Json(responseBody);\nvar schema = {\n  \"items\": {\n    \"type\": \"boolean\"\n  }\n};\n\nvar data1 = [true, false];\nvar data2 = [true, 123];\n\npm.test('Schema is valid', function() {\n  pm.expect(tv4.validate(data1, schema)).to.be.true;\n  pm.expect(tv4.validate(data2, schema)).to.be.true;\n});\n```\n"
        },
        {
          "title": "Set test for APIs with specified annotation",
          "url": "/setting/rules/postman_test.html#set-test-for-apis-with-specified-annotation",
          "content": "Set test for APIs with specified annotationpostman.test[@com.itangcent.common.annotation.RequiredLogin]=```pm.test(\"Body is correct\", function () {\n    pm.response.to.have.body(\"response_body_string\");\n});\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\npm.test(\"Status code name has string\", function () {\n    pm.response.to.have.status(\"Created\");\n});\nvar jsonObject = xml2Json(responseBody);\nvar schema = {\n  \"items\": {\n    \"type\": \"boolean\"\n  }\n};\n\nvar data1 = [true, false];\nvar data2 = [true, 123];\n\npm.test('Schema is valid', function() {\n  pm.expect(tv4.validate(data1, schema)).to.be.true;\n  pm.expect(tv4.validate(data2, schema)).to.be.true;\n});\n```\n"
        },
        {
          "title": "Set test for APIs without specified annotation",
          "url": "/setting/rules/postman_test.html#set-test-for-apis-without-specified-annotation",
          "content": "Set test for APIs without specified annotationpostman.test[!@com.itangcent.common.annotation.Public]=```pm.test(\"Body is correct\", function () {\n    pm.response.to.have.body(\"response_body_string\");\n});\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\npm.test(\"Status code name has string\", function () {\n    pm.response.to.have.status(\"Created\");\n});\nvar jsonObject = xml2Json(responseBody);\nvar schema = {\n  \"items\": {\n    \"type\": \"boolean\"\n  }\n};\n\nvar data1 = [true, false];\nvar data2 = [true, 123];\n\npm.test('Schema is valid', function() {\n  pm.expect(tv4.validate(data1, schema)).to.be.true;\n  pm.expect(tv4.validate(data2, schema)).to.be.true;\n});\n```\n"
        },
        {
          "title": "Provide multiple test in the configuration and choose which one to use based on code comments",
          "url": "/setting/rules/postman_test.html#provide-multiple-test-in-the-configuration-and-choose-which-one-to-use-based-on-code-comments",
          "content": "Provide multiple test in the configuration and choose which one to use based on code commentspostman.test.groupA=```pm.test(\"Body is correct\", function () {    pm.response.to.have.body(\"response_body_string\");\n});\n```\npostman.test.groupB=```\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\n```\npostman.test.groupC=```\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\n```\npostman.test.groupD=```\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\n```\npostman.test[#test]=groovy:config.get(\"postman.test.\"+it.doc(\"test\"))\nUsage:/**  * Get a list of users\n  *\n  * @param type User type {@link com.itangcent.common.constant.UserType}\n  * @test groupA\n  */\n@RequestMapping(value = \"/list\", method = RequestMethod.GET)\npublic IResult list(Integer type) {\n    ...\n    return Result.success(Collections.singletonList(userInfo));\n}\n"
        }
      ]
    },
    {
      "title": "postman.prerequestclass.postman.prerequestcollection.postman.prerequest",
      "content": "\nUsed to set the prerequest for the postman API\n\n\nYou can configure multiple rules for the prerequest\n\n\nSet prerequest on the folder using pre-request scripts.\n\n\nMultiple rules can be set.\n\n\nThe context is class.\n\n\nSet prerequest on the collection using pre-request scripts.\n\n\nMultiple rules can be set.\n\n\nNote that collection.postman.prerequest has no context, meaning it is null.\n\n",
      "url": "/setting/rules/postman_prerequest.html",
      "children": [
        {
          "title": "Example of fixed prerequest configuration",
          "url": "/setting/rules/postman_prerequest.html#example-of-fixed-prerequest-configuration",
          "content": "Example of fixed prerequest configurationpostman.prerequest=```pm.environment.get(\"variable_key\");\npm.globals.get(\"variable_key\");\npm.variables.get(\"variable_key\");\npm.environment.set(\"variable_key\", \"variable_value\");\npm.globals.set(\"variable_key\", \"variable_value\");\npm.environment.unset(\"variable_key\");\npm.globals.unset(\"variable_key\");\npm.sendRequest(\"https://postman-echo.com/get\", function (err, response) {\n    console.log(response.json());\n});\n```\n"
        },
        {
          "title": "Adding prerequest to APIs with specific annotations",
          "url": "/setting/rules/postman_prerequest.html#adding-prerequest-to-apis-with-specific-annotations",
          "content": "Adding prerequest to APIs with specific annotationspostman.prerequest[@com.itangcent.common.annotation.RequiredLogin]=```pm.environment.get(\"variable_key\");\npm.globals.get(\"variable_key\");\npm.variables.get(\"variable_key\");\npm.environment.set(\"variable_key\", \"variable_value\");\npm.globals.set(\"variable_key\", \"variable_value\");\npm.environment.unset(\"variable_key\");\npm.globals.unset(\"variable_key\");\npm.sendRequest(\"https://postman-echo.com/get\", function (err, response) {\n    console.log(response.json());\n});\n```\n"
        },
        {
          "title": "Adding prerequest to APIs without specific annotations",
          "url": "/setting/rules/postman_prerequest.html#adding-prerequest-to-apis-without-specific-annotations",
          "content": "Adding prerequest to APIs without specific annotationspostman.prerequest[!@com.itangcent.common.annotation.Public]=```pm.environment.get(\"variable_key\");\npm.globals.get(\"variable_key\");\npm.variables.get(\"variable_key\");\npm.environment.set(\"variable_key\", \"variable_value\");\npm.globals.set(\"variable_key\", \"variable_value\");\npm.environment.unset(\"variable_key\");\npm.globals.unset(\"variable_key\");\npm.sendRequest(\"https://postman-echo.com/get\", function (err, response) {\n    console.log(response.json());\n});\n```\n"
        },
        {
          "title": "Providing multiple prerequest in the configuration, selecting which one to use with code comments",
          "url": "/setting/rules/postman_prerequest.html#providing-multiple-prerequest-in-the-configuration,-selecting-which-one-to-use-with-code-comments",
          "content": "Providing multiple prerequest in the configuration, selecting which one to use with code commentspostman.prerequest.groupA=```pm.environment.get(\"variable_key\");\n```\npostman.prerequest.groupB=```\npm.globals.get(\"variable_key\");\n```\npostman.prerequest.groupC=```\npm.environment.set(\"variable_key\", \"variable_value\");\n```\npostman.prerequest.groupD=```\npm.globals.set(\"variable_key\", \"variable_value\");\n```\npostman.prerequest[#prerequest]=groovy:config.get(\"postman.prerequest.\"+it.doc(\"prerequest\"))\nUsage:/**  * Get the user list\n  *\n  * @param type User type {@link com.itangcent.common.constant.UserType}\n  * @prerequest groupA\n  */\n@RequestMapping(value = \"/list\", method = RequestMethod.GET)\npublic IResult list(Integer type) {\n    ...\n    return Result.success(Collections.singletonList(userInfo));\n}\n"
        }
      ]
    },
    {
      "title": "class.prefix.path",
      "content": "Set API prefix path\n",
      "url": "/setting/rules/class_prefix_path.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/class_prefix_path.html#built-in-recommended-configuration",
          "content": "Built-in recommended configuration#Resolve spring properties###set ignoreUnresolved = true\nclass.prefix.path=${server.servlet.context-path}\n###set ignoreUnresolved = false\n"
        },
        {
          "title": "By the recommended configuration, The following spring configuration server.servlet.context-path will be used as API prefix path.",
          "url": "/setting/rules/class_prefix_path.html#by-the-recommended-configuration,-the-following-spring-configuration-server.servlet.context-path-will-be-used-as-api-prefix-path.",
          "content": "By the recommended configuration, The following spring configuration server.servlet.context-path will be used as API prefix path.spring application.properties\nserver.servlet.context-path=/demospring application.yaml/application.yml\nserver:  servlet:\n      context-path: /demo\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/class_prefix_path.html#demo",
          "content": "democlass.prefix.path=/demo"
        }
      ]
    },
    {
      "title": "constant.field.ignore",
      "content": "Ignore constant fields\n",
      "url": "/setting/rules/constant_field_ignore.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/constant_field_ignore.html#built-in-recommended-configuration",
          "content": "Built-in recommended configuration#ignore serialVersionUIDconstant.field.ignore=serialVersionUID\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/constant_field_ignore.html#demo",
          "content": "demo/**\n * User type\n */\npublic class UserTypeConstant implements Serializable {\n\n    private static final long serialVersionUID = -4607862808303533196L;\n\n    public static final int ADMIN = 1;//Admin\n    public static final int MEMBER = 2;//Member\n    public static final int GUEST = 3;//Guest\n\n}\n"
        },
        {
          "title": "For the following annotations:",
          "url": "/setting/rules/constant_field_ignore.html#for-the-following-annotations",
          "content": "For the following annotations:@see com.itangcent.common.constant.UserTypeConstantor{@link com.itangcent.common.constant.UserTypeConstant}"
        },
        {
          "title": "They will be parsed as:",
          "url": "/setting/rules/constant_field_ignore.html#they-will-be-parsed-as",
          "content": "They will be parsed as:1 :Admin 2 :Member 3 :Guest"
        }
      ]
    },
    {
      "title": "enum.use.custom",
      "content": "Used to set the default value field when using @see enum types\n",
      "url": "/setting/rules/enum_use_custom.html",
      "children": [
        {
          "title": "Example",
          "url": "/setting/rules/enum_use_custom.html#example",
          "content": "ExampleAssuming the following enum classpublic enum UserType {    // Administrator\n    ADMIN(1, \"Administrator\"),\n\n    // Member\n    MEMBER(2, \"Member\"),\n\n    // Guest\n    GUEST(3, \"Guest\");\n\n    private int code;\n    private String desc;\n\n    public int getCode() {\n        return code;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int code, String desc) {\n        this.code = code;\n        this.desc = desc;\n    }\n}\nFor the following field/*** User type\n*\n* @see UserType\n*/\nprivate int type;\n"
        },
        {
          "title": "Default behavior",
          "url": "/setting/rules/enum_use_custom.html#default-behavior",
          "content": "Default behaviorSince UserType does not have a field named type, the @see UserType will be ignored in the default case.\n"
        },
        {
          "title": "Adding configuration",
          "url": "/setting/rules/enum_use_custom.html#adding-configuration",
          "content": "Adding configurationTo set the code field as the default value for @see UserType, add the following configuration:\nenum.use.custom[com.itangcent.common.constant.UserType]=codeThis will make the @see UserType use the code field as the default value.\n/*** User type\n* @see UserType#code\n*/\nprivate int type;\nThe API result will be:\n\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\ntype\ninteger\nNot Required\n\nUser Type\nEnum: 1,2,3Enum Remark: 1 : Administrator 2 : Member 3 : GuestMock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "Unified handling",
          "url": "/setting/rules/enum_use_custom.html#unified-handling",
          "content": "Unified handlingFor special cases, declare the following interface:\npackage com.itangcent.common.constant;\npublic interface BaseEnum {\n\n    Long getCode();\n}\nModify UserType to inherit BaseEnum:\npublic enum UserType implements BaseEnum {    ...\n}\nThen, you can configure the following to set the code field as the default value for all classes that inherit BaseEnum:\nenum.use.custom[groovy:it.isExtend(\"com.itangcent.common.constant.BaseEnum\")]=code"
        }
      ]
    },
    {
      "title": "enum.use.by.type",
      "content": "By default, fields with the same type will be used for enums. This has lower priority than enum.use.custom.\nAssuming the following enum class:public enum UserType {    // Administrator\n    ADMIN(1, \"Administrator\"),\n\n    // Member\n    MEMBER(2, \"Member\"),\n\n    // Guest\n    GUEST(3, \"Guest\");\n\n    private int code;\n    private String desc;\n\n    public int getCode() {\n        return code;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int code, String desc) {\n        this.code = code;\n        this.desc = desc;\n    }\n}\nFor the following field:/*** User type\n*\n* @see UserType\n*/\nprivate int type;\nRecommended configuration:enum.use.by.type=trueThe above comment will be processed as:\n/*** User type\n* @see UserType#code\n*/\nprivate int type;\nThe exported API result will be:\n\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\ntype\ninteger\nNO\n\nUser type\nEnum: 1,2,3Enum Remarks: 1: Administrator, 2: Member, 3: GuestMock: @pick([1,2,3])\n\n\n",
      "url": "/setting/rules/enum_use_by_type.html",
      "children": []
    },
    {
      "title": "enum.use.ordinal",
      "content": "Used to set ordinal as the default value when using @see with enum types.This setting has lower priority than enum.use.custom](enum_use_custom.md) and enum.use.by.type. Therefore, to use enum.use.ordinal, you need to first disable enum.use.by.type in the recommended configuration.Assuming the following enum class existspublic enum UserType {    // Administrator\n    ADMIN(1, \"Administrator\"),\n\n    // Member\n    MEMBER(2, \"Member\"),\n\n    // Guest\n    GUEST(3, \"Guest\");\n\n    private int code;\n    private String desc;\n\n    public int getCode() {\n        return code;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int code, String desc) {\n        this.code = code;\n        this.desc = desc;\n    }\n}\nFor the following field:/*** User type\n*\n* @see UserType\n*/\nprivate int type;\n",
      "url": "/setting/rules/enum_use_ordinal.html",
      "children": [
        {
          "title": "Default Case",
          "url": "/setting/rules/enum_use_ordinal.html#default-case",
          "content": "Default CaseSince the UserType class does not have a type field, by default, the @see UserType in this case will be ignored.\n"
        },
        {
          "title": "Adding Configuration",
          "url": "/setting/rules/enum_use_ordinal.html#adding-configuration",
          "content": "Adding Configuration\nConfigure the default value for @see UserType to use the ordinal field:\nenum.use.ordinal[com.itangcent.common.constant.UserType]=trueWith this configuration, the above comment will be equivalent to:\n\n/*** User type\n* @see UserType#ordinal()\n*/\nprivate int type;\nThe exported API result would be:\n\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\ntype\ninteger\noptional\n\nUser type\nEnum: 0, 1, 2Enum Remarks: 0: Administrator, 1: Member, 2: GuestMock: @pick([0, 1, 2])\n\n\n"
        },
        {
          "title": "Unified Handling",
          "url": "/setting/rules/enum_use_ordinal.html#unified-handling",
          "content": "Unified HandlingDeclare the following interface:\npackage com.itangcent.common.constant;\npublic interface BaseEnum {\n}\nModify the UserType class to implement the BaseEnum interface:\npublic enum UserType implements BaseEnum {    ...\n}\nWith this, you can configure all classes that implement BaseEnum to use the ordinal as the default value:\nenum.use.ordinal[groovy:it.isExtend(\"com.itangcent.common.constant.BaseEnum\")]=true"
        },
        {
          "title": "Defaulting to use ordinal for all @see with enum types in the entire project",
          "url": "/setting/rules/enum_use_ordinal.html#defaulting-to-use-ordinal-for-all-see-with-enum-types-in-the-entire-project",
          "content": "Defaulting to use ordinal for all @see with enum types in the entire projectenum.use.ordinal=true"
        }
      ]
    },
    {
      "title": "enum.use.name",
      "content": "Used to set name as the value when using @see with enum types.This setting has lower priority than enum.use.custom and enum.use.by.type. Therefore, to use enum.use.name, you need to first disable enum.use.by.type in the recommended configuration.Assuming the following enum class existspublic enum UserType {    // Administrator\n    ADMIN(1, \"Administrator\"),\n\n    // Member\n    MEMBER(2, \"Member\"),\n\n    // Guest\n    GUEST(3, \"Guest\");\n\n    private int code;\n    private String desc;\n\n    public int getCode() {\n        return code;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int code, String desc) {\n        this.code = code;\n        this.desc = desc;\n    }\n}\nFor the following field:/*** User type\n*\n* @see UserType\n*/\nprivate int type;\n",
      "url": "/setting/rules/enum_use_name.html",
      "children": [
        {
          "title": "Default Case",
          "url": "/setting/rules/enum_use_name.html#default-case",
          "content": "Default CaseSince the UserType class does not have a type field, by default, the @see UserType in this case will be ignored.\n"
        },
        {
          "title": "Adding Configuration",
          "url": "/setting/rules/enum_use_name.html#adding-configuration",
          "content": "Adding ConfigurationConfigure the default value for @see UserType to use the name field:\nenum.use.name[com.itangcent.common.constant.UserType]=trueWith this configuration, the above comment will be equivalent to:\n/*** User type\n* @see UserType#name()\n*/\nprivate String type;\nThe exported API result would be:\n\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\ntype\nstring\nOptional\n\nUser type\nEnum: ADMIN, MEMBER, GUESTEnum Remarks: ADMIN: Administrator, MEMBER: Member, GUEST: GuestMock: @pick([ADMIN,MEMBER,GUEST])\n\n\n"
        },
        {
          "title": "Unified Handling",
          "url": "/setting/rules/enum_use_name.html#unified-handling",
          "content": "Unified HandlingDeclare the following interface:\npackage com.itangcent.common.constant;\npublic interface BaseEnum {\n}\nModify the UserType class to implement the BaseEnum interface:\npublic enum UserType implements BaseEnum {    ...\n}\nWith this, you can configure all classes that implement BaseEnum to use the name field as the default value:\nenum.use.name[groovy:it.isExtend(\"com.itangcent.common.constant.BaseEnum\")]=true"
        },
        {
          "title": "Defaulting to use name for all @see with enum types in the entire project",
          "url": "/setting/rules/enum_use_name.html#defaulting-to-use-name-for-all-see-with-enum-types-in-the-entire-project",
          "content": "Defaulting to use name for all @see with enum types in the entire projectenum.use.name=true"
        }
      ]
    },
    {
      "title": "field.default.value(v1.7.1+)",
      "content": "use to set default value of field\n",
      "url": "/setting/rules/field_default_value.html",
      "children": [
        {
          "title": "By default",
          "url": "/setting/rules/field_default_value.html#by-default",
          "content": "By defaultThe default initial value of fielde.g.:private Integer code = 200;//default 200"
        },
        {
          "title": "Additional configuration",
          "url": "/setting/rules/field_default_value.html#additional-configuration",
          "content": "Additional configurationConfiguration:field.default.value=#defaultDemoDto.javapublic class DemoDto{\n    /**\n     * price of demo\n     * @default 666\n     */\n    @NotNull\n    private Float price;\n\n    ...\n}\nExport as API response:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\nprice\nnumber\nYES\n666\nprice\n\n\n\n"
        }
      ]
    },
    {
      "title": "field.demo",
      "content": "Field example information, used in multiple places for displaying JSON in markdown/postman\n",
      "url": "/setting/rules/field_demo.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/field_demo.html#demo",
          "content": "demoConfiguration is as follows:field.demo=#demoUsage is as follows:    /**     * @demo tangcent\n     */\n    private String name;//user name\n"
        },
        {
          "title": "Configuring demo rules based on field name and type characteristics",
          "url": "/setting/rules/field_demo.html#configuring-demo-rules-based-on-field-name-and-type-characteristics",
          "content": "Configuring demo rules based on field name and type characteristicsConfiguration is slightly difficult, but non-intrusive.\nVery suitable for projects with well-defined field names.\nThe configuration is done using the following format: field.demo[field:path|type]=xxx, as shown in the example below.\n#Common response mocksfield.demo[field:c|int]=0\nfield.demo[field:code|int]=0\nfield.demo[field:status|int]=0\nfield.demo[field:ok|boolean]=true\nfield.demo[field:success|boolean]=true\nfield.demo[field:m|string]=ok\nfield.demo[field:msg|string]=ok\nfield.demo[field:message|string]=ok\nfield.demo[field:errMsg|string]=failed\n\n#Common pagination mocks\nfield.demo[field:*.p|int]=2\nfield.demo[field:*.l|int]=100\nfield.demo[field:*.t|int]=1000\nfield.demo[field:*.offset|int]=50\nfield.demo[field:*.page|int]=2\nfield.demo[field:*.pageIndex|int]=2\nfield.demo[field:*.pageSize|int]=100\nfield.demo[field:*.limit|int]=100\nfield.demo[field:*.total|int]=1000\n\n# The xxxTime mocks for integers are represented as timestamps.\nfield.demo[field:*Time|int]=1681649569869\n\n#Sex&Gender\nfield.demo[field:*.sex|int]=1\nfield.demo[field:*.sex|string]=Male\nfield.demo[field:*.gender|int]=1\nfield.demo[field:*.gender|string]=Female\n\n#User Info\nfield.demo[field:*.name|string]=tangcent\nfield.demo[field:*.age|int]=18\nfield.demo[field:*.phone|string]=18888888888\nfield.demo[field:*.mobile|string]=18888888888\nfield.demo[field:*Phone|string]=18888888888\nfield.demo[field:*Mobile|string]=18888888888\n\n#links\nfield.demo[field:*.url|string]=https://github.com/\nfield.demo[field:*.link|string]=https://github.com/\nfield.demo[field:*.linkUrl|string]=https://github.com/\nfield.demo[field:*Link|string]=https://github.com/\n\n# Integer and number are more natural\nfield.demo[field:*Type|int]=1\nfield.demo[field:*Status|int]=1\nfield.demo[field:*.type|int]=1\nfield.demo[field:*.status|int]=1\nfield.demo[field:*|int]=9999\nfield.demo[field:*|number]=9999.99\n"
        }
      ]
    },
    {
      "title": "field.doc(doc.field)",
      "content": "Additional documents for the field\n",
      "url": "/setting/rules/field_doc.html",
      "children": [
        {
          "title": "Default Recommended Configuration",
          "url": "/setting/rules/field_doc.html#default-recommended-configuration",
          "content": "Default Recommended Configuration#deprecated info(java)field.doc[#deprecated]=groovy:\"\\n「Deprecated」\" + it.doc(\"deprecated\")\nfield.doc[@java.lang.Deprecated]=「Deprecated」\n\n#deprecated info(kotlin)\nfield.doc[@kotlin.Deprecated]=groovy:\"\\n「Deprecated」\" + it.ann(\"kotlin.Deprecated\",\"message\")\n\n"
        },
        {
          "title": "Add support for swagger @ApiModelProperty",
          "url": "/setting/rules/field_doc.html#add-support-for-swagger-apimodelproperty",
          "content": "Add support for swagger @ApiModelPropertyfield.doc=@io.swagger.annotations.ApiModelProperty#value"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_doc.html#demo",
          "content": "demoSwaggerModel.javapublic class SwaggerModel {\n    /**\n     * @deprecated No longer used\n     */\n    @ApiModelProperty(value = \"Field A\", required = true)\n    private String a;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "Exported as API return value:",
          "url": "/setting/rules/field_doc.html#exported-as-api-return-value",
          "content": "Exported as API return value:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\na\nstring\nNO\n\nField A「Deprecated」No longer used\n\n\n\n"
        }
      ]
    },
    {
      "title": "field.ignore",
      "content": "Ignore fields (set certain fields not to appear in json, or not to be provided when requested)\n",
      "url": "/setting/rules/field_ignore.html",
      "children": [
        {
          "title": "Default Recommended Configuration",
          "url": "/setting/rules/field_ignore.html#default-recommended-configuration",
          "content": "Default Recommended Configuration#Support for Jackson annotationsfield.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value\n\n#Support for Gson annotations\nfield.ignore=!@com.google.gson.annotations.Expose#serialize\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_ignore.html#demo",
          "content": "demoTestJsonIgnoreBean.javapublic class TestJsonIgnoreBean {\n    @Expose(serialize = true)\n    private Long shouldNotIgnoreForGson;\n\n    @Expose(serialize = false)\n    private Long shouldIgnoreForGson;\n\n    @JsonIgnore(false)\n    private Long shouldNotIgnoreForJackson;\n\n    @JsonIgnore\n    private Long shouldIgnoreForJackson;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "Exported as API return value:",
          "url": "/setting/rules/field_ignore.html#demo-exported-as-api-return-value",
          "content": "Exported as API return value:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\nshouldNotIgnoreForGson\ninteger\nNO\n\n\nmock: @natural(0,10000)\n\n\nshouldNotIgnoreForJackson\ninteger\nNO\n\n\nmock: @natural(0,10000)\n\n\n"
        },
        {
          "title": "Customized Configuration Example",
          "url": "/setting/rules/field_ignore.html#customized-configuration-example",
          "content": "Customized Configuration Example\nIgnore fields with specified names:\n\n\nConfiguration as follows\n# ignore field 'log'\nfield.ignore=log\n\n\n\nThe following field will be ignored\nprivate String log;\n\n\n\n\n\nIgnore fields with specified types:\n\n\nConfiguration as follows\n# ignore field 'log' typed xxx.xxx.Log\nfield.ignore=groovy:it.type().name()==\"xxx.xxx.Log\"\n\n\n\nThe following field will be ignored\nprivate Log xxx;\n\n\n\n\n\nIgnore fields with specified modifier:\n\n\nConfiguration as follows\n#ignore transient field\nfield.ignore=groovy:it.hasModifier(\"transient\")||it.hasModifier(\"protected\")\n\n\n\nThe following field will be ignored\nprivate transient Int xxx;\nprotected Long yyy;\n\n\n\n\n"
        }
      ]
    },
    {
      "title": "field.name",
      "content": "The field.name property is used to set the field name for output/input purposes when the field name in JSON differs from the field name in the class.\n",
      "url": "/setting/rules/field_name.html",
      "children": [
        {
          "title": "Built-in Recommended Configuration",
          "url": "/setting/rules/field_name.html#built-in-recommended-configuration",
          "content": "Built-in Recommended Configuration#Support for Jackson annotationsfield.name=@com.fasterxml.jackson.annotation.JsonProperty#value\n\n#Support for Gson annotations\nfield.name=@com.google.gson.annotations.SerializedName#value\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_name.html#demo",
          "content": "demoTestJsonFieldBean.javapublic class TestJsonFieldBean {    @JsonProperty(\"a\")\n    private Long propertyA;\n\n    @SerializedName(\"b\")\n    private Long propertyB;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "Export as API response:",
          "url": "/setting/rules/field_name.html#demo-export-as-api-response",
          "content": "Export as API response:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\na\ninteger\noptional\n\n\nmock: @natural(0,10000)\n\n\nb\ninteger\noptional\n\n\nmock: @natural(0,10000)\n\n\n"
        }
      ]
    },
    {
      "title": "field.required",
      "content": "Used to mark whether the field is required (it cannot be empty)\n",
      "url": "/setting/rules/field_required.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/field_required.html#built-in-recommended-configuration",
          "content": "Built-in recommended configuration#Support for javax.validation annotationsfield.required=@\"javax.validation.constraints.NotBlank\nfield.required=@javax.validation.constraints.NotNull\nfield.required=@javax.validation.constraints.NotEmpty\n"
        },
        {
          "title": "Add support for swagger @ApiModelProperty",
          "url": "/setting/rules/field_required.html#add-support-for-swagger-apimodelproperty",
          "content": "Add support for swagger @ApiModelPropertyfield.required=@io.swagger.annotations.ApiModelProperty#required"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_required.html#demo",
          "content": "demoSwaggerModel.javapublic class SwaggerModel {\n    @ApiModelProperty(value = \"Field A\", required = true)\n    private String a;\n\n    public String getA() {\n        return a;\n    }\n\n    public void setA(String a) {\n        this.a = a;\n    }\n}\n"
        },
        {
          "title": "Export as API response:",
          "url": "/setting/rules/field_required.html#demo-export-as-api-response",
          "content": "Export as API response:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\na\ninteger\nYes\n\n\nmock: @natural(0,10000)\n\n\n"
        }
      ]
    },
    {
      "title": "field.order",
      "content": "Returns an int value to set the order of fields in the result.\nNote: It has a lower priority than field.order.with, and it's generally not recommended to use them at the same time.",
      "url": "/setting/rules/field_order.html",
      "children": [
        {
          "title": "Some configurations related to field.order can be found in the recommended configurations",
          "url": "/setting/rules/field_order.html#some-configurations-related-to-field.order-can-be-found-in-the-recommended-configurations",
          "content": "Some configurations related to field.order can be found in the recommended configurationsOrder by tag on fields\nfield.order=#orderSet order through JsonProperty\nfield.order=@com.fasterxml.jackson.annotation.JsonProperty#index"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_order.html#demo",
          "content": "demoSelect in the recommended configurationsfield.order=@com.fasterxml.jackson.annotation.JsonProperty#indexTestJsonFieldBean.javapublic class TestJsonFieldBean {    @JsonProperty(value = \"a\", index = 99)\n    private Long propertyA;\n\n    private Long propertyB;\n\n    @JsonProperty(value = \"c\", index = 0)\n    private Long propertyC;\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "Exported as API return value:",
          "url": "/setting/rules/field_order.html#demo-exported-as-api-return-value",
          "content": "Exported as API return value:\n\nname\ntype\n\n\n\n\nc\ninteger\n\n\npropertyB\ninteger\n\n\na\ninteger\n\n\n"
        }
      ]
    },
    {
      "title": "field.order.with",
      "content": "Similar to a comparator, it returns -1, 0, or 1 by comparing two fields to indicate the order of the two compared fields in the result.\nNote: This has a higher priority than field.order, and it's generally not recommended to use them at the same time.",
      "url": "/setting/rules/field_order_with.html",
      "children": [
        {
          "title": "Some configurations related to field.order.with can be found in the recommended configurations",
          "url": "/setting/rules/field_order_with.html#some-configurations-related-to-field.order.with-can-be-found-in-the-recommended-configurations",
          "content": "Some configurations related to field.order.with can be found in the recommended configurationsControl order through annotation JsonPropertyOrder\n#[Jackson_JsonPropertyOrder]\n#Support for Jackson annotation JsonPropertyOrder\nfield.order=@com.fasterxml.jackson.annotation.JsonProperty#index\njson.class.parse.before[@com.fasterxml.jackson.annotation.JsonPropertyOrder]=groovy:```\n    def properties = it.annValue(\"com.fasterxml.jackson.annotation.JsonPropertyOrder\")\n    properties.each { property ->\n        session.push(\"JsonPropertyOrder-properties-\"+it.name(), property)\n    }\n    session.set(\"JsonPropertyOrder-alphabetic\"+it.name(),\n        it.annValue(\"com.fasterxml.jackson.annotation.JsonPropertyOrder\",\"alphabetic\") ?: false)\n```\njson.class.parse.after[@com.fasterxml.jackson.annotation.JsonPropertyOrder]=groovy:```\n    session.remove(\"JsonPropertyOrder-properties-\"+it.name())\n    session.remove(\"JsonPropertyOrder-\"+it.name())\n```\nfield.order=groovy:```\n    def index = session.get(\"JsonPropertyOrder-properties-\"+ it.containingClass().name())?.indexOf(it.name())\n    if (index == -1) {\n        return null\n    }else{\n        return index\n    }\n```\nfield.order.with=groovy:```\n    def orderedProperties = session.get(\"JsonPropertyOrder-properties-\"+ a.containingClass().name())\n    if(a.name() in orderedProperties) {\n         if(b.name() in orderedProperties){\n             return orderedProperties.indexOf(a.name()) - orderedProperties.indexOf(b.name())\n         }else{\n             return -1\n         }\n    } else if(b.name() in orderedProperties){\n        return 1\n    } else if(session.get(\"JsonPropertyOrder-alphabetic\"+a.containingClass().name())){\n        return a.name().compareTo(b.name())\n    } else {\n        return null\n    }\n```\nSubclass fields first\n# child fields firstfield.order.with=groovy:```\n    def aDefineClass = a.defineClass()\n    def bDefineClass = b.defineClass()\n    if(aDefineClass==bDefineClass){\n        return null\n    }else if(aDefineClass.isExtend(bDefineClass.name())){\n        return -1\n    }else{\n        return 1\n    }\n```\nSuperclass fields first\n# parent fields firstfield.order.with=groovy:```\n    def aDefineClass = a.defineClass()\n    def bDefineClass = b.defineClass()\n    if(aDefineClass==bDefineClass){\n        return null\n    }else if(aDefineClass.isExtend(bDefineClass.name())){\n        return 1\n    }else{\n        return -1\n    }\n```\nAlphabetically Ascending Order\n# fields alphabetically orderedfield.order.with=groovy:```\n    return a.name().compareTo(b.name())\n```\nAlphabetically Descending Order\n# fields descending alphabetically orderedfield.order.with=groovy:```\n    return -a.name().compareTo(b.name())\n```\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_order_with.html#demo",
          "content": "demoSelect Jackson_JsonPropertyOrder in the recommended configurationsUserInfo.java@JsonPropertyOrder(value = {\"name\", \"birthDay\"}, alphabetic = true)public class UserInfo {\n\n    private Long id;//user id\n\n    /**\n     * @see com.itangcent.common.constant.UserType\n     */\n    private int type;//user type\n\n    /**\n     * @mock tangcent\n     * @order 1\n     */\n    @NotBlank\n    private String name;//user name\n\n    /**\n     * age\n     *\n     * @mock 1${digit}\n     */\n    @NotNull\n    private Integer age;\n\n    /**\n     * @deprecated It's a secret\n     */\n    private Integer sex;\n\n    //birthday\n    private LocalDate birthDay;\n\n    //registration time\n    private LocalDateTime regtime;\n}\n"
        },
        {
          "title": "Parse into json5:",
          "url": "/setting/rules/field_order_with.html#demo-parse-into-json5",
          "content": "Parse into json5:{    \"name\": \"\",\n    \"birthDay\": \"\", //birthday\n    \"age\": 0, //age\n    \"id\": 0, //user id\n    \"regtime\": \"\", //registration time\n    \"sex\": 0, //「Deprecated」It's a secret\n    /**\n     * 1 :Administrator\n     * 2 :Member\n     * 3 :Guest\n     */\n    \"type\": 0\n}\n"
        }
      ]
    },
    {
      "title": "folder.name",
      "content": "Used to set the name of the folder to which the API belongs\nBy default, the class where the API resides is used as the folder name\n",
      "url": "/setting/rules/folder_name.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/folder_name.html#demo",
          "content": "demoConfiguration is as follows:# read folder name from tag `folder`folder.name=#folder\nUsage is as follows:/*** Some Mock related APIs\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * @folder Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\nIn the default scenario, the above API would belong to the folder Some Mock related APIs. After adding the annotation @folder Mock String, it belongs to Mock String."
        }
      ]
    },
    {
      "title": "ignore",
      "content": "Used to ignore class/method\nComment @ignore on the class to ignore all apis in the class.\nComment @ignore on the method to ignore the api for the method.\n",
      "url": "/setting/rules/ignore.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/ignore.html#built-in-recommended-configuration",
          "content": "Built-in recommended configurationignore=#ignore"
        },
        {
          "title": "demo",
          "url": "/setting/rules/ignore.html#demo",
          "content": "demoComment like this on the class to ignore all apis in the class\n/*** Mock Apis\n*\n* @ignore\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\nComment like this on the method to ignore the api:\n/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n        * Mock String\n        * @ignore\n        */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "mdoc.class.filter",
      "content": "Used to select which classes can export method (rpc) documentation, based on the current project situation.\nDemoIf all RPC interface classes end with Client, you can configure it as follows:\nmdoc.class.filter=groovy:it.name().endsWith(\"Client\")If all RPC interface classes are contained within package a.b.c.client, you can configure it as follows:\nmdoc.class.filter=groovy:it.name().startsWith(\"a.b.c.client\")",
      "url": "/setting/rules/mdoc_class_filter.html",
      "children": []
    },
    {
      "title": "mdoc.method.path",
      "content": "Used to set the path for method documentation (rpc).\nTo prevent method overloading from causing conflicts, the default generated path includes argument information: $className/$methodName/$args.\nDepending on the project, the path can be configured to simplify its length.\n",
      "url": "/setting/rules/mdoc_method_path.html",
      "children": [
        {
          "title": "Modify Default Behavior",
          "url": "/setting/rules/mdoc_method_path.html#modify-default-behavior",
          "content": "Modify Default BehaviorAssuming the following class existspackage com.itangcent.dubbo.demo.client;\n/**\n * User related Client\n *\n * @module user_dubbo\n */\npublic interface UserClient {\n\n    /**\n     * Update username\n     *\n     * @param id      User id\n     * @param newName New username\n     * @param slogan  Personal signature\n     * @deprecated Use {@link #update(UserInfo)} instead\n     */\n    public UserInfo set(long id, String newName,\n                        String slogan,\n                        long times);\n}\nIn the default scenario:The exported path is:\n/com.itangcent.dubbo.demo.client.UserClient/set/long/java.lang.String/java.lang.String/long/\nIf it's confirmed that there are no overloaded methods, you can attempt to remove the argument information:Configuration is as follows:\nmdoc.method.path=groovy:it.containingClass().name()+\"/\"+it.name()The exported interface path is: /com.itangcent.dubbo.demo.client.UserClient/set\nYou can try removing the package name:Configuration is as follows:\nmdoc.method.path=groovy:it.containingClass().getSimpleName()+\"/\"+it.name()The exported interface path is:/UserClient/set\nYou can further convert the class name to lowercase:Configuration is as follows:\nmdoc.method.path=groovy:it.containingClass().getSimpleName().toLowerCase()+\"/\"+it.name()The exported interface path is:/userclient/update\n"
        }
      ]
    },
    {
      "title": "mdoc.method.http.method",
      "content": "Set the HTTP request method for method documentation (rpc), default is POST\n",
      "url": "/setting/rules/mdoc_method_http_method.html",
      "children": [
        {
          "title": "Modify Default Behavior",
          "url": "/setting/rules/mdoc_method_http_method.html#modify-default-behavior",
          "content": "Modify Default BehaviorSetting methods with no arguments to GETConfiguration is as follows:\nmdoc.method.http.method=groovy:it.argCnt()==0?\"GET\":null"
        }
      ]
    },
    {
      "title": "method.doc(doc.method)",
      "content": "Additional comments for methods (APIs).\n",
      "url": "/setting/rules/method_doc.html",
      "children": [
        {
          "title": "Default Recommended Configuration",
          "url": "/setting/rules/method_doc.html#default-recommended-configuration",
          "content": "Default Recommended Configuration#deprecated info(java)method.doc[#deprecated]=groovy:\"\\n「Deprecated」\" + it.doc(\"deprecated\")\nmethod.doc[@java.lang.Deprecated]=「Deprecated」\n\nmethod.doc[groovy:it.containingClass().hasDoc(\"deprecated\")]=groovy:\"\\n「Deprecated」\" + it.containingClass().doc(\"deprecated\")\nmethod.doc[groovy:it.containingClass().hasAnn(\"java.lang.Deprecated\")]=「Deprecated」\n\n\n#deprecated info(kotlin)\nmethod.doc[@kotlin.Deprecated]=groovy:\"\\n「Deprecated」\" + it.ann(\"kotlin.Deprecated\",\"message\")\nmethod.doc[groovy:it.containingClass().hasAnn(\"kotlin.Deprecated\")]=groovy:\"\\n「Deprecated」 \" + it.containingClass().ann(\"kotlin.Deprecated\",\"message\")\n\n"
        },
        {
          "title": "Adding support for Swagger's @ApiOperation",
          "url": "/setting/rules/method_doc.html#adding-support-for-swagger's-apioperation",
          "content": "Adding support for Swagger's @ApiOperationmethod.doc=@io.swagger.annotations.ApiOperation#value"
        },
        {
          "title": "Demo",
          "url": "/setting/rules/method_doc.html#demo",
          "content": "Demo/**\n* Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @ApiOperation(value = \"mock string\")\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "method.content.type",
      "content": "Used to set the default content-type for API requests. The plugin will still override this when necessary.\nFor example, when encountering @RequestBody, it will be forcibly overridden to application/json.\n",
      "url": "/setting/rules/method_content_type.html",
      "children": [
        {
          "title": "By default, the plugin prioritizes application/x-www-form-urlencoded. If you prefer to use multipart/form-data",
          "url": "/setting/rules/method_content_type.html#by-default,-the-plugin-prioritizes-applicationx-www-form-urlencoded.-if-you-prefer-to-use-multipartform-data",
          "content": "By default, the plugin prioritizes application/x-www-form-urlencoded. If you prefer to use multipart/form-dataConfiguration is as follows:method.content.type=multipart/form-data"
        }
      ]
    },
    {
      "title": "method.default.http.method",
      "content": "Set the default HTTP method for the API.\nBy default, when no HttpMethod is specified on the API and there are no special parameters, it will use GET.\n",
      "url": "/setting/rules/method_default_http_method.html",
      "children": [
        {
          "title": "To set the default method as POST",
          "url": "/setting/rules/method_default_http_method.html#to-set-the-default-method-as-post",
          "content": "To set the default method as POSTConfiguration:method.default.http.method=POST"
        }
      ]
    },
    {
      "title": "method.additional.header",
      "content": "API requires additional header\n",
      "url": "/setting/rules/method_additional_header.html",
      "children": [
        {
          "title": "For example, JWT, all apis need to carry tokens in the header",
          "url": "/setting/rules/method_additional_header.html#for-example,-jwt,-all-apis-need-to-carry-tokens-in-the-header",
          "content": "For example, JWT, all apis need to carry tokens in the headermethod.additional.header={name: \"Authorization\",value: \"\",desc: \"authenticationToken\",required:true, example:\"\"}"
        },
        {
          "title": "If you need to exclude the specified open apis without token, you can configure as follows:",
          "url": "/setting/rules/method_additional_header.html#if-you-need-to-exclude-the-specified-open-apis-without-token,-you-can-configure-as-follows",
          "content": "If you need to exclude the specified open apis without token, you can configure as follows:Define the following annotation:\npackage com.itangcent.common.annotation;\n/**\n * Declare interface as public\n */\n@Documented\n@Retention(RUNTIME)\n@Target({TYPE, METHOD})\npublic @interface Public {\n}\n\nConfigured as follows\nmethod.additional.header[!@com.itangcent.common.annotation.Public]={name: \"Authorization\",value: \"\",desc: \"authenticationToken\",required:true, example:\"\"}Equivalent to\nmethod.additional.header[groovy:!it.hasAnn(\"com.itangcent.common.annotation.Public\")]={name: \"Authorization\",value: \"\",desc: \"authenticationToken\",required:true, example:\"\"}"
        },
        {
          "title": "demo",
          "url": "/setting/rules/method_additional_header.html#demo",
          "content": "demo/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * public api\n    * Token is not required\n    */\n    @Public\n    @GetMapping(\"/apiWithoutToken\")\n    public Result apiWithoutToken() {\n        return Result.success(\"no token\");\n    }\n\n    /**\n    * private api\n    * Token is required\n    */\n    @GetMapping(\"/apiWithToken\")\n    public Result apiWithToken() {\n        return Result.success(\"wow,you got a token\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "method.additional.param",
      "content": "Additional param required for the API.\nOnly applicable to URL parameters, does not support form/body.\n###For instance, if all interfaces need to carry a token in the param:method.additional.param={name: \"Authorization\",value: \"\",desc: \"Authentication Token\",required:true}",
      "url": "/setting/rules/method_additional_param.html",
      "children": [
        {
          "title": "If you need to exclude specific open interfaces from requiring a token, you can configure as follows:",
          "url": "/setting/rules/method_additional_param.html#if-you-need-to-exclude-specific-open-interfaces-from-requiring-a-token,-you-can-configure-as-follows",
          "content": "If you need to exclude specific open interfaces from requiring a token, you can configure as follows:Assume the following annotation:\npackage com.itangcent.common.annotation;\n/**\n * Declares the interface as a public interface.\n */\n@Documented\n@Retention(RUNTIME)\n@Target({TYPE, METHOD})\npublic @interface Public {\n}\nThen it can be configured as follows:\nmethod.additional.param[!@com.itangcent.common.annotation.Public]={name: \"Authorization\",value: \"\",desc: \"Authentication Token\",required:true, example:\"\"}Equivalent to:\nmethod.additional.param[groovy:!it.hasAnn(\"com.itangcent.common.annotation.Public\")]={name: \"Authorization\",value: \"\",desc: \"Authentication Token\",required:true, example:\"\"}"
        },
        {
          "title": "demo",
          "url": "/setting/rules/method_additional_param.html#demo",
          "content": "demo/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * public api\n    * Token is not required\n    */\n    @Public\n    @GetMapping(\"/apiWithoutToken\")\n    public Result apiWithoutToken() {\n        return Result.success(\"no token\");\n    }\n\n    /**\n    * private api\n    * Token is required\n    */\n    @GetMapping(\"/apiWithToken\")\n    public Result apiWithToken() {\n        return Result.success(\"wow,you got a token\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "module",
      "content": "Used to group APIs\nThe name of urrent module/project is used by default\nWhen exporting postman, each module will be used as a separate folder\n",
      "url": "/setting/rules/module.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/module.html#built-in-recommended-configuration",
          "content": "Built-in recommended configurationmodule=#module"
        },
        {
          "title": "demo",
          "url": "/setting/rules/module.html#demo",
          "content": "demo/*** Mock Apis\n*\n* @module mock\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\n"
        }
      ]
    },
    {
      "title": "method.return",
      "content": "Set the return type of the method.\nCommonly used in the following scenarios:\n\nWhen the method returns an Object.\nWhen the generic type of the method's return type is not explicitly defined as //.\nWhen the method's return type is unrelated to the actual response, such as returning a response through manipulating HttpServletResponse.\n\n\n",
      "url": "/setting/rules/method_return.html",
      "children": [
        {
          "title": "For example, consider the following API:",
          "url": "/setting/rules/method_return.html#for-example,-consider-the-following-api",
          "content": "For example, consider the following API:API:    /**     * Write response using `HttpServletResponse`\n     */\n    @RequestMapping(value = \"/writeByResponse\", method = RequestMethod.GET)\n    public void writeByResponse(HttpServletResponse response) throws IOException {\n        UserInfo userInfo = new UserInfo();\n        userInfo.setId(1l);\n        userInfo.setName(\"Tom\");\n        userInfo.setAge(25);\n        response.getOutputStream().write(new Gson().toJson(Result.success(userInfo)).getBytes(Charsets.UTF_8));\n    }\nThis method returns void, but the actual response is of type Result. Therefore, an additional approach is needed to indicate the actual response of this API.\nSimple configuration:method.return=#real_returnUsage in method:/** * @real_return com.itangcent.common.dto.Result\n */\nFor convenience, we can try using {@link} to set the actual response type and use helper.resolveLink to resolve it.For example, configure the following:method.return[#real_return]=groovy: helper.resolveLink(it.doc(\"real_return\"))Usage in method:/** * @real_return {@link Result}\n */\nFurthermore, if all responses are wrapped by com.itangcent.common.dto.ResultConfigure the following:method.return[#real_return]=groovy: \"com.itangcent.common.dto.Result\"Usage in method:/** * @real_return {@link UserInfo}\n */\n"
        }
      ]
    },
    {
      "title": "method.return.main",
      "content": "This configuration is used to specify the main body for the return statement, so that the @return annotation applies to the main body property and does not affect the return type and fields.\n",
      "url": "/setting/rules/method_return_main.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/method_return_main.html#demo",
          "content": "demoResult.javapackage com.itangcent.common.dto;\npublic class Result implements IResult {\n\n    private Integer code; // Response code\n\n    private String msg; // Response message\n\n    private T data; // Response data\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "Configuration",
          "url": "/setting/rules/method_return_main.html#demo-configuration",
          "content": "Configurationmethod.return.main[groovy:it.returnType().isExtend(\"com.itangcent.common.dto.Result\")]=data"
        },
        {
          "title": "API Demo1:",
          "url": "/setting/rules/method_return_main.html#demo-api-demo1",
          "content": "API Demo1:API code:\n/**     * Get the current user's type\n     *\n     * @return The current user's type, {@link com.itangcent.common.constant.UserTypeConstant}\n     */\n    @GetMapping(\"/type\")\n    public Result currUserType() {\n        return Result.success(UserType.values()[new Random(System.currentTimeMillis()).nextInt(UserType.values().length)].getType());\n    }\nExported API response:\n\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\nmsg\nstring\noptional\n\nResponse message\nmock:\n\n\ncode\ninteger\noptional\n\nResponse code\nmock: 0\n\n\ndata\ninteger\noptional\n\nResponse dataThe current user's type, [User type]\nEnum: 1,2,3Enum desc: 1: Admin 2: Member 3: Guestmock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "API Demo2:",
          "url": "/setting/rules/method_return_main.html#demo-api-demo2",
          "content": "API Demo2:API code:\n/**     * Get all user types\n     *\n     * @return {@link com.itangcent.common.constant.UserType#getType()}\n     */\n    @GetMapping(\"/types\")\n    public Result> types() {\n        final List types = Stream.of(UserType.values()).map(UserType::getType).collect(Collectors.toList());\n        return Result.success(types);\n    }\nExported API response:\n\n\n    name\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\n    msg\nstring\noptional\n\nResponse message\nmock:\n\n\n    code\ninteger\noptional\n\nResponse code\nmock: 0\n\n\n＋data\ninteger[]\noptional\n\nResponse data[User type]\nitem type: integer\n\n\n\ninteger\n\n\n\nEnum: 1,2,3Enum desc: 1: Admin 2: Member 3: Guestmock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "Additional Information:",
          "url": "/setting/rules/method_return_main.html#demo-additional-information",
          "content": "Additional Information:UserTypeConstant.java/** * User type\n */\npublic class UserTypeConstant implements Serializable {\n\n    private static final long serialVersionUID = -4607862808303533196L;\n\n    public static final int ADMIN = 1;//Admin\n    public static final int MEMBER = 2;//Member\n    public static final int GUEST = 3;//Guest\n\n}\nUserType.javapackage com.itangcent.common.constant;\n/**\n * User type\n */\npublic enum UserType {\n    // Admin\n    ADMIN(1, \"Admin\"),\n\n    // Member\n    MEMBER(2, \"Member\"),\n\n    // Guest\n    GUEST(3, \"Guest\");\n\n    private int type; // User type\n\n    private String desc;\n\n    // constructors...\n\n    // getters...\n}\n"
        }
      ]
    },
    {
      "title": "json.rule.convert",
      "content": "Used to convert type to other type for parse, usually used with spring's custom type converter is used\n",
      "url": "/setting/rules/json_rule_convert.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/json_rule_convert.html#built-in-recommended-configuration",
          "content": "Built-in recommended configuration#The ObjectId and Date are parsed as stringsjson.rule.convert[org.bson.types.ObjectId]=java.lang.String\njson.rule.convert[java.util.Date]=java.lang.String\njson.rule.convert[java.sql.Timestamp]=java.lang.String\njson.rule.convert[java.time.LocalDateTime]=java.lang.String\njson.rule.convert[java.time.LocalDate]=java.lang.String\n\n#resolve HttpEntity/RequestEntity/ResponseEntity\n###set resolveProperty = false\njson.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object\njson.rule.convert[#regex:org.springframework.http.HttpEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.RequestEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object\njson.rule.convert[#regex:org.springframework.http.ResponseEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object\n###set resolveProperty = true\n"
        }
      ]
    },
    {
      "title": "json.rule.enum.convert",
      "content": "This rule is used to define conversion rules for enum types.\nIt has lower priority than json.rule.convert.\nAssuming the following enum class existspublic enum UserType {    //Admin\n    ADMIN(1, \"Admin\"),\n\n    //Member\n    MEMBER(2, \"Member\"),\n\n    //Guest\n    GUEST(3, \"Guest\");\n\n    private int type;\n    private String desc;\n\n    public int getType() {\n        return type;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int type, String desc) {\n        this.type = type;\n        this.desc = desc;\n    }\n}\nFor the following field:/*** User type\n*/\nprivate UserType type;\n",
      "url": "/setting/rules/json_rule_enum_convert.html",
      "children": [
        {
          "title": "Default behavior",
          "url": "/setting/rules/json_rule_enum_convert.html#default-behavior",
          "content": "Default behaviorBy default, the enum type is converted to a String and the available values are the instance names of the enum.\nThe field will be processed as:\n/*** User type\n* @see UserType\n*/\nprivate String type;\nThe exported API result will be::\n\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\ntype\nstring\nNO\n\nUSER type\nENUM: ADMIN,MEMBER,GUESTENUMdesc: ADMIN :Admin MEMBER :Member GUEST :Guestmock: @pick([\"ADMIN\",\"MEMBER\",\"GUEST\"])\n\n\n"
        },
        {
          "title": "Adding configuration",
          "url": "/setting/rules/json_rule_enum_convert.html#adding-configuration",
          "content": "Adding configurationTo configure the conversion to int and use the type field of the enum as the available values, add the following configuration:\njson.rule.enum.convert[com.itangcent.common.constant.UserType]=~#typeThe field will be processed as:\n/*** USER type\n* @see UserType#type\n*/\nprivate int type;\nThe exported API result will be:\n\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\ntype\ninteger\nNO\n\nUSER type\nENUM: 1,2,3ENUMdesc: 1 :Admin 2 :Member 3 :Guestmock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "Handling in a Unified Way",
          "url": "/setting/rules/json_rule_enum_convert.html#handling-in-a-unified-way",
          "content": "Handling in a Unified WayIn a special case, declare the following interface::\npackage com.itangcent.common.constant;\npublic interface TypeAble {\n    int getType();\n}\nModify the UserType enum to implement TypeAble:\npublic enum UserType implements TypeAble {    ...\n}\nThen, you can configure the conversion of all classes implementing TypeAble to int and use the type field of the enum as the available values:\njson.rule.enum.convert[groovy:it.extend(\"com.itangcent.common.constant.TypeAble\")]=~#type"
        }
      ]
    },
    {
      "title": "json.rule.field.ignore",
      "content": "Ignore fields (indicates that the property should be ignored in request body/form and response body)\n",
      "url": "/setting/rules/json_rule_field_ignore.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/json_rule_field_ignore.html#built-in-recommended-configuration",
          "content": "Built-in recommended configuration#Support for Jackson annotationsjson.rule.field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value\n\n#Support for Gson annotations\njson.rule.field.ignore=!@com.google.gson.annotations.Expose#serialize\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/json_rule_field_ignore.html#demo",
          "content": "demoTestJsonIgnoreBean.javapublic class TestJsonIgnoreBean {\n    @Expose(serialize = true)\n    private Long shouldNotIgnoreForGson;\n\n    @Expose(serialize = false)\n    private Long shouldIgnoreForGson;\n\n    @JsonIgnore(false)\n    private Long shouldNotIgnoreForJackson;\n\n    @JsonIgnore\n    private Long shouldIgnoreForJackson;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "Export as API response:",
          "url": "/setting/rules/json_rule_field_ignore.html#demo-export-as-api-response",
          "content": "Export as API response:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\nshouldNotIgnoreForGson\ninteger\nNO\n\n\nmock: @natural(0,10000)\n\n\nshouldNotIgnoreForJackson\ninteger\nNO\n\n\nmock: @natural(0,10000)\n\n\n"
        },
        {
          "title": "Special custom configuration Demo",
          "url": "/setting/rules/json_rule_field_ignore.html#special-custom-configuration-demo",
          "content": "Special custom configuration Demo\nIgnores the field with special name:\n\n\nConfiguration\n# ignore field 'log'\njson.rule.field.ignore=log\n\n\n\nThe following fields will be ignored\nprivate String log;\n\n\n\n\n\nIgnores the field of the special type:\n\n\nConfiguration\n# ignore field 'log' typed xxx.xxx.Log\njson.rule.field.ignore=groovy:it.type().name()==\"xxx.xxx.Log\"\n\n\n\nThe following fields will be ignored\nprivate Log xxx;\n\n\n\n\n\nIgnore the field with special modifier:\n\n\nConfiguration\n#ignore transient field\njson.rule.field.ignore=groovy:it.hasModifier(\"transient\")||it.hasModifier(\"protected\")\n\n\n\nThe following fields will be ignored\nprivate transient Int xxx;\nprotected Long yyy;\n\n\n\n\n"
        }
      ]
    },
    {
      "title": "json.rule.field.name",
      "content": "The json.rule.field.name property is used to set the field name for output/input purposes when the field name in JSON differs from the field name in the class.\nDeprcated: Replace with field.name\n",
      "url": "/setting/rules/json_rule_field_name.html",
      "children": [
        {
          "title": "Built-in Recommended Configuration",
          "url": "/setting/rules/json_rule_field_name.html#built-in-recommended-configuration",
          "content": "Built-in Recommended Configuration#Support for Jackson annotationsjson.rule.field.name=@com.fasterxml.jackson.annotation.JsonProperty#value\n\n#Support for Gson annotations\njson.rule.field.name=@com.google.gson.annotations.SerializedName#value\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/json_rule_field_name.html#demo",
          "content": "demoTestJsonFieldBean.javapublic class TestJsonFieldBean {    @JsonProperty(\"a\")\n    private Long propertyA;\n\n    @SerializedName(\"b\")\n    private Long propertyB;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "Export as API response:",
          "url": "/setting/rules/json_rule_field_name.html#demo-export-as-api-response",
          "content": "Export as API response:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\na\ninteger\noptional\n\n\nmock: @natural(0,10000)\n\n\nb\ninteger\noptional\n\n\nmock: @natural(0,10000)\n\n\n"
        }
      ]
    },
    {
      "title": "param.default.value",
      "content": "Setting the default value for parameters.\n",
      "url": "/setting/rules/param_default_value.html",
      "children": [
        {
          "title": "Add support for swagger @ApiParam",
          "url": "/setting/rules/param_default_value.html#add-support-for-swagger-apiparam",
          "content": "Add support for swagger @ApiParamparam.default.value=@io.swagger.annotations.ApiParam#defaultValue"
        },
        {
          "title": "demo",
          "url": "/setting/rules/param_default_value.html#demo",
          "content": "demo@RestController@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString(\n            @ApiParam(value = \"seed for mock\",defaultValue = \"666\")  long seed) {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "param.demo",
      "content": "Parameter example information\n",
      "url": "/setting/rules/param_demo.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/param_demo.html#demo",
          "content": "demoConfiguration:param.demo=groovy:it.method().doc(\"demo\",it.name())Usage:    /**     * @demo newName tangcent\n     */\n    @RequestMapping(value = \"/set\", method = RequestMethod.PUT)\n    public Object set(@RequestParam String newName) {\n                      ...\n    }\n"
        }
      ]
    },
    {
      "title": "param.doc(doc.param)",
      "content": "Additional comments for parameters\n",
      "url": "/setting/rules/param_doc.html",
      "children": [
        {
          "title": "Include parameter type in the comment",
          "url": "/setting/rules/param_doc.html#include-parameter-type-in-the-comment",
          "content": "Include parameter type in the commentparam.doc=groovy:\"Type:\"+it.type().name()"
        },
        {
          "title": "Include parameter type in the comment without Java package name",
          "url": "/setting/rules/param_doc.html#include-parameter-type-in-the-comment-without-java-package-name",
          "content": "Include parameter type in the comment without Java package nameparam.doc=groovy:\"Type:\"+tool.uncapitalize(it.type().name().replace(\"java.lang.\",\"\"))"
        },
        {
          "title": "Example API",
          "url": "/setting/rules/param_doc.html#include-parameter-type-in-the-comment-without-java-package-name-example-api",
          "content": "Example API    /**     * Update username\n     * \n     * @param id      User ID\n     * @param newName New username\n     * @param slogan  Personal slogan\n     * @deprecated Use {@link #update(UserInfo)} instead\n     */\n    @RequestMapping(value = \"/set\", method = RequestMethod.PUT)\n    public Object set(long id,\n                      @RequestParam String newName,\n                      @RequestParam(required = false, defaultValue = \"haha\") String slogon,\n                      @RequestParam(required = false, defaultValue = \"10\") long times) {\n            ...\n    }\n"
        },
        {
          "title": "Exported Result:",
          "url": "/setting/rules/param_doc.html#include-parameter-type-in-the-comment-without-java-package-name-exported-result",
          "content": "Exported Result:Request Parameters:\n\nParameter\nName\n\nRequired\tExample\tDescription\n\n\n\n\nid\nYes\n\nUser IDType: long\n\n\nnewName\nYes\n\nNew usernameType: string\n\n\nslogan\nNo\n\nPersonal sloganType: string\n\n\ntimes\nNo\n\nType: long\n\n\n"
        }
      ]
    },
    {
      "title": "param.http.type",
      "content": "\nThe param.http.type configuration is used to set the type of API parameters in the HTTP request (location: body/form/query).\n\n\nParameters annotated with @RequestBody/@ModelAttribute/@RequestHeader/@PathVariable, and others will ignore this rule.\n\n\nParameters annotated with @RequestParam and the HTTP method is GET will also ignore this rule.\n\n\nFor parameters that do not meet the above conditions and have no specific configuration, the default behavior is to prioritize the query mode.\n\n",
      "url": "/setting/rules/param_http_type.html",
      "children": [
        {
          "title": "Configuration Examples",
          "url": "/setting/rules/param_http_type.html#configuration-examples",
          "content": "Configuration Examples"
        },
        {
          "title": "Set all parameters as form, prioritize form submission:",
          "url": "/setting/rules/param_http_type.html#configuration-examples-set-all-parameters-as-form,-prioritize-form-submission",
          "content": "Set all parameters as form, prioritize form submission:param.http.type=form"
        },
        {
          "title": "Set @RequestParam parameters as query and others as form:",
          "url": "/setting/rules/param_http_type.html#configuration-examples-set-requestparam-parameters-as-query-and-others-as-form",
          "content": "Set @RequestParam parameters as query and others as form:param.http.type[@org.springframework.web.bind.annotation.RequestParam]=queryparam.http.type=form\n"
        }
      ]
    },
    {
      "title": "param.ignore",
      "content": "Setting the ignoring of API parameters.\n",
      "url": "/setting/rules/param_ignore.html",
      "children": [
        {
          "title": "Add support for swagger @ApiParam",
          "url": "/setting/rules/param_ignore.html#add-support-for-swagger-apiparam",
          "content": "Add support for swagger @ApiParamparam.ignore=@io.swagger.annotations.ApiParam#hidden"
        },
        {
          "title": "demo",
          "url": "/setting/rules/param_ignore.html#demo",
          "content": "demo@RestController@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString(\n            @ApiParam(value = \"seed for mock\",hidden = true)  long seed) {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "param.required",
      "content": "Used to indicate whether an API parameter is required (means cannot be empty).\n",
      "url": "/setting/rules/param_required.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/param_required.html#built-in-recommended-configuration",
          "content": "Built-in recommended configuration#Support for javax.validation annotationsparam.required=@javax.validation.constraints.NotBlank\nparam.required=@\"javax.validation.constraints.NotNull\nparam.required=@javax.validation.constraints.NotEmpty\n"
        },
        {
          "title": "Add support for swagger @ApiParam",
          "url": "/setting/rules/param_required.html#add-support-for-swagger-apiparam",
          "content": "Add support for swagger @ApiParamparam.required=@io.swagger.annotations.ApiParam#required"
        },
        {
          "title": "demo",
          "url": "/setting/rules/param_required.html#demo",
          "content": "demoMockCtrl.java@RestController@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString(\n            @ApiParam(value = \"seed for mock\", required = true, defaultValue = \"666666\") long seed) {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        },
        {
          "title": "Export as API response:",
          "url": "/setting/rules/param_required.html#demo-export-as-api-response",
          "content": "Export as API response:Request Parameters:\n\nParameter name\nrequired\nDemo\ndesc\n\n\n\n\nseed\nYes\n666666\nseed for mock\n\n\n"
        }
      ]
    },
    {
      "title": "path.multi",
      "content": "Used for handling cases where an API has multiple available paths.\nCurrently available strategies (case insensitive):\n\n\nAvailable Strategy\nStrategy Description\n\n\n\n\nFIRST\nChoose the first available path\n\n\nLAST\nChoose the last available path\n\n\nLONGEST\nChoose the longest available path\n\n\nSHORTEST\nChoose the shortest available path\n\n\nALL\nGenerate an API for every available path\n\n\nPossible configurations are as follows:Choose the first available path\npath.multi=firstChoose the last available path\npath.multi=lastChoose the longest available path\npath.multi=longestChoose the shortest available path\npath.multi=shortestGenerate an API for every available path\npath.multi=allThe API can also decide the selection strategy itselfpath.multi=#multiUsage is as follows:/*** Some Mock related APIs\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * @multi all\n    */\n    @GetMapping(value = {\"/string\", \"string2\"})\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n",
      "url": "/setting/rules/path_multi.html",
      "children": []
    },
    {
      "title": "postman.host",
      "content": "Configure the host of the postman API.\nBy default, the current module name is used as the host of the API, for example: {{user}}.\n",
      "url": "/setting/rules/postman_host.html",
      "children": [
        {
          "title": "The immutable host configuration is as follows",
          "url": "/setting/rules/postman_host.html#the-immutable-host-configuration-is-as-follows",
          "content": "The immutable host configuration is as followspostman.host=http://localhost:8080"
        }
      ]
    },
    {
      "title": "export.after",
      "content": "The callback will be performed after each API export completion\n\n\nContextual Target (it)\nAdditional Context\n\n\n\n\nmethod\napi\n\n\n",
      "url": "/setting/rules/export_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/export_after.html#demo",
          "content": "demoAdd interface description informationexport.after=groovy:api.appendDesc(\"\\nThis interface is deprecated\\n\")Do not display the token in the headerexport.after=groovy:api.removeHeader(\"token\")Modify the urlexport.after=groovy:api.setPath(\"/pre\"+api.path())The response header include the current user's membership levelexport.after=groovy:api.addResponseHeader(\"level\",\"\",\"true\",\"Current user's membership level\")Include the @version xxx from the method in the urlexport.after[#version]=groovy:```    def tag = it.doc(\"version\")\n    def url = api.path()\n    if(url.contains(\"?\")){\n        url = url +\"&version=\" + tag\n    }else{\n        url = url +\"?version=\" + tag\n    }\n    api.setPath(url)\n```\n"
        }
      ]
    },
    {
      "title": "http.call.after",
      "content": "Callback after http request\nNote: All http requests from the plugin will trigger this callback.\n\n\nRule Target (context it)\nAdditional Context\n\n\n\n\nNone\nrequest, response\n\n\n",
      "url": "/setting/rules/http_call_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/http_call_after.html#demo",
          "content": "demoLogging responses for all requests from the pluginhttp.call.after=groovy:logger.info(\"response:\"+response.string())Executing another API after a particular API request succeedshttp.call.after=groovy:```// Check if it's the specified interface\nif(request.code()==200&&request.url().endsWith(\"/xxx\")){\n    httpClient.post(\"http://xxx/xxx\")\n    .contentType(\"application/json\")\n    .body({\"xxx\":\"xxx\",\"xxx\":\"xxx\"})\n    .call()\n}\n```\nAutomatic login (Cookie) on Callhttp.call.after=groovy:```//Check if it's an interface that requires login\nif(response.code()==401){\n    httpClient.post(\"http://xxx/login\")\n        .contentType(\"application/json\")\n        .body({\"username\":\"xxx\",\"passwd\":\"xxx\"})\n        .call()\n    response.discard()//Discard the result of this request\n}\n```\nAutomatic login (Token) on Callhttp.call.after=groovy:```// Check if it's an interface that requires login\nif(response.code()==401){\n    def loginResponse = httpClient.post(\"http://xxx/login\")\n        .contentType(\"application/json\")\n        .body({\"username\":\"xxx\",\"passwd\":\"xxx\"})\n        .call()\n    def token = loginResponse.firstHeader(\"token\")\n    localStorage.set(\"token\",token)\n    response.discard()//Discard the result of this request\n}\n```\nhttp.call.before=groovy:```\n//Retrieve token from localStorage\nrequest.header(\"token\",localStorage.get(\"token\"))\n```\nHost is not fixed//You can try to obtain the current request's host through regexdef host = regex.getGroup1(\"(https?://.+?)/.*?\",request.url());\nx-www-form-urlencoded submissionhttpClient.post(\"http://xxx/login\")    .contentType(\"application/x-www-form-urlencoded\")\n    .param(\"username\",\"name\")\n    .param(\"password\",\"pwd\")\n    .call();\n"
        }
      ]
    },
    {
      "title": "http.call.before",
      "content": "Callback before http request\nNote: All http requests from the plugin will trigger this callback.\n\n\nRule Target (context it)\nAdditional Context\n\n\n\n\nNone\nrequest\n\n\n",
      "url": "/setting/rules/http_call_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/http_call_before.html#demo",
          "content": "demoLogging all requests from the pluginhttp.call.before=groovy:logger.info(\"call:\"+request.url())Automatically adding a specified tokenhttp.call.before=groovy:```request.header(\"token\",\"xxxxxxxxxxxxx\")\n```\nAutomatically adding a token retrieved from localStoragehttp.call.before=groovy:```//Retrieve token from localStorage\nrequest.header(\"token\",localStorage.get(\"token\"))\n```\n"
        }
      ]
    },
    {
      "title": "api.class.parse.before",
      "content": "Callback before parsing the controller class\n\n\nRule Target (Context: it)\nAdditional Context\n\n\n\n\nclass\nNone\n\n\n",
      "url": "/setting/events/api_class_parse_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_class_parse_before.html#demo",
          "content": "demoAdd logapi.class.parse.before=groovy:logger.info(\"Beginning to parse controller:\" + it.name())"
        }
      ]
    },
    {
      "title": "api.class.parse.after",
      "content": "Callback after parsing the controller class\n\n\nRule Target (Context: it)\nAdditional Context\n\n\n\n\nclass\nNone\n\n\n",
      "url": "/setting/events/api_class_parse_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_class_parse_after.html#demo",
          "content": "demoAdd logapi.class.parse.after=groovy:logger.info(\"Controller:\" + it.name() + \" parsing completed\")"
        }
      ]
    },
    {
      "title": "api.method.parse.before",
      "content": "Callback before parsing the API method\n\n\nRule Target (Context: it)\nAdditional Context\n\n\n\n\nmethod\nNone\n\n\n",
      "url": "/setting/events/api_method_parse_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_method_parse_before.html#demo",
          "content": "demoAdd logapi.method.parse.before=groovy:logger.info(\"Beginning to parse API:\" + it.name())"
        }
      ]
    },
    {
      "title": "api.method.parse.after",
      "content": "Callback after parsing the API method\n\n\nRule Target (Context: it)\nAdditional Context\n\n\n\n\nmethod\nNone\n\n\n",
      "url": "/setting/events/api_method_parse_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_method_parse_after.html#demo",
          "content": "demoAdd logapi.method.parse.after=groovy:logger.info(\"API:\" + it.name() + \" parsing completed\")"
        }
      ]
    },
    {
      "title": "api.param.parse.before",
      "content": "Callback before parsing the API parameter\n\n\nRule Target (Context: it)\nAdditional Context\n\n\n\n\nparam\nNone\n\n\n",
      "url": "/setting/events/api_param_parse_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_param_parse_before.html#demo",
          "content": "demoAdd logapi.param.parse.before=groovy:logger.info(\"Beginning to parse API parameter:\" + it.name())"
        }
      ]
    },
    {
      "title": "api.param.parse.after",
      "content": "Callback after parsing the API parameter\n\n\nRule Target (Context: it)\nAdditional Context\n\n\n\n\nparam\nNone\n\n\n",
      "url": "/setting/events/api_param_parse_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_param_parse_after.html#demo",
          "content": "demoAdd logapi.param.parse.after=groovy:logger.info(\"API parameter:\" + it.name() + \" parsing completed\")"
        }
      ]
    },
    {
      "title": "json.class.parse.before",
      "content": "Callback before parsing class\n\n\nRule Target (Context: it)\nAdditional Context\n\n\n\n\nclass\nNone\n\n\n",
      "url": "/setting/events/json_class_parse_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/json_class_parse_before.html#demo",
          "content": "demoAdd logjson.class.parse.before=groovy:logger.info(\"Beginning to parse class: \"+it.name())"
        }
      ]
    },
    {
      "title": "json.class.parse.after",
      "content": "Callback after parsing the class\n\n\nRule Target (Context: it)\nAdditional Context\n\n\n\n\nclass\nNone\n\n\n",
      "url": "/setting/events/json_class_parse_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/json_class_parse_after.html#demo",
          "content": "demoAdd logjson.class.parse.after=groovy:logger.info(\"Class:\" + it.name() + \" parsing completed\")"
        }
      ]
    },
    {
      "title": "json.field.parse.before",
      "content": "Callback before parsing field\n\n\nRule Target (Context: it)\nAdditional Context\n\n\n\n\nfield\nNone\n\n\n",
      "url": "/setting/events/json_field_parse_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/json_field_parse_before.html#demo",
          "content": "demoAdd logjson.field.parse.before=groovy:logger.info(\"Beginning to parse field: \"+it.name())"
        }
      ]
    },
    {
      "title": "json.field.parse.after",
      "content": "Callback after parsing field\n\n\nRule Target (Context: it)\nAdditional Context\n\n\n\n\nfield\nNone\n\n\n",
      "url": "/setting/events/json_field_parse_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/json_field_parse_after.html#demo",
          "content": "demoAdd logjson.field.parse.after=groovy:logger.info(\"Field: \"+it.name()+\" parsing completed\")"
        }
      ]
    },
    {
      "title": "Provided Tools/Objects",
      "content": "\n\n    Tools/Objects\nDescription\n\n\n\n\n☆it\nApplication object of the current rule (available in most rules)\n\n\n☆tool\nMain utility class\n\n\n    regex\nRegular expression utility\n\n\n    logger\nLogging utility\n\n\n    helper\nSpecial helper class\n\n\n    httpClient\nHTTP-related helper class\n\n\n    localStorage\nLocal storage\n\n\n    session\nTemporary storage\n\n\n    config\nConfiguration reading utility (Local File Configuration)\n\n\n    runtime\nRuntime information\n\n\n    fieldContext\nField context class\n\n\n",
      "url": "/setting/tools.html",
      "children": []
    },
    {
      "title": "it Represents the Context Object of the Current Rule (a few rules do not have a context object)",
      "content": "The context object provides only methods (it.method()✅) and does not provide properties (it.property❎).\n",
      "url": "/setting/tools/it.html",
      "children": [
        {
          "title": "The following methods are supported for class, method, field, and arg:",
          "url": "/setting/tools/it.html#the-following-methods-are-supported-for-class,-method,-field,-and-arg",
          "content": "The following methods are supported for class, method, field, and arg:\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\nname()\nstring\nReturns the name\nit.name()\n\n\nhasAnn(\"annotation_name\")\nboolean\nChecks if the object has a specific annotation\nit.hasAnn(\"org.springframework.web.bind.annotation.RequestBody\")\n\n\nann(\"annotation_name\")\nstring\nRetrieves the value of a specific annotation\nit.ann(\"org.springframework.web.bind.annotation.RequestBody\")\n\n\nann(\"annotation_name\",\"attr\")\nstring\nRetrieves the value of a specific attribute in a specific annotation\nit.ann(\"org.springframework.web.bind.annotation.RequestMapping\",\"path\")\n\n\nannMap(\"annotation_name\")\nmap\nGets all parameters of a specific annotation\nit.annMap(\"org.springframework.web.bind.annotation.RequestMapping\")\n\n\nannMaps(\"annotation_name\")\nmap[]\nGets all parameters of a specific repeatable annotation\nit.annMaps(\"javax.validation.constraints.Max\")\n\n\nannValue(\"annotation_name\")\nobject\nGets the value of a specific annotation (default is \"value\"), preserves the original type\nit.annValue(\"org.springframework.web.bind.annotation.RequestBody\")\n\n\nannValue(\"annotation_name\",\"attr\")\nobject\nGets the value of a specific parameter in a specific annotation, preserves the original type\nit.annValue(\"org.springframework.web.bind.annotation.RequestMapping\",\"path\")\n\n\ndoc()\nstring\nRetrieves the documentation value\nit.doc()\n\n\ndoc(\"tag\")\nstring\nRetrieves the value of a specific documentation tag (without @)\nit.doc(\"return\")\n\n\ndocs(\"tag\")\narray\nRetrieves the values of multiple documentation tags (without @)\nit.docs(\"see\")\n\n\ndoc(\"tag\",\"subTag\")\nstring\nRetrieves the value of a second-level documentation tag\nit.doc(\"param\",\"a\")\n\n\nhasDoc(\"tag\")\nstring\nChecks if a specific documentation tag exists\nit.hasDoc(\"ignore\")\n\n\nhasModifier(\"modifier\")\nstring\nChecks if a specific modifier is present\nit.hasModifier(\"public\")\n\n\nmodifiers()\nstring\nRetrieves all modifiers\nit.modifiers()\n\n\nsourceCode()\nstring\nRetrieves the source code of the current object\nit.sourceCode()\n\n\ndefineCode()\nstring\nRetrieves the pure definition code of the current object\nit.defineCode()\n\n\ncontextType()\nstring\nRetrieves the context type (class/field/method/param) of the current object\nit.contextType()\n\n\n"
        },
        {
          "title": "Additional methods provided by different application objects:",
          "url": "/setting/tools/it.html#additional-methods-provided-by-different-application-objects",
          "content": "Additional methods provided by different application objects:class\n\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\nmethods()\nmethod[]\nRetrieves all methods in the class\nit.methods()\n\n\nmethodCnt()\nint\nRetrieves the number of methods in the class\nit.methodCnt()\n\n\nfield()\nfield[]\nRetrieves all fields in the class\nit.field()\n\n\nfieldCnt()\nint\nRetrieves the number of fields in the class\nit.fieldCnt()\n\n\nisExtend(superClass)\nboolean\nChecks if the class extends a specific class\nit.isExtend(\"some.class.qualifiedName\")\n\n\nisMap()\nboolean\nChecks if the class is a Map\nit.isMap()\n\n\nisCollection()\nboolean\nChecks if the class is a collection\nit.isCollection()\n\n\nisArray()\nboolean\nChecks if the class is an array\nit.isArray()\n\n\ntoJson()\nstring\nGets the JSON string of the current type\nit.toJson()\n\n\ntoJson(readGetter, readSetter)\nstring\nGets the JSON string of the current type\nit.toJson(true, true)\n\n\ntoJson5()\nstring\nGets the JSON5 string of the current type\nit.toJson5()\n\n\ntoJson5(readGetter, readSetter)\nstring\nGets the JSON5 string of the current type\nit.toJson5(true, true)\n\n\nmavenId()\nMavenId\nget Maven ID info\nit.mavenId()\n\n\nmethod(method/API)\n\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\nreturnType()\nclass\nReturns the type of the method\nit.returnType()\n\n\nisVarArgs()\nboolean\nIndicates if the method has variable arguments\nit.isVarArgs()\n\n\nargs()\narg[]\nReturns all the parameters of the method\nit.args()\n\n\nargTypes()\nclass[]\nReturns the types of all the parameters of the method\nit.argTypes()\n\n\nargCnt()\nint\nReturns the number of parameters of the method\nit.argCnt()\n\n\ncontainingClass()\nclass\nReturns the class to which the method belongs\nit.containingClass()\n\n\nreturnJson(needInfer, readGetter)\nclass\nReturns the JSON string representation of the object returned by the current method\nit.returnJson(true,true)\n\n\nfield(Property)\n\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\ntype()\nclass\nReturns the type of the field\nit.type()\n\n\ncontainingClass()\nclass\nReturns the class to which the field belongs\nit.containingClass()\n\n\njsonName()\nstring\nReturns the JSON name of the field\nit.jsonName()\n\n\njsonType()\nclass\nReturns the JSON type of the field (after conversion)\nit.jsonType()\n\n\narg(Parameter)\n\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\ntype()\nclass\nReturns the type of the argument\nit.type()\n\n\nisVarArgs()\nboolean\nIndicates if the argument is a variable argument\nit.isVarArgs()\n\n\nMavenId\n\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\ngroupId\nstring\nReturns the group ID\nit.groupId\n\n\nartifactId\nstring\nReturns the artifact ID\nit.artifactId\n\n\nversion\nstring\nReturns the version\nit.version\n\n\nmaven()\nString\nGenerates a Maven dependency snippet\nit.maven()\n\n\ngradle()\nString\nGenerates a Gradle implementation dependency snippet\nit.gradle()\n\n\ngradleShort()\nString\nGenerates a short-form Gradle dependency snippet\nit.gradleShort()\n\n\ngradleKotlin()\nString\nGenerates a Gradle dependency snippet in Kotlin DSL\nit.gradleKotlin()\n\n\nsbt()\nString\nGenerates an SBT dependency snippet\nit.sbt()\n\n\nivy()\nString\nGenerates an Ivy dependency snippet\nit.ivy()\n\n\n"
        }
      ]
    },
    {
      "title": "tool is the provided utility classMain methodsSome other methods",
      "content": "\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\ndebug(obj)\nvoid\nDebug object, get all available methods of the object\ntool.debug(tool)\n\n\nnewSet(items...)\nSet\nCreate Set object\ntool.newSet(\"ele1\",\"ele2\")\n\n\nnewList(items...)\nList\nCreate List object\ntool.newList(\"ele1\",\"ele2\")\n\n\nnewMap()\nMap\nCreate Map object\ntool.newMap()\n\n\nparseJson(json)\nObject\nParse JSON string\ntool.parseJson(\"{\"key\":\"value\"}\")\n\n\ntoJson(obj)\nObject\nConvert object to JSON string\ngroovy:tool.toJson([key:\"value\"])js:tool.toJson({key:\"value\"})\n\n\nprettyJson(obj)\nObject\nConvert object to formatted JSON string\ngroovy:tool.prettyJson([key:\"value\"])js:tool.prettyJson({key:\"value\"})\n\n\nheadLine(str)\nstring\nGet the first line of the string\ntool.headLine(\"multi\\nline\")\n\n\ncapitalize(str)\nstring\nCapitalize the first letter of the string\ntool.capitalize(\"words\")\n\n\nuncapitalize(str)\nstring\nMake the first letter of the string lowercase\ntool.uncapitalize(\"Words\")\n\n\nswapCase(str)\nstring\nSwap the case of each character in the string\ntool.swapCase(\"WoRdS\")\n\n\nupperCase(str)\nstring\nConvert the string to uppercase\ntool.upperCase(\"words\")\n\n\nlowerCase(str)\nstring\nConvert the string to lowercase\ntool.lowerCase(\"words\")\n\n\nreverse(str)\nstring\nReverse the string\ntool.reverse(\"sdrow\")\n\n\nrepeat(str,repeat)\nstring\nRepeat the specified string\ntool.repeat(\"x\",10)\n\n\nisNumeric(str)\nstring\nDetermine if the string is purely numeric\ntool.isNumeric(\"123\")\n\n\ntoCamelCase(str)\nstring\nConvert the string to camel case\ntool.toCamelCase(\"some words\",true)\n\n\nnow()\nstring\nGet the current time in format: yyyy-MM-dd HH:mm:ss\ntool.now()\n\n\nnow(pattern)\nstring\nGet the current time in specified format\ntool.now(\"yyyy-MM-dd\")\n\n\ntoday()\nstring\nGet the current date in format: yyyy-MM-dd\ntool.today()\n\n\nformat(time, pattern)\nstring\nFormat the timestamp\ntool.format(1000000000000,\"yyyy-MM-dd HH:mm:ss\")\n\n\n",
      "url": "/setting/tools/tool.html",
      "children": [
        {
          "title": "isAlpha",
          "url": "/setting/tools/tool.html#isalpha",
          "content": "isAlpha Desc：Checks if the CharSequence contains only Unicode letters.{@code null} will return {@code false}.An empty CharSequence (length()=0) will return {@code false}.tool.isAlpha(null)   = false\ntool.isAlpha(\"\")     = false\ntool.isAlpha(\"  \")   = false\ntool.isAlpha(\"abc\")  = true\ntool.isAlpha(\"ab2c\") = false\ntool.isAlpha(\"ab-c\") = false\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nobject\n{@code true} if only contains letters, and is non-null\n\n\n"
        },
        {
          "title": "substringBefore",
          "url": "/setting/tools/tool.html#substringbefore",
          "content": "substringBefore Desc：Gets the substring before the first occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nA {@code null} separator will return the input string.If nothing is found, the string input is returned.tool.substringBefore(null, *)      = null\ntool.substringBefore(\"\", *)        = \"\"\ntool.substringBefore(\"abc\", \"a\")   = \"\"\ntool.substringBefore(\"abcba\", \"b\") = \"a\"\ntool.substringBefore(\"abc\", \"c\")   = \"ab\"\ntool.substringBefore(\"abc\", \"d\")   = \"abc\"\ntool.substringBefore(\"abc\", \"\")    = \"\"\ntool.substringBefore(\"abc\", null)  = \"abc\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring before the first occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringAfter",
          "url": "/setting/tools/tool.html#substringafter",
          "content": "substringAfter Desc：Gets the substring after the first occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nA {@code null} separator will return the empty string if the\ninput string is not {@code null}.If nothing is found, the empty string is returned.tool.substringAfter(null, *)      = null\ntool.substringAfter(\"\", *)        = \"\"\ntool.substringAfter(*, null)      = \"\"\ntool.substringAfter(\"abc\", \"a\")   = \"bc\"\ntool.substringAfter(\"abcba\", \"b\") = \"cba\"\ntool.substringAfter(\"abc\", \"c\")   = \"\"\ntool.substringAfter(\"abc\", \"d\")   = \"\"\ntool.substringAfter(\"abc\", \"\")    = \"abc\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring after the first occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringBeforeLast",
          "url": "/setting/tools/tool.html#substringbeforelast",
          "content": "substringBeforeLast Desc：Gets the substring before the last occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nAn empty or {@code null} separator will return the input string.If nothing is found, the string input is returned.tool.substringBeforeLast(null, *)      = null\ntool.substringBeforeLast(\"\", *)        = \"\"\ntool.substringBeforeLast(\"abcba\", \"b\") = \"abc\"\ntool.substringBeforeLast(\"abc\", \"c\")   = \"ab\"\ntool.substringBeforeLast(\"a\", \"a\")     = \"\"\ntool.substringBeforeLast(\"a\", \"z\")     = \"a\"\ntool.substringBeforeLast(\"a\", null)    = \"a\"\ntool.substringBeforeLast(\"a\", \"\")      = \"a\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring before the last occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringAfterLast",
          "url": "/setting/tools/tool.html#substringafterlast",
          "content": "substringAfterLast Desc：Gets the substring after the last occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nAn empty or {@code null} separator will return the empty string if\nthe input string is not {@code null}.If nothing is found, the empty string is returned.tool.substringAfterLast(null, *)      = null\ntool.substringAfterLast(\"\", *)        = \"\"\ntool.substringAfterLast(*, \"\")        = \"\"\ntool.substringAfterLast(*, null)      = \"\"\ntool.substringAfterLast(\"abc\", \"a\")   = \"bc\"\ntool.substringAfterLast(\"abcba\", \"b\") = \"a\"\ntool.substringAfterLast(\"abc\", \"c\")   = \"\"\ntool.substringAfterLast(\"a\", \"a\")     = \"\"\ntool.substringAfterLast(\"a\", \"z\")     = \"\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring after the last occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringBetween",
          "url": "/setting/tools/tool.html#substringbetween",
          "content": "substringBetween Desc：Gets the String that is nested in between two Strings.Only the first match is returned.A {@code null} input String returns {@code null}.A {@code null} open/close returns {@code null} (no match).\nAn empty (\"\") open and close returns an empty string.tool.substringBetween(\"wxbyz\", \"\", \"\") = \"b\"\ntool.substringBetween(null, *, *)          = null\ntool.substringBetween(*, null, *)          = null\ntool.substringBetween(*, *, null)          = null\ntool.substringBetween(\"\", \"\", \"\")          = \"\"\ntool.substringBetween(\"\", \"\", \"]\")         = null\ntool.substringBetween(\"\", \"\", \"\")        = null\ntool.substringBetween(\"yabcz\", \"\", \"\")     = \"\"\ntool.substringBetween(\"yabcz\", \"y\", \"z\")   = \"abc\"\ntool.substringBetween(\"yabczyabcz\", \"y\", \"z\")   = \"abc\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nopen\nstring\n\n\n\nclose\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring, {@code null} if no match\n\n\n"
        },
        {
          "title": "substringsBetween",
          "url": "/setting/tools/tool.html#substringsbetween",
          "content": "substringsBetween Desc：Searches a String for substrings delimited by a start and end tag,returning all matching substrings in an array.A {@code null} input String returns {@code null}.A {@code null} open/close returns {@code null} (no match).\nAn empty (\"\") open/close returns {@code null} (no match).tool.substringsBetween(\"abc\", \"\", \"\") = \"a\",\"b\",\"c\"\ntool.substringsBetween(null, *, *)            = null\ntool.substringsBetween(*, null, *)            = null\ntool.substringsBetween(*, *, null)            = null\ntool.substringsBetween(\"\", \"\", \"\")          = \nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nopen\nstring\n\n\n\nclose\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\na String Array of substrings, or {@code null} if no match\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "split",
          "url": "/setting/tools/tool.html#split",
          "content": "split Desc：Splits the provided text into an array, separators specified.This is an alternative to using StringTokenizer.The separator is not included in the returned String array.Adjacent separators are treated as one separator.\nFor more control over the split use the StrTokenizer class.A {@code null} input String returns {@code null}.A {@code null} separatorChars splits on whitespace.tool.split(null, *)         = null\ntool.split(\"\", *)           = \ntool.split(\"abc def\", null) = \"abc\", \"def\"\ntool.split(\"abc def\", \" \")  = \"abc\", \"def\"\ntool.split(\"abc  def\", \" \") = \"abc\", \"def\"\ntool.split(\"ab:cd:ef\", \":\") = \"ab\", \"cd\", \"ef\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparatorChars\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\nan array of parsed Strings, {@code null} if null String input\n\n\n\nstring\n\n\n\n"
        }
      ]
    },
    {
      "title": "regex is a provided tool for regular expressions",
      "content": "",
      "url": "/setting/tools/regex.html",
      "children": [
        {
          "title": "getGroup0",
          "url": "/setting/tools/regex.html#getgroup0",
          "content": "getGroup0 Desc：return the group 0 value($0) if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "getGroup1",
          "url": "/setting/tools/regex.html#getgroup1",
          "content": "getGroup1 Desc：return the group 1 value($1) if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "get",
          "url": "/setting/tools/regex.html#get",
          "content": "get Desc：return the special group value if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\ngroupIndex\ninteger\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "getAllGroups",
          "url": "/setting/tools/regex.html#getallgroups",
          "content": "getAllGroups Desc：return all group value as List if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\npattern\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "extract",
          "url": "/setting/tools/regex.html#extract",
          "content": "extract Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\ntemplate\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "delFirst",
          "url": "/setting/tools/regex.html#delfirst",
          "content": "delFirst Desc：Remove the first subString of the input String that matches thepattern with the given replacement string.Params：\n\nname\ntype\ndesc\n\n\n\n\npattern\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "delAll",
          "url": "/setting/tools/regex.html#delall",
          "content": "delAll Desc：Remove the first subString of the input String that matches thepatternParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "delBefore",
          "url": "/setting/tools/regex.html#delbefore",
          "content": "delBefore Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "findAllGroup0",
          "url": "/setting/tools/regex.html#findallgroup0",
          "content": "findAllGroup0 Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "findAllGroup1",
          "url": "/setting/tools/regex.html#findallgroup1",
          "content": "findAllGroup1 Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "findAll",
          "url": "/setting/tools/regex.html#findall",
          "content": "findAll Params：\n\nname\ntype\ndesc\n\n\n\n\npattern\nobject\n\n\n\n  |─pattern\nstring\nThe original regular-expression pattern string.\n\n\n  |─flags\ninteger\nThe original pattern flags.\n\n\ncontent\nstring\n\n\n\ngroup\ninteger\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "count",
          "url": "/setting/tools/regex.html#count",
          "content": "count Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\ninteger\n\n\n\n"
        },
        {
          "title": "contains",
          "url": "/setting/tools/regex.html#contains",
          "content": "contains Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nobject\n\n\n\n"
        },
        {
          "title": "isMatch",
          "url": "/setting/tools/regex.html#ismatch",
          "content": "isMatch Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nobject\n\n\n\n"
        },
        {
          "title": "replaceAll",
          "url": "/setting/tools/regex.html#replaceall",
          "content": "replaceAll Params：\n\nname\ntype\ndesc\n\n\n\n\ncontent\nstring\n\n\n\nregex\nstring\n\n\n\nreplacementTemplate\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "escape",
          "url": "/setting/tools/regex.html#escape",
          "content": "escape Desc：escape for Regex keywordsParams：\n\nname\ntype\ndesc\n\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        }
      ]
    },
    {
      "title": "logger - logging utility class",
      "content": "logger is a provided logging utility class that allows you to print logs to the console. The visibility of logs depends on the log level settings, and logs with certain levels may not be displayed.\n\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\nlog(str)\nvoid\nPrints a log message\nlogger.log(\"some log\")\n\n\ntrace(str)\nvoid\nPrints a log message(log level: trace)\nlogger.trace(\"some log\")\n\n\ndebug(str)\nvoid\nPrints a log message(log level: debug)\nlogger.debug(\"some log\")\n\n\ninfo(str)\nvoid\nPrints a log message(log level: info)\nlogger.info(\"some log\")\n\n\nwarn(str)\nvoid\nPrints a log message(log level: warn)\nlogger.warn(\"some log\")\n\n\nerror(str)\nvoid\nPrints a log message(log level: error)\nlogger.error(\"some log\")\n\n\n",
      "url": "/setting/tools/logger.html",
      "children": []
    },
    {
      "title": "helper - Special Helper Class (v1.6.1+)Methods",
      "content": "\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\nfindClass(str)\nclass\nRetrieves a class similar to Class.forName()\nhelper.findClass(\"java.lang.String\")\n\n\nresolveLink(str)\nclass\nResolves the link in the given string\nhelper.resolveLink(\"{@link java.lang.String}\")\n\n\nresolveLinks(str)\narray\nResolves all link occurrences in the given string\nhelper.resolveLink(\"{@link java.lang.String},{@link java.lang.Long}\")\n\n\n",
      "url": "/setting/tools/helper.html",
      "children": []
    },
    {
      "title": "httpClientis a provided helper class for HTTP-related tasks (v1.9.0+)requestresponsecookieStore",
      "content": "Can be created by httpClient\nCan be obtained by request.call()\nCan be obtained by httpClient.cookieStore()\n",
      "url": "/setting/tools/httpClient.html",
      "children": [
        {
          "title": "Main Methods",
          "url": "/setting/tools/httpClient.html#main-methods",
          "content": "Main Methods\n\nMethod\nReturn Type\nDescription\nExample\n\n\n\n\ncookieStore()\ncookieStore\nObtain cookie manager\nhttpClient.cookieStore()\n\n\nrequest()\nrequest\nCreate request\nhttpClient.request()\n\n\ndelete()\nrequest\nCreate request, set method to DELETE\nhttpClient.delete()\n\n\ndelete(str)\nrequest\nCreate request, set method to DELETE, set url\nhttpClient.delete(\"https://easyapi.itangcent.com\")\n\n\nget()\nrequest\nCreate request, set method to GET\nhttpClient.get()\n\n\nget(str)\nrequest\nCreate request, set method to GET, set url\nhttpClient.get(\"https://easyapi.itangcent.com\")\n\n\noptions()\nrequest\nCreate request, set method to OPTIONS\nhttpClient.options()\n\n\noptions(str)\nrequest\nCreate request, set method to OPTIONS, set url\nhttpClient.options(\"https://easyapi.itangcent.com\")\n\n\npost()\nrequest\nCreate request, set method to POST\nhttpClient.post()\n\n\npost(str)\nrequest\nCreate request, set method to POST, set url\nhttpClient.post(\"https://easyapi.itangcent.com\")\n\n\nput()\nrequest\nCreate request, set method to PUT\nhttpClient.put()\n\n\nput(str)\nrequest\nCreate request, set method to PUT, set url\nhttpClient.put(\"https://easyapi.itangcent.com\")\n\n\ntrace()\nrequest\nCreate request, set method to TRACE\nhttpClient.trace()\n\n\ntrace(str)\nrequest\nCreate request, set method to TRACE, set url\nhttpClient.trace(\"https://easyapi.itangcent.com\")\n\n\n"
        },
        {
          "title": "Methods:",
          "url": "/setting/tools/httpClient.html#methods",
          "content": "Methods:\n\nMethod\nReturn Type\nDescription\nExample\n\n\n\n\naddCookie(cookie)\nvoid\nAdd a cookie\nhttpClient.cookieStore().addCookie(cookie)\n\n\naddCookies(cookies)\nvoid\nAdd multiple cookies\nhttpClient.cookieStore().addCookies(cookies)\n\n\nclear()\nvoid\nClear cookie\nhttpClient.cookieStore().clear()\n\n\ncookies()\narray\nGet current cookies\nhttpClient.cookieStore().cookies()\n\n\nnewCookie()\ncookie\nCreate a cookie, note: it will not be automatically added to cookieStore, you need to call addCookie to add it manually\nhttpClient.cookieStore().newCookie()\n\n\n"
        }
      ]
    },
    {
      "title": "localStorage - The local storage (v1.9.1+)",
      "content": "When no group is specified, all operations are performed in the default group.\nBy default, the localStorage is stored in the user's root directory and can be accessed across different projects. If you want to restrict it to the current project, you need to specify a group for all operations.\nNote: The value in set(key, value) and the value obtained from get(key) are not the same object.\ndef obj = [\"a\":\"b\"]localStorage.set(\"key\",obj)\nlocalStorage.get(\"key\")[\"a\"]=c //Modifying the object obtained from get(\"key\") does not affect the original obj.\nobj[\"a\"] == \"b\" //obj remains [\"a\":\"b\"]\n",
      "url": "/setting/tools/localStorage.html",
      "children": [
        {
          "title": "Methods",
          "url": "/setting/tools/localStorage.html#methods",
          "content": "Methods\n\nMethod\nReturn Value\nDescription\nExample\n\n\n\n\nset(key, value)\nvoid\nSet a key-value pair\nsession.set(\"key\", \"value\")\n\n\nset(group, key, value)\nvoid\nSet a key-value pair (specified group)\nsession.set(\"groupA\",\"key\", \"value\")\n\n\nget(key)\nobject\nRetrieve a stored value by key\nsession.get(\"key\")\n\n\nget(group, key)\nobject\nRetrieve a stored value by key (specified group)\nsession.get(\"groupA\", \"key\")\n\n\npop(key)\nobject\nPop an element from a queue\nsession.pop(\"key\")\n\n\npop(group, key)\nobject\nPop an element from a queue (specified group)\nsession.pop(\"groupA\", \"key\")\n\n\npeek(key)\nobject\nView the first element in a queue\nsession.peek(\"key\")\n\n\npeek(group, key)\nobject\nView the first element in a queue (specified group)\nsession.peek(\"groupA\", \"key\")\n\n\npush(key, value)\nobject\nAdd an element to a queue\nsession.push(\"key\", value)\n\n\npush(group, key, value)\nobject\nAdd an element to a queue (specified group)\nsession.push(\"groupA\", \"key\", value)\n\n\nremove(key)\nvoid\nRemove a stored value\nsession.remove(\"key\")\n\n\nremove(group, key)\nvoid\nRemove a stored value(specified group)\nsession.remove(\"groupA\", \"key\")\n\n\nclear()\nvoid\nRemove all stored values(default group only)\nsession.clear()\n\n\nclear(group)\nvoid\nRemove all stored values(specified group)\nsession.clear(\"groupA\")\n\n\nkeys()\narray\nGet all keys of stored values(default group only)\nsession.keys()\n\n\nkeys(group)\narray\nGet all keys of stored values(specified group)\nsession.keys(\"groupA\")\n\n\n"
        }
      ]
    },
    {
      "title": "session - A temporary storage(v1.9.1+)",
      "content": "When no group is specified, all operations are performed in the default group.\nThe session is stored in memory and cannot be accessed across different projects.\nNote: The value in set(key, value) and the value obtained from get(key) refer to the same object.\ndef obj = [\"a\":\"b\"]session.set(\"key\",obj)\nsession.get(\"key\")[\"a\"]=\"c\" //Modifying the object obtained from get(\"key\") will affect the original obj.\nobj[\"a\"] == \"c\" //obj has been changed to [\"a\":\"c\"]\n",
      "url": "/setting/tools/session.html",
      "children": [
        {
          "title": "Methods",
          "url": "/setting/tools/session.html#methods",
          "content": "Methods\n\nMethod\nReturn Value\nDescription\nExample\n\n\n\n\nset(key, value)\nvoid\nSet a key-value pair\nsession.set(\"key\", \"value\")\n\n\nset(group, key, value)\nvoid\nSet a key-value pair (specified group)\nsession.set(\"groupA\",\"key\", \"value\")\n\n\nget(key)\nobject\nRetrieve a stored value by key\nsession.get(\"key\")\n\n\nget(group, key)\nobject\nRetrieve a stored value by key (specified group)\nsession.get(\"groupA\", \"key\")\n\n\npop(key)\nobject\nPop an element from a queue\nsession.pop(\"key\")\n\n\npop(group, key)\nobject\nPop an element from a queue (specified group)\nsession.pop(\"groupA\", \"key\")\n\n\npeek(key)\nobject\nView the first element in a queue\nsession.peek(\"key\")\n\n\npeek(group, key)\nobject\nView the first element in a queue (specified group)\nsession.peek(\"groupA\", \"key\")\n\n\npush(key, value)\nobject\nAdd an element to a queue\nsession.push(\"key\", value)\n\n\npush(group, key, value)\nobject\nAdd an element to a queue (specified group)\nsession.push(\"groupA\", \"key\", value)\n\n\nremove(key)\nvoid\nRemove a stored value\nsession.remove(\"key\")\n\n\nremove(group, key)\nvoid\nRemove a stored value(specified group)\nsession.remove(\"groupA\", \"key\")\n\n\nclear()\nvoid\nRemove all stored values(default group only)\nsession.clear()\n\n\nclear(group)\nvoid\nRemove all stored values(specified group)\nsession.clear(\"groupA\")\n\n\nkeys()\narray\nGet all keys of stored values(default group only)\nsession.keys()\n\n\nkeys(group)\narray\nGet all keys of stored values(specified group)\nsession.keys(\"groupA\")\n\n\n"
        }
      ]
    },
    {
      "title": "config - Configuration Reading Tool (v1.9.5+)",
      "content": "Read the current configuration.\n",
      "url": "/setting/tools/config.html",
      "children": [
        {
          "title": "Main Methods",
          "url": "/setting/tools/config.html#main-methods",
          "content": "Main Methods\n\nMethod\nReturn Value\nDescription\nExample\n\n\n\n\nget(key)\nstring\nRetrieve a value from the configuration\nconfig.get(\"key\")\n\n\ngetValues(key)\narray\nRetrieve multiple values from the configuration\nconfig.getValues(\"key\")\n\n\nresolveProperty(str)\nstring\nResolve placeholders in a string\nconfig.resolveProperty(\"${key}\")\n\n\n"
        }
      ]
    },
    {
      "title": "api refers to the current exported api",
      "content": "The application object only provides methods like api.method()✅, not properties like api.property❎.\n",
      "url": "/setting/tools/api.html",
      "children": [
        {
          "title": "Main Methods",
          "url": "/setting/tools/api.html#main-methods",
          "content": "Main Methods\n\nMethod\nReturn Type\nDescription\nExample\n\n\n\n\nname()\nstring\napi name\napi.name()\n\n\nsetName(\"name\")\nvoid\nSet api name\napi.setName(\"xxx\")\n\n\ndesc()\nstring\napi description\napi.desc()\n\n\nsetDesc(\"desc\")\nvoid\nSet api description\napi.setDesc(\"This is...\")\n\n\nappendDesc(\"desc\")\nvoid\nAppend api description\napi.appendDesc(\"This is...\")\n\n\nmethod()\nstring\napi's Http Method\napi.method()\n\n\nsetMethod(\"method\")\nvoid\nSet api's Http Method\napi.setMethod(\"POST\")\n\n\nsetMethodIfMissed(\"method\")\nvoid\nSet api's Http Method if it doesn't exist\napi.setMethodIfMissed(\"POST\")\n\n\npath()\nstring\napi path, if this api has multiple paths, return the first one\napi.path()\n\n\npaths()\nstring[]\nArray of api paths\napi.paths()\n\n\nsetPath(\"path\")\nvoid\nSet api path\napi.setPath(\"/a/b/c\")\n\n\nsetPaths([\"path\"*])\nvoid\nSet api paths\napi.setPaths([\"/a/b/c\".\"/a/b/d\"])\n\n\nbodyAttr()\nstring\nDescription of api body\napi.bodyAttr()\n\n\nsetBody(object)\nvoid\nSet api body\napi.setBody([\"x\":\"y\"])\n\n\nsetBodyClass(\"class\")\nvoid\nSet api body through class name\napi.setBodyClass(\"com.itangcent.XxxxDTO\")\n\n\nsetJsonBody(object,\"attr\")\nvoid\nSet api body\napi.setBody([\"x\":\"y\"],\"Description\")\n\n\naddModelAsParam(object)\nvoid\nSet api parameters\napi.addModelAsParam([\"x\":\"y\"])\n\n\naddModelClass(\"class\")\nvoid\nSet api parameters through class name\napi.addModelClass(\"com.itangcent.XxxxDTO\")\n\n\naddParam(paramName,defaultVal,desc)\nvoid\nAdd parameter\napi.addParam(\"name\",\"tang\",\"user name\")\n\n\naddParam(paramName,defaultVal,required,desc)\nvoid\nAdd parameter\napi.addParam(\"name\",\"tang\",false,\"user name\")\n\n\nsetParam(paramName,defaultVal,required,desc)\nvoid\nSet parameter (existing parameter will be overridden)\napi.setParam(\"name\",\"tang\",false,\"user name\")\n\n\naddFormParam(paramName,defaultVal,desc)\nvoid\nAdd form parameter\napi.addFormParam(\"name\",\"tang\",\"user name\")\n\n\naddFormParam(paramName,defaultVal,required,desc)\nvoid\nAdd form parameter\napi.addFormParam(\"name\",\"tang\",false,\"user name\")\n\n\nsetFormParam(paramName,defaultVal,required,desc)\nvoid\nSet form parameter (existing parameter will be overridden)\napi.setFormParam(\"name\",\"tang\",false,\"user name\")\n\n\naddFormFileParam(paramName,required,desc)\nvoid\nAdd file type form parameter\napi.setFormParam(\"avatar\",false,\"user's avatar\")\n\n\nsetFormFileParam(paramName,required,desc)\nvoid\nSet file type form parameter (existing parameter will be overridden)\napi.setFormFileParam(\"avatar\",false,\"user's avatar\")\n\n\naddPathParam(paramName,desc)\nvoid\nAdd path parameter\napi.addPathParam(\"id\",\"user id\")\n\n\naddPathParam(paramName,value,desc)\nvoid\nAdd path parameter\napi.addPathParam(\"id\",\"1\",\"user id\")\n\n\nsetPathParam(paramName,value,desc)\nvoid\nSet path parameter (existing parameter will be overridden)\napi.setPathParam(\"id\",\"1\",\"user id\")\n\n\nheaders()\narray\nGet all headers of api\napi.headers()\n\n\nheader(\"name\")\nHeader\nGet the specified header of api by name\napi.header(\"Content-Type\")\n\n\nheaders(\"name\")\narray\nGet all headers of api by specified name\napi.headers(\"token\")\n\n\nremoveHeader(\"name\")\nHeader\nRemove the specified header of api by name\napi.removeHeader(\"token\")\n\n\naddHeader(\"name\",\"value\")\nvoid\nAdd header\napi.addHeader(\"Content-Type\",\"application/json\")\n\n\naddHeaderIfMissed(\"name\",\"value\")\nvoid\nAdd header if specified header doesn't exist\napi.addHeaderIfMissed(\"Content-Type\",\"application/json\")\n\n\naddHeader(\"name\",\"value\",required,\"desc\")\nvoid\nAdd header\napi.addHeader(\"Content-Type\",\"application/json\",true,\"header which is used to indicate the original media type of the resource\")\n\n\nsetHeader(\"name\",\"value\",required,\"desc\")\nvoid\nSet header (existing header will be overridden)\napi.setHeader(\"Content-Type\",\"application/json\",true,\"header which is used to indicate the original media type of the resource\")\n\n\nBelow are response related methods\n-----\n-----\n-----\n\n\nsetResponseBody(body)\nvoid\nSet api response bodyDefault bodyType is raw\napi.setResponseBody([\"x\":\"y\"])\n\n\nsetResponseBody(\"bodyType\",body)\nvoid\nSet api response bodybodyType: raw/json/xml\napi.setResponseBody(\"json\",[\"x\":\"y\"])\n\n\nsetResponseBodyClass(\"bodyClass\")\nvoid\nSet api response body through class nameDefault bodyType is raw\napi.setResponseBody(\"com.itangcent.XxxxVO\")\n\n\nsetResponseBodyClass(\"bodyType\",\"bodyClass\")\nvoid\nSet api response body through class namebodyType: raw/json/xml\napi.setResponseBody(\"json\",\"com.itangcent.XxxxVO\")\n\n\nsetResponseCode(code)\nvoid\nSet response code\napi.setResponseCode(200)\n\n\nappendResponseBodyDesc(\"bodyDesc\")\nvoid\nSet response description\napi.appendResponseBodyDesc(\"user info\")\n\n\naddResponseHeader(\"name\",\"value\")\nvoid\nAdd response header\napi.addResponseHeader(\"Content-Type\",\"application/json\")\n\n\naddResponseHeader(\"name\",\"value\",required,\"desc\")\nvoid\nAdd response header\napi.addResponseHeader(\"Content-Type\",\"application/json\",true,\"header which is used to indicate the original media type of the resource\")\n\n\nsetResponseHeader(\"name\",\"value\",required,\"desc\")\nvoid\nSet response header\napi.setResponseHeader(\"Content-Type\",\"application/json\",true,\"header which is used to indicate the original media type of the resource\")\n\n\n"
        }
      ]
    },
    {
      "title": "runtime provides runtime information (v2.5.5+)",
      "content": "",
      "url": "/setting/tools/runtime.html",
      "children": [
        {
          "title": "Methods",
          "url": "/setting/tools/runtime.html#methods",
          "content": "Methods\n\nMethod\nReturn Type\nDescription\nExample\n\n\n\n\nchannel()\nstring\nGet the current export channel: markdown/postman\nruntime.channel()\n\n\nprojectName()\nstring\nGet the current project name\nruntime.projectName()\n\n\nprojectPath()\nstring\nGet the current project path\nruntime.projectPath()\n\n\nmodule()\nstring\nGet the current module name (after applying rules)\nruntime.module()\n\n\nmoduleName()\nstring\nGet the original module name\nruntime.moduleName()\n\n\nfilePath()\nstring\nGet the path of the file being parsed\nruntime.filePath()\n\n\ngetBean()\nobject\nGet a bean from the plugin\nruntime.getBean(\"com.itangcent.intellij.jvm.DocHelper\")\n\n\nasync()\nnull\nExecute operations asynchronously\nruntime.async{logger.info(\"async\")}\n\n\n"
        }
      ]
    },
    {
      "title": "fieldContext provides context during the field parsing process",
      "content": "When parsing complex nested classes, fieldContext can be used to obtain information such as the path of the current field in the final result.",
      "url": "/setting/tools/fieldContext.html",
      "children": [
        {
          "title": "Main Methods",
          "url": "/setting/tools/fieldContext.html#main-methods",
          "content": "Main Methods\n\nmethod\nreturn\ndesc\ndemo\n\n\n\n\npath()\nstring\nCurrent full path\nfieldContext.path()\n\n\nproperty(\"propertyName\")\nstring\nProvides the full path of the specified field\nfieldContext.property(\"xxx\")\n\n\n"
        },
        {
          "title": "Example",
          "url": "/setting/tools/fieldContext.html#example",
          "content": "ExampleFor the classes below:class A{    B b;\n}\nclass B{\n    C c;\n}\nclass C{\n    String d;\n    String e;\n}\n\nWhen parsing the d field:fieldContext.path() will return b.c\nfieldContext.property(\"e\") will return b.c.e\n"
        }
      ]
    },
    {
      "title": "Groovy Local Extensions",
      "content": "This feature has been deprecated. Please refrain from using it.\n",
      "url": "/setting/groovy-ext-config.html",
      "children": [
        {
          "title": "Introduction:",
          "url": "/setting/groovy-ext-config.html#introduction",
          "content": "Introduction:In extremely exceptional cases where fulfilling requirements through simple configuration is not possible, Groovy extensions can be utilized to achieve highly customized functionality.\nCompared to regular configurations, this approach requires developers to have a certain level of technical expertise, including knowledge of Groovy and the structure of the current plugin.\nwiki\noffical\ndemo\n"
        },
        {
          "title": "Usage Steps",
          "url": "/setting/groovy-ext-config.html#usage-steps",
          "content": "Usage Steps\nCreate a directory named /.easyapi/ext in your project directory.\n\n\nCreate an extension file named `${ActionName}Ext.groovy``. The currently supported actions are:\n\nApiCallAction\nApiDashBoardAction\nYApiDashBoardAction\nFieldsToJsonAction\nMarkdownExportAction\nPostmanExportAction\n\n\n\nDeclare the extension class in the extension file:\n\nclass ActionNameExt implements ActionExt {\n    void init(ActionContext.ActionContextBuilder builder) {\n        //Here, you can use the bind method to inject customized components and implement the desired functionality.\n        builder.bind(Xxx.class, KtHelper.INSTANCE.ktFunction({\n            it.to(Yyy.class).in(com.google.inject.Singleton.class)\n            return null\n        }))\n    }\n}\n"
        },
        {
          "title": "demo",
          "url": "/setting/groovy-ext-config.html#usage-steps-demo",
          "content": "demoYapiExportActionExt.groovy\nimport com.intellij.psi.*import com.itangcent.common.model.Request\nimport com.itangcent.idea.plugin.api.export.ClassExporter\nimport com.itangcent.idea.plugin.api.export.SpringRequestClassExporter\nimport com.itangcent.idea.plugin.api.export.yapi.YapiClassExportRuleKeys\nimport com.itangcent.idea.plugin.api.export.yapi.YapiRequestKitKt\nimport com.itangcent.idea.plugin.script.ActionExt\nimport com.itangcent.idea.plugin.utils.KtHelper\nimport com.itangcent.intellij.context.ActionContext\n\nimport java.util.stream.Collectors\nimport java.util.stream.Stream\n\nclass YapiExportActionExt implements ActionExt {\n\n    void init(ActionContext.ActionContextBuilder builder) {\n\n        builder.bind(ClassExporter.class, KtHelper.INSTANCE.ktFunction({\n            it.to(CustomClassExporter.class).in(com.google.inject.Singleton.class)\n            return null\n        }))\n\n    }\n\n    static class CustomClassExporter extends SpringRequestClassExporter {\n\n        void processCompleted(PsiMethod method, Request request) {\n            super.processCompleted(method, request)\n\n            String tags = ruleComputer.computer(YapiClassExportRuleKeys.TAG, method)\n            if (tags != null && !tags.isEmpty()) {\n                YapiRequestKitKt.setTags(request, Stream.of(tags.split(\"\\n\"))\n                        .map { it.trim() }\n                        .filter { !it.isEmpty() }\n                        .collect(Collectors.toList())\n                )\n            }\n\n            String status = ruleComputer.computer(YapiClassExportRuleKeys.STATUS, method)\n            logger.info(YapiRequestKitKt.class.toString())\n            YapiRequestKitKt.setStatus(request, status)\n        }\n    }\n}\n"
        },
        {
          "title": "Note",
          "url": "/setting/groovy-ext-config.html#note",
          "content": "Note"
        },
        {
          "title": "Due to the plugin source code being written in Kotlin, some syntactic sugar cannot be used in Groovy.",
          "url": "/setting/groovy-ext-config.html#note-due-to-the-plugin-source-code-being-written-in-kotlin,-some-syntactic-sugar-cannot-be-used-in-groovy.",
          "content": "Due to the plugin source code being written in Kotlin, some syntactic sugar cannot be used in Groovy.The extension methods declared in Kotlin are as follows:\nfun Doc.setTags(tags: List?) {    ...\n}\nIn Groovy, you can utilize these extension methods as shown below:\nYapiRequestKitKt.setTags(request,tags)"
        }
      ]
    }
  ],
  "demo": [
    {
      "title": "demo projects",
      "content": "\nspringboot\n\n\nspringboot-webflux\n\n\nkotlin\n\n",
      "url": "/demo/index.html",
      "children": []
    }
  ],
  "framwork": [
    {
      "title": "Supporting Different Frameworks Using Configuration",
      "content": "Due to performance considerations, the built-in recommended configurations do not cover all features of every framework.\nIf you need to add support for a specific framework, please refer to setting\n",
      "url": "/framwork/index.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/springboot.html",
      "children": [
        {
          "title": "The built-in recommended configuration",
          "url": "/framwork/springboot.html#the-built-in-recommended-configuration",
          "content": "The built-in recommended configurationResolve HttpEntity/RequestEntity/ResponseEntity\n#resolve HttpEntity/RequestEntity/ResponseEntity###set resolveProperty = false\njson.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object\njson.rule.convert[#regex:org.springframework.http.HttpEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.RequestEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object\njson.rule.convert[#regex:org.springframework.http.ResponseEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object\n###set resolveProperty = true\nLoad spring boot configuration properties\n#Import spring propertiesproperties.additional=${module_path}/src/main/resources/application.properties\nproperties.additional=${module_path}/src/main/resources/application.yml\nproperties.additional=${module_path}/src/main/resources/application.yaml\nUse 'server.servlet.context-path' as prefix path by default\n#Resolve spring properties###set ignoreUnresolved = true\nclass.prefix.path=${server.servlet.context-path}\n###set ignoreUnresolved = false\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/springboot-webflux.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/swagger.html",
      "children": [
        {
          "title": "The default recommended settings do not include support for swagger",
          "url": "/framwork/swagger.html#the-default-recommended-settings-do-not-include-support-for-swagger",
          "content": "The default recommended settings do not include support for swagger"
        },
        {
          "title": "swagger2",
          "url": "/framwork/swagger.html#the-default-recommended-settings-do-not-include-support-for-swagger-swagger2",
          "content": "swagger2To support swagger2, add swagger.config and swagger.advanced.config in Preferences(Settings) > Other Settings > EasyApi > Remote."
        },
        {
          "title": "swagger3",
          "url": "/framwork/swagger.html#the-default-recommended-settings-do-not-include-support-for-swagger-swagger3",
          "content": "swagger3To support swagger3, add swagger3.config in Preferences(Settings) > Other Settings > EasyApi > Remote."
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/javax_validation.html",
      "children": []
    },
    {
      "title": "Jackson",
      "content": "Provides partial support through recommended configurations, but for performance reasons, some features are not enabled by default. If you need to enable them, please select them in the recommended configurations.\n\nAnnotation\nSupport\nEnable By Default\n\n\n\n\nJsonProperty\nYES\nYES\n\n\nJsonIgnore\nYES\nYES\n\n\nJsonFormat\nYES\nNO\n\n\nJsonPropertyOrder\nYES\nNO\n\n\nJsonIgnoreProperties\nYES\nNO\n\n\nJsonUnwrapped\nYES\nNO\n\n\nJsonNaming\nYES\nNO\n\n\n",
      "url": "/framwork/jackson.html",
      "children": []
    }
  ],
  "QA": [
    {
      "title": "",
      "content": "",
      "url": "/qa/index.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/add_confg.html",
      "children": [
        {
          "title": "How to Add Configuration Files",
          "url": "/qa/add_confg.html#how-to-add-configuration-files",
          "content": "How to Add Configuration Filessee local-file-config"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/group_apis_to_folder.html",
      "children": [
        {
          "title": "How to Organize APIs into Specified Folders",
          "url": "/qa/group_apis_to_folder.html#how-to-organize-apis-into-specified-folders",
          "content": "How to Organize APIs into Specified Folders\nmodule is used for categorizing APIs.\n\nWhen exporting to postman, each module will be treated as a separate folder.\n\n\n\nBy default, the current module name is used (or the project name for single-module projects).\n\n\nDefault recommended configuration:\n\n#find module from comment tag module=#module\nComment on the class like this:\n/** * Mock Apis\n *\n * @module mock\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/ignore_api.html",
      "children": [
        {
          "title": "How to Ignore APIs",
          "url": "/qa/ignore_api.html#how-to-ignore-apis",
          "content": "How to Ignore APIsAdd configuration:\n#ignore class or method which has comment tag 'ignore' ignore=#ignore\nComment @ignore on the class to ignore the current class:\n/** * Mock Apis\n *\n * @ignore\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\nComment @ignore on the method to ignore the current API:\n/** * Mock Apis\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n     /**\n      * Mock String\n      * @ignore\n      */\n     @GetMapping(\"/string\")\n     public String mockString() {\n         return Result.success(\"mock string\");\n     }\n\n}\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/api_doc.html",
      "children": [
        {
          "title": "How to Set the Name/Description for APIs/Folders",
          "url": "/qa/api_doc.html#how-to-set-the-namedescription-for-apisfolders",
          "content": "How to Set the Name/Description for APIs/Folders\nGenerally:\n/**\n* The first line of comments serves as the title for the folder.\n* The remaining lines of comments serve as the description for the folder.\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * The first line of comments serves as the title for the API.\n    * The remaining lines of comments serve as the description for the API.\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n\n\n\nFor special requirements, refer to:class.doc | method.doc | api.name\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/api_deprecated.html",
      "children": [
        {
          "title": "How to Indicate in the API/Folder Description that the API/Folder has been Deprecated",
          "url": "/qa/api_deprecated.html#how-to-indicate-in-the-apifolder-description-that-the-apifolder-has-been-deprecated",
          "content": "How to Indicate in the API/Folder Description that the API/Folder has been Deprecated\nThe default recommended configuration is as follows:\nmethod.doc[#deprecated]=groovy:\"\\n「deprecated」\" + it.doc(\"deprecated\")\nmethod.doc[@java.lang.Deprecated]=「deprecated」\nmethod.doc[@kotlin.Deprecated]=groovy:\"\\n「deprecated」\" + it.ann(\"kotlin.Deprecated\",\"message\")\n\nmethod.doc[groovy:it.containingClass().hasDoc(\"deprecated\")]=groovy:\"\\n「deprecated」\" + it.containingClass().doc(\"deprecated\")\nmethod.doc[groovy:it.containingClass().hasAnn(\"java.lang.Deprecated\")]=「deprecated」\nmethod.doc[groovy:it.containingClass().hasAnn(\"kotlin.Deprecated\")]=groovy:\"\\n「deprecated」 \" + it.containingClass().ann(\"kotlin.Deprecated\",\"message\")\n\n\n\n\nUse annotations or comments to mark the API as deprecated:\n/**\n* You can use the `@Deprecated` annotation to indicate the API is deprecated,\n* or use the `@deprecated` comment.\n*\n* @deprecated Use {@link #methodName3(String)} instead.\n*/\n@Deprecated\n@RequestMapping(value = \"/pathOfApi2\")\npublic Result methodName2(@RequestBody MockDtoOrVo jsonModel){\n    ...\n}\n\n\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/api_permission_javax.html",
      "children": [
        {
          "title": "How to Declare the Required Permissions for an API in the API Description (javax annotation security)",
          "url": "/qa/api_permission_javax.html#how-to-declare-the-required-permissions-for-an-api-in-the-api-description-javax-annotation-security",
          "content": "How to Declare the Required Permissions for an API in the API Description (javax annotation security)Consider adding the following configuration:\n## security descriptionmethod.doc[@javax.annotation.security.RolesAllowed]=groovy:\"require role:\"+it.ann(\"javax.annotation.security.RolesAllowed\")\nExample:\n /** * The first line of comments serves as the title for the folder.\n * The remaining lines of comments serve as the description for the folder.\n */\n @RestController\n @RequestMapping(value = \"mock\")\n public class MockCtrl {\n\n     /**\n     * The first line of comments serves as the title for the API.\n     * The remaining lines of comments serve as the description for the API.\n     */\n     @GetMapping(\"/string\")\n     @RolesAllowed(\"admin\")\n     public String mockString() {\n         return Result.success(\"mock string\");\n     }\n }\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/api_permission_spring.html",
      "children": [
        {
          "title": "How to Declare the Required Permissions for an API in the API Description (spring security)",
          "url": "/qa/api_permission_spring.html#how-to-declare-the-required-permissions-for-an-api-in-the-api-description-spring-security",
          "content": "How to Declare the Required Permissions for an API in the API Description (spring security)Consider adding the following configuration:\n## security descriptiondoc.method[@org.springframework.security.access.prepost.PreAuthorize]=groovy:```\n   def preAuthorize = it.ann(\"org.springframework.security.access.prepost.PreAuthorize\")\n   if(tool.nullOrBlank(preAuthorize)){\n      return\n   }\n   def role = regex.getGroup1(\"hasRole\\\\('(.*?)'\\\\)\",preAuthorize)\n   return \"require role: $role\"\n```\nExample:\n/** * The first line of comments serves as the title for the folder.\n   * The remaining lines of comments serve as the description for the folder.\n   */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n      /**\n       * The first line of comments serves as the title for the API.\n      * The remaining lines of comments serve as the description for the API.\n      */\n      @GetMapping(\"/string\")\n      @PreAuthorize(\"hasRole('admin')\")\n      public String mockString() {\n         return Result.success(\"mock string\");\n      }\n}\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/ignore_fields.html",
      "children": [
        {
          "title": "How to Ignore Certain Fields",
          "url": "/qa/ignore_fields.html#how-to-ignore-certain-fields",
          "content": "How to Ignore Certain Fields\nUse the rule:json.rule.field.ignore\n\nTo ignore fields with a specific name:\n\n## ignore field 'log'\njson.rule.field.ignore=log\n\n\nTo ignore fields of a specific type:\n\n## ignore field 'log' typed xxx.xxx.Log\njson.rule.field.ignore=groovy:it.type().name()==\"xxx.xxx.Log\"\n\n\nTo ignore fields with a specific qualifier:\n\n#ignore transient field\njson.rule.field.ignore=groovy:it.hasModifier(\"transient\")\n\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/type_convert.html",
      "children": [
        {
          "title": "How to Convert Specified Types to Another Type for Processing",
          "url": "/qa/type_convert.html#how-to-convert-specified-types-to-another-type-for-processing",
          "content": "How to Convert Specified Types to Another Type for ProcessingTreat java.time.LocalDateTime as a yyyy-mm-dd formatted string:\n#Resolve 'java.time.LocalDateTime' as 'java.lang.String'json.rule.convert[java.time.LocalDateTime]=java.lang.String\njson.rule.convert[java.time.LocalDate]=java.lang.String\nTreat java.time.LocalDateTime as a timestamp:\n#Resolve 'java.time.LocalDateTime' as 'java.lang.Long'json.rule.convert[java.time.LocalDateTime]=java.lang.Long\njson.rule.convert[java.time.LocalDate]=java.lang.Long\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/multiple_return_types.html",
      "children": [
        {
          "title": "Some Interfaces May Have Different Returns",
          "url": "/qa/multiple_return_types.html#some-interfaces-may-have-different-returns",
          "content": "Some Interfaces May Have Different ReturnsYou can use method.doc to place possible returns in method comments.\nConfiguration is as follows:method.doc[#result]=groovy: it.docs(\"result\").collect{helper.resolveLink(it)}.grep{it!=null}.collect{\"Possible returns:\\n\\n```json\\n\"+it.toJson(true)+\"\\n```\\n\\n\"}.join(\"\\n\")Usage is as follows: /**  * @result {@link UserInfo}\n  * @result {@link Result}\n  */\n public Result mockString() {\n     ...\n }\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/field_multiple_types.html",
      "children": [
        {
          "title": "A Field May Have Values of Different Types",
          "url": "/qa/field_multiple_types.html#a-field-may-have-values-of-different-types",
          "content": "A Field May Have Values of Different TypesYou can use field.doc to place possible type values in field comments.\nConfiguration is as follows: field.doc[#maybe]=groovy:it.docs(\"maybe\").collect{helper.resolveLink(it)}.collect{\"Possible types:\\n\\n```json\\n\" + it.toJson(true) +\"\\n```\\n\\n\"}.join(\"\\n\")Usage is as follows: /**  * @maybe {@link UserInfo}\n  * @maybe {@link java.lang.String}\n  */\n public Object target;\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/javax_validation_grouped.html",
      "children": [
        {
          "title": "How to Enable javax_validation Grouped Validation",
          "url": "/qa/javax_validation_grouped.html#how-to-enable-javax_validation-grouped-validation",
          "content": "How to Enable javax_validation Grouped ValidationRefer to javax_validation,\nnavigate to Preferences(Settings) > Other Settings > EasyApi > Recommend, uncheck javax.validation, and check javax.validation(grouped).\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/json_ignore_properties.html",
      "children": [
        {
          "title": "How to Activate Support for com.fasterxml.jackson.annotation.JsonIgnoreProperties",
          "url": "/qa/json_ignore_properties.html#how-to-activate-support-for-com.fasterxml.jackson.annotation.jsonignoreproperties",
          "content": "How to Activate Support for com.fasterxml.jackson.annotation.JsonIgnorePropertiesNavigate to Preferences(Settings) > Other Settings > EasyApi > Recommend and check Jackson_JsonIgnoreProperties\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/method_complex.html",
      "children": [
        {
          "title": "During Export, an Error Appears Stating com.xxx.Xxx is to complex. Blocked cause by xxx reached xxx, How to Handle",
          "url": "/qa/method_complex.html#during-export,-an-error-appears-stating-com.xxx.xxx-is-to-complex.-blocked-cause-by-xxx-reached-xxx,-how-to-handle",
          "content": "During Export, an Error Appears Stating com.xxx.Xxx is to complex. Blocked cause by xxx reached xxx, How to HandleCheck whether the class in the error message should not appear in the request/response body. You could try the following configuration:\n# ignore field with type com.xxx.Xxxfield.ignore=groovy:it.type().name()==\"com.xxx.Xxx\"\nIf this class indeed has numerous fields and needs to be fully parsed, you can relax the parsing limits through configuration:\nmax.deep=8max.elements=512\n"
        }
      ]
    }
  ]
}