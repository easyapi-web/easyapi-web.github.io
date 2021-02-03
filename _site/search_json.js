window.ydoc_plugin_search_json = {
  "document": [
    {
      "title": "Introduction",
      "content": "Elegant documents come from elegant comments\nParsing based on javadoc&KDoc&ScalaDoc\n",
      "url": "/documents/index.html",
      "children": [
        {
          "title": "Feature",
          "url": "/documents/index.html#feature",
          "content": "FeatureExport API Doc ToPostman\nExport API Doc ToMarkdown\nExport RPC Doc ToMarkdown\nApi DashBoard\n"
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
      "content": "The following usage are supported\nOpen the file containing the API in the project or select the file or folder in the project file area on the left of IDEA\nUse shortcut alt shift E(windows)/ctrl E(mac)\nThen select the APIs, and select the export channel Markdown/Postman\nClick [✔] button or press enter to confirm the export.\n\n\nOpen the file containing the API in the project\nRight-click file editor then select Generate... or use shortcut[Alt + Insert]/[Ctrl+Enter]\nNext,select ExportPostman/ExportMarkdown\n\n\nSelect the file or folder in the project file area on the left of IDEA\nClick Code > ExportPostman/ExportMarkdown on the top of IDEA.\n\n\nClick Code > ApiDashBoard on the top of IDEA.\nThen you can use the mouse to drag the APIs on the left into the postman directory on the right to export the API to postman\n\n\nOpen the file containing the API in the project\nRight-click file editor then select Generate... or use shortcut[Alt + Insert]/[Ctrl+Enter]\nNext,select Call,Now you can start a http request to the API in the current file\n\n",
      "url": "/documents/use.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export2postman.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export2markdown.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export_rpc.html",
      "children": []
    },
    {
      "title": "Advanced useage",
      "content": "The following usage are supportedClick Code > Debug, The script debug dialog will be open.\n",
      "url": "/documents/advanced_use.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/debug.html",
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
      "title": "General configuration",
      "content": "",
      "url": "/setting/index.html",
      "children": [
        {
          "title": "Zero configuration, out of the box",
          "url": "/setting/index.html#zero-configuration,-out-of-the-box",
          "content": "Zero configuration, out of the boxOnce the plug-in is installed, it can be used without any configuration. In general, when some info need to be provided during the export of the API, the plug-in will pop a window, Fill in as required.\n"
        },
        {
          "title": "Additional configuration ways",
          "url": "/setting/index.html#additional-configuration-ways",
          "content": "Additional configuration ways\nSetting in IDEA\n\nConvenient and quick, you can adjust some default behavior of the plug-in\n\n\n\nConfiguration file in project \n\nHigh customizability, can be highly adapted to personalized business\n\n\n"
        }
      ]
    },
    {
      "title": "Setting in IDE (global)",
      "content": "Preferences(Settings) > Other Settings > EasyApi\n",
      "url": "/setting/ide-setting.html",
      "children": [
        {
          "title": "General",
          "url": "/setting/ide-setting.html#general",
          "content": "GeneralCommon :log: In general, the log can be set to \"high\" to ignore unnecessary output ,when an exception occurs, it can be set to \"low\" to get more information\nSupport :methodDoc: When checked, method documents can be exported, It can be also used to export RPC documents\nSupport export to markdown only.\n"
        },
        {
          "title": "Postman:",
          "url": "/setting/ide-setting.html#general-postman",
          "content": "Postman:token: It is used to set or update postman privateToken. It can be obtained from Postman Integrations Dashboard\nMarkdown :outputDemo: Generate a response demo for each API when exporting markdown documents\noutputCharset: Select the character set to used for the markdown document\nCache :global: Global cache\nproject: Current project cache\nintelligent :inferEnable: Allows plug-ins to try to infer through code flow when encountering uncertain method return type (like: Object，Some)\nmaxDeep: Max depth allowed to infer\ngetter as field: Try to read getter method as JSON field\nuse recommend config: Whether to use the built-in recommended configuration\n"
        },
        {
          "title": "Built-in optional recommended configuration",
          "url": "/setting/ide-setting.html#built-in-optional-recommended-configuration",
          "content": "Built-in optional recommended configurationSelect the needed configuration by checking\nSource code of built-in recommended configuration : portal\n"
        }
      ]
    },
    {
      "title": "Use config file (current project)",
      "content": "Add configuration files to the root of project or module\n\n\nfile\ntype\neffect operations\n\n\n\n\n.easy.api.config\nproperty\nmarkdown/postman/yapi\n\n\n.easy.api.yml/.easy.api.yaml\nyml\nmarkdown/postman/yapi\n\n\n.postman.config\nproperty\npostman\n\n\n.postman.yml/.postman.yaml\nyml\npostman\n\n\n.yapi.config\nproperty\nyapi\n\n\n.yapi.yml/.yapi.yaml\nyml\nyapi\n\n\nYou can use properties.additional in the configuration file to load additional configuration files:\nproperties.additional=$additional_properties_file_path$",
      "url": "/setting/local-file-config.html",
      "children": [
        {
          "title": "The directory structure after configuration is as follows:",
          "url": "/setting/local-file-config.html#the-directory-structure-after-configuration-is-as-follows",
          "content": "The directory structure after configuration is as follows:project-root├── java(module1)\n│   ├── common.iml\n│   ├── pom.xml\n│   ├── src\n│   │   ├── main\n│   │   │   ├── java\n│   │   │   │   └── com\n│   │   │   │       └── **\n│   │   │   │           └── **\n│   │   │   │               └── **\n│   │   │   │                   └── **.java\n│   │   │   └── resources\n│   │   └── test\n│   │       └── java\n│   └────.easy.api.config①\n├── kotlin(module2)\n│   ├── kotlin-demo.iml\n│   ├── pom.xml\n│   ├── src\n│   │   ├── main\n│   │   │   ├── kotlin\n│   │   │   │   └── com\n│   │   │   │       └── **\n│   │   │   │           └── **\n│   │   │   │               └── **\n│   │   │   │                   └── **\n│   │   │   │                       └── **.kt\n│   │   │   └── resources\n│   │   │       ├── application.yaml②\n│   │   │       ├── static\n│   │   │       └── templates\n│   │   └── test\n│   │       └── kotlin\n│   └────.easy.api.yml③\n├── springboot-demo(module3)\n│   ├── pom.xml\n│   ├── springboot-demo.iml\n│   └── src\n│       ├── main\n│       │   ├── java\n│       │   │   └── com\n│       │   │       └── **\n│       │   │           └── **\n│       │   │               └── **\n│       │   │                   └── **\n│       │   │                       └── **\n│       │   │                           └── **.java\n│       │   └── resources\n│       │       ├── application.properties④\n│       │       ├── static\n│       │       └── templates\n│       └── test\n├── springboot-webflux-demo(module4)\n│   ├── pom.xml\n│   ├── springboot-webflux-demo.iml\n│   └── src\n│       ├── main\n│       │   ├── java\n│       │   │   └── **\n│       │   │       └── **\n│       │   │           └── **\n│       │   │               └── **\n│       │   │                   └── **\n│       │   │                       └── **.java\n│       │   └── resources\n│       │       └── application.yml⑤\n│       └── test\n└────.easy.api.config⑥\n"
        },
        {
          "title": "In the structure:",
          "url": "/setting/local-file-config.html#in-the-structure",
          "content": "In the structure:①: Only affect java(module1)\n②: If the default recommended configuration is enabled, it will be loaded by default, so the property in it can be used through {property} in ③\n③: Only affect kotlin(module2)\n④/⑤: application.properties/application.yml/application.yaml can be loaded as ② too.\n⑥: affect java(module1)/kotlin(module2)/springboot-demo(module3)/springboot-webflux-demo(module4)\n"
        }
      ]
    },
    {
      "title": "Configuration of postman",
      "content": "\nIf token of postman is needed during export, input will be provided in a pop window.\n\n\nIt can also be configured manually at Postman in Preferences(Settings) > Other Settings > EasyApi\n\n\nThe token of postman is Postman API keys which will be used to authorize your requests to the Postman API. It can be generated from Postman Integrations Dashboard\n\n",
      "url": "/setting/postman.html",
      "children": []
    },
    {
      "title": "Supported rulesSimple rulesAdvanced script rules",
      "content": "\n\n    key\ntarget(context)\nversion\ndesc\n\n\n\n\n    module\nclass\nv0.7.2+\ngroup api\n\n\n    ignore\nclass/method\nv0.7.2+\nignore API\n\n\n    json.rule.field.name\nfield\nv0.7.2+\nSet the output field name(while the field name used in JSON is inconsistent with the field name in the class)\n\n\n    json.rule.field.ignore\nfield\nv0.7.2+\nIgnore fields (the field will be skipped from the serialized output)\n\n\n☆json.rule.convert\n-\nv0.7.2+\nMark some type conversions to other type processing, usually when spring's custom type converter is used\n\n\n    json.rule.enum.convert\nclass\nv1.2.0+\nSpecial conversion for enumeration types\n\n\n☆doc.field\nfield\nv0.7.2+\nAdditional comments for fields\n\n\n    doc.method\nmethod\nv0.7.2+\nAdditional comments for method (API)\n\n\n    doc.class\nclass\nv1.3.0+\nAdditional comments for class\n\n\n    doc.param\narg\nv1.3.0+\nAdditional comments for parameter\n\n\n    param.required\narg\nv0.7.3+\nWhether the API parameter is required (NotNull)\n\n\n    param.ignore\narg\nv1.3.0+\nIgnore API parameter\n\n\n    param.default.value\narg\nv1.3.0+\nDefault value for API parameter\n\n\n    method.additional.header\nmethod\nv1.3.0+\nAPI requires additional headers\n\n\n\n\n\n{name: \"header name\",value: \"\",desc: \"\",required:false, example:\"\"}\n\n\n    method.additional.param\nmethod\nv1.3.0+\nAPI requires additional parameters\n\n\n\n\n\n{name: \"param name\",value: \"defaultValue\",desc: \"\",required:false}\n\n\n    method.additional.response.header\nmethod\nv1.3.0+\nAPI response contains additional headers\n\n\n\n\n\n{name: \"header name\",value: \"\",desc: \"\",required:false, example:\"\"}\n\n\n    field.required\nfield\nv0.7.3+\nWhether the field is required (NotNull)\n\n\n    field.default.value\n-\nv1.7.1+\nThe default value of a field\n\n\n    mdoc.class.filter\nclass\nv0.9.5+\nFilter classes which can export method documents(rpc)\n\n\n    mdoc.method.filter\nmethod\nv0.9.5+\nFilter methods which can export method documents(rpc)\n\n\n    class.prefix.path\nclass\nv1.3.0+\nSet base path for APIs in the class\n\n\n    constant.field.ignore\nfield\nv1.3.8+\nignore constant field\n\n\n☆method.return.main\nmethod\nv1.3.8+\nThe core body of the return value\n\n\n☆method.return\nmethod\nv1.6.1+\nThe type of return value\n\n\n    api.name\nmethod\nv1.4.1+\nthe name of api\n\n\n    method.default.http.method\nmethod\nv1.4.2+\nthe default httpmethod of the API\n\n\n    postman.host\nclass\nv1.5.2+\nSet the host of API (for 'postman' only)\n\n\n\n# Read tag on comment\n/**\n * @fake\n */\n\n\n\n@ Read annotation\n\n@xxx Read annotations on methods or fields\n\n@RequestMapping(\"path\")\npublic class FakeClass{...}\n\n\n@xxx#yyy Read attr value in annotation on method or field\n\n@RequestMapping(value = \"path\")\npublic class FakeClass{...}\n\n\ngroovy is recommended to be use as the first choice, cause that the JS engine may be missing after jdk11\ngroovy rule: groovy:groovyScript\njs rule: js:jsScript\nTools / objects are available in scripts: tools\nDebug Script : Deubg\n",
      "url": "/setting/config-rule.html",
      "children": []
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
      "title": "json.rule.field.name",
      "content": "用于设置输出/输入的字段名(用于json中字段名与类中字段名不一致)\n",
      "url": "/setting/rules/json_rule_field_name.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/json_rule_field_name.html#built-in-recommended-configuration",
          "content": "Built-in recommended configuration#Support for Jackson annotationsjson.rule.field.name=@com.fasterxml.jackson.annotation.JsonProperty#value\n\n#Support for Gson annotations\njson.rule.field.name=@com.google.gson.annotations.SerializedName#value\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/json_rule_field_name.html#demo",
          "content": "demoTestJsonFieldBean.javapublic class TestJsonFieldBean {    @JsonProperty(\"a\")\n    private Long propertyA;\n\n    @SerializedName(\"b\")\n    private Long propertyB;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "Export as API response:",
          "url": "/setting/rules/json_rule_field_name.html#demo-export-as-api-response",
          "content": "Export as API response:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\na\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\nb\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\n"
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
          "content": "Export as API response:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\nshouldNotIgnoreForGson\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\nshouldNotIgnoreForJackson\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\n"
        },
        {
          "title": "Special custom configuration Demo",
          "url": "/setting/rules/json_rule_field_ignore.html#special-custom-configuration-demo",
          "content": "Special custom configuration Demo\nIgnores the field with special name:\n\n\nConfiguration\n# ignore field 'log'\njson.rule.field.ignore=log\n\n\n\nThe following fields will be ignored\nprivate String log;\n\n\n\n\n\nIgnores the field of the special type:\n\n\nConfiguration\n# ignore field 'log' typed xxx.xxx.Log\njson.rule.field.ignore=groovy:it.type().name()==\"xxx.xxx.Log\"\n\n\n\nThe following fields will be ignored\nprivate Log xxx;\n\n\n\n\n\nIgnore the field with special modifier:\n\n\nConfiguration\n#ignore transient field\njson.rule.field.ignore=groovy:it.hasModifier(\"transient\")||it.hasModifier(\"protected\")\n\n\n\nThe following fields will be ignored\nprivate transient Int xxx;\nprotected Long yyy;\n\n\n\n\n"
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
      "content": "用于设置枚举type的转换\n优先级低于json.rule.convert\n假定有如下枚举类public enum UserType {    //Admin\n    ADMIN(1, \"Admin\"),\n\n    //Member\n    MEMBER(2, \"Member\"),\n\n    //Guest\n    GUEST(3, \"Guest\");\n\n    private int type;\n    private String desc;\n\n    public int getType() {\n        return type;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int type, String desc) {\n        this.type = type;\n        this.desc = desc;\n    }\n}\n对于如下字段/*** 用户type\n*/\nprivate UserType type;\n",
      "url": "/setting/rules/json_rule_enum_convert.html",
      "children": [
        {
          "title": "默认情况",
          "url": "/setting/rules/json_rule_enum_convert.html#默认情况",
          "content": "默认情况\n默认将枚举type转换为String处理,给出可用值为枚举中的实例名\n\n\n上述字段将被处理为\n\n/*** 用户type\n* @see UserType\n*/\nprivate String type;\n导出API结果为:\n\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\ntype\nstring\n非必须\n\n用户type\n枚举: ADMIN,MEMBER,GUEST枚举desc: ADMIN :Admin MEMBER :Member GUEST :Guestmock: @pick([\"ADMIN\",\"MEMBER\",\"GUEST\"]))\n\n\n"
        },
        {
          "title": "增加配置",
          "url": "/setting/rules/json_rule_enum_convert.html#增加配置",
          "content": "增加配置做如下配置,将其转换为int处理,给出可用值为枚举中的type字段\njson.rule.enum.convert[com.itangcent.common.constant.UserType]=~#type则上述字段将被处理为\n/*** 用户type\n* @see UserType#type\n*/\nprivate int type;\n导出API结果为:\n\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\ntype\ninteger\n非必须\n\n用户type\n枚举: 1,2,3枚举desc: 1 :Admin 2 :Member 3 :Guestmock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "统一处理",
          "url": "/setting/rules/json_rule_enum_convert.html#统一处理",
          "content": "统一处理特殊的，声明如下接口:\npackage com.itangcent.common.constant;\npublic interface TypeAble {\n    int getType();\n}\n改造UserType,使其继承TypeAble\npublic enum UserType implements TypeAble {    ...\n}\n则可做如下配置,将所有继承TypeAble的类转换为int处理,给出可用值为枚举中的type字段\njson.rule.enum.convert[groovy:it.extend(\"com.itangcent.common.constant.TypeAble\")]=~#type"
        }
      ]
    },
    {
      "title": "doc.field",
      "content": "Additional comments on field\n",
      "url": "/setting/rules/doc_field.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/doc_field.html#built-in-recommended-configuration",
          "content": "Built-in recommended configuration#deprecated info(java)doc.field[#deprecated]=groovy:\"\\n「deprecated」\" + it.doc(\"deprecated\")\ndoc.field[@java.lang.Deprecated]=「deprecated」\n\n#deprecated info(kotlin)\ndoc.field[@kotlin.Deprecated]=groovy:\"\\n「deprecated」\" + it.ann(\"kotlin.Deprecated\",\"message\")\n\n"
        },
        {
          "title": "Add support for swagger @ApiModelProperty",
          "url": "/setting/rules/doc_field.html#add-support-for-swagger-apimodelproperty",
          "content": "Add support for swagger @ApiModelPropertydoc.field=@io.swagger.annotations.ApiModelProperty#value"
        },
        {
          "title": "demo",
          "url": "/setting/rules/doc_field.html#demo",
          "content": "demoSwaggerModel.javapublic class SwaggerModel {\n    /**\n     * @deprecated No longer used\n     */\n    @ApiModelProperty(value = \"fieldA\", required = true)\n    private String a;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "Export as API response:",
          "url": "/setting/rules/doc_field.html#export-as-api-response",
          "content": "Export as API response:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\na\nstring\n非必须\n\nfieldA「deprecated」No longer used\n\n\n\n"
        }
      ]
    },
    {
      "title": "doc.method",
      "content": "Additional comments on method(api)\n",
      "url": "/setting/rules/doc_method.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/doc_method.html#built-in-recommended-configuration",
          "content": "Built-in recommended configuration#deprecated info(java)doc.method[#deprecated]=groovy:\"\\n「deprecated」\" + it.doc(\"deprecated\")\ndoc.method[@java.lang.Deprecated]=「deprecated」\n\ndoc.method[groovy:it.containingClass().hasDoc(\"deprecated\")]=groovy:\"\\n「deprecated」\" + it.containingClass().doc(\"deprecated\")\ndoc.method[groovy:it.containingClass().hasAnn(\"java.lang.Deprecated\")]=「deprecated」\n\n\n#deprecated info(kotlin)\ndoc.method[@kotlin.Deprecated]=groovy:\"\\n「deprecated」\" + it.ann(\"kotlin.Deprecated\",\"message\")\ndoc.method[groovy:it.containingClass().hasAnn(\"kotlin.Deprecated\")]=groovy:\"\\n「deprecated」 \" + it.containingClass().ann(\"kotlin.Deprecated\",\"message\")\n\n"
        },
        {
          "title": "Add support for swagger @ApiOperation",
          "url": "/setting/rules/doc_method.html#add-support-for-swagger-apioperation",
          "content": "Add support for swagger @ApiOperationdoc.method=@io.swagger.annotations.ApiOperation#value"
        },
        {
          "title": "demo",
          "url": "/setting/rules/doc_method.html#demo",
          "content": "demo/**\n* Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @ApiOperation(value = \"mock string\")\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "doc.class",
      "content": "Additional comments on class\n",
      "url": "/setting/rules/doc_class.html",
      "children": [
        {
          "title": "Add support for swagger @Api",
          "url": "/setting/rules/doc_class.html#add-support-for-swagger-api",
          "content": "Add support for swagger @Apidoc.class=@io.swagger.annotations.Api#value"
        },
        {
          "title": "demo",
          "url": "/setting/rules/doc_class.html#demo",
          "content": "demo@Api(value = \"mock api tools\", @RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "doc.param",
      "content": "Additional comments of param\n",
      "url": "/setting/rules/doc_param.html",
      "children": [
        {
          "title": "在注释中给出参数type",
          "url": "/setting/rules/doc_param.html#在注释中给出参数type",
          "content": "在注释中给出参数typedoc.param=js:\"type:\"+it.type().name()"
        },
        {
          "title": "在注释中给出参数type并去掉java包名",
          "url": "/setting/rules/doc_param.html#在注释中给出参数type并去掉java包名",
          "content": "在注释中给出参数type并去掉java包名doc.param=groovy:\"type:\"+tool.uncapitalize(it.type().name().replace(\"java.lang.\",\"\"))"
        },
        {
          "title": "DemoAPI",
          "url": "/setting/rules/doc_param.html#在注释中给出参数type并去掉java包名-demoapi",
          "content": "DemoAPI    /**     * 更新用户名\n     *\n     * @param id      用户id\n     * @param newName 新的用户名\n     * @param slogon  个人签名\n     * @deprecated 改用{@link #update(UserInfo)}\n     */\n    @RequestMapping(value = \"/set\", method = RequestMethod.PUT)\n    public Object set(long id,\n                      @RequestParam String newName,\n                      @RequestParam(required = false, defaultValue = \"haha\") String slogon,\n                      @RequestParam(required = false, defaultValue = \"10\") long times) {\n            ...\n    }\n"
        },
        {
          "title": "Export as API response:",
          "url": "/setting/rules/doc_param.html#在注释中给出参数type并去掉java包名-export-as-api-response",
          "content": "Export as API response:请求参数:\n\n参数name\nrequired\ndemo\ndesc\n\n\n\n\nid\n是\n\n用户idtype:long\n\n\nnewName\n是\n\n新的用户名 type:string\n\n\nslogon\n否\n\n个人签名 type:string\n\n\ntimes\n否\n\ntype:long\n\n\n"
        }
      ]
    },
    {
      "title": "param.required",
      "content": "用于标记API参数是否为必须(即不可为空)\n",
      "url": "/setting/rules/param_required.html",
      "children": [
        {
          "title": "Built-in recommended configuration",
          "url": "/setting/rules/param_required.html#built-in-recommended-configuration",
          "content": "Built-in recommended configuration#Support for javax.validation annotationsparam.required=@javax.validation.constraints.NotBlank\nparam.required=@\"javax.validation.constraints.NotNull\nparam.required=@javax.validation.constraints.NotEmpty\n"
        },
        {
          "title": "添加对swagger @ApiParam支持",
          "url": "/setting/rules/param_required.html#添加对swagger-apiparam支持",
          "content": "添加对swagger @ApiParam支持param.required=@io.swagger.annotations.ApiParam#required"
        },
        {
          "title": "demo",
          "url": "/setting/rules/param_required.html#demo",
          "content": "demoMockCtrl.java@RestController@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString(\n            @ApiParam(value = \"seed for mock\", required = true, defaultValue = \"666666\") long seed) {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        },
        {
          "title": "Export as API response:",
          "url": "/setting/rules/param_required.html#demo-export-as-api-response",
          "content": "Export as API response:请求参数:\n\n参数name\nrequired\nDemo\ndesc\n\n\n\n\nseed\n是\n666666\nseed for mock\n\n\n"
        }
      ]
    },
    {
      "title": "param.ignore",
      "content": "忽略API参数\n",
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
      "title": "param.default.value",
      "content": "用于设置API参数的default\n",
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
      "title": "method.additional.header",
      "content": "API requires additional header\n",
      "url": "/setting/rules/method_additional_header.html",
      "children": [
        {
          "title": "For example, JWT, all interfaces need to carry tokens in the header",
          "url": "/setting/rules/method_additional_header.html#for-example,-jwt,-all-interfaces-need-to-carry-tokens-in-the-header",
          "content": "For example, JWT, all interfaces need to carry tokens in the headermethod.additional.header={name: \"Authorization\",value: \"\",desc: \"authenticationToken\",required:true, example:\"\"}"
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
          "content": "demoSwaggerModel.javapublic class SwaggerModel {\n    @ApiModelProperty(value = \"字段A\", required = true)\n    private String a;\n\n    public String getA() {\n        return a;\n    }\n\n    public void setA(String a) {\n        this.a = a;\n    }\n}\n"
        },
        {
          "title": "Export as API response:",
          "url": "/setting/rules/field_required.html#demo-export-as-api-response",
          "content": "Export as API response:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\na\ninteger\n必须\n\n\nmock: @natural(0,10000)\n\n\n"
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
          "content": "Additional configurationConfiguration:field.default.value=#defaultDemoDto.javapublic class DemoDto{\n    /**\n     * price of demo\n     * @default 666\n     */\n    @NotNull\n    private Float price;\n\n    ...\n}\nExport as API response:\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\nprice\nnumber\n必须\n666\n价格\n\n\n\n"
        }
      ]
    },
    {
      "title": "mdoc.class.filter",
      "content": "用于选择哪些类可以导出method(rpc)文档, 根据当前项目情况\nDemo如果所有的RPC接口类都以Client结尾, 则可配置:\nmdoc.class.filter=groovy:it.name().endsWith(\"Client\")如果所有的RPC接口类包都在a.b.c.client, 则可配置:\nmdoc.class.filter=groovy:it.name().startsWith(\"a.b.c.client\")",
      "url": "/setting/rules/mdoc_class_filter.html",
      "children": []
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
          "title": "对于如下注释",
          "url": "/setting/rules/constant_field_ignore.html#对于如下注释",
          "content": "对于如下注释@see com.itangcent.common.constant.UserTypeConstantor{@link com.itangcent.common.constant.UserTypeConstant}"
        },
        {
          "title": "将被解析为:",
          "url": "/setting/rules/constant_field_ignore.html#将被解析为",
          "content": "将被解析为:1 :Admin 2 :Member 3 :Guest"
        }
      ]
    },
    {
      "title": "method.return.main",
      "content": "此配置仅设置return的核心主体，使得@return的注释落在主体属性上,不影响返回type及字段.\n",
      "url": "/setting/rules/method_return_main.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/method_return_main.html#demo",
          "content": "demoResult.javapackage com.itangcent.common.dto;\npublic class Result implements IResult {\n\n    private Integer code;//响应码\n\n    private String msg;//响应消息\n\n    private T data;//响应数据\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "可做如下配置",
          "url": "/setting/rules/method_return_main.html#demo-可做如下配置",
          "content": "可做如下配置method.return.main[groovy:it.returnType().isExtend(\"com.itangcent.common.dto.Result\")]=data"
        },
        {
          "title": "接口Demo1:",
          "url": "/setting/rules/method_return_main.html#demo-接口demo1",
          "content": "接口Demo1:接口代码:\n    /**     * 获取当前用户type\n     *\n     * @return 当前用户type,{@link com.itangcent.common.constant.UserTypeConstant}\n     */\n    @GetMapping(\"/type\")\n    public Result currUserType() {\n        return Result.success(UserType.values()[new Random(System.currentTimeMillis()).nextInt(UserType.values().length)].getType());\n    }\n导出API的响应:\n\n\nname\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\nmsg\nstring\n非必须\n\n响应消息\nmock:\n\n\ncode\ninteger\n非必须\n\n响应码\nmock: 0\n\n\ndata\ninteger\n非必须\n\n响应数据当前用户type,[用户type]\n枚举: 1,2,3枚举desc: 1 :Admin 2 :Member 3 :Guestmock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "接口Demo2:",
          "url": "/setting/rules/method_return_main.html#demo-接口demo2",
          "content": "接口Demo2:接口代码:\n    /**     * 获取所有用户type\n     *\n     * @return {@link com.itangcent.common.constant.UserType#getType()}\n     */\n    @GetMapping(\"/types\")\n    public Result> types() {\n        final List types = Stream.of(UserType.values()).map(UserType::getType).collect(Collectors.toList());\n        return Result.success(types);\n    }\n导出API的响应:\n\n\n    name\ntype\nrequired\ndefault\ndesc\nother\n\n\n\n\n    msg\nstring\n非必须\n\n响应消息\nmock:\n\n\n    code\ninteger\n非必须\n\n响应码\nmock: 0\n\n\n＋data\ninteger[]\n非必须\n\n响应数据[用户type]\nitem type: integer\n\n\n\ninteger\n\n\n\n枚举: 1,2,3枚举desc: 1 :Admin 2 :Member 3 :Guestmock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "附:",
          "url": "/setting/rules/method_return_main.html#demo-附",
          "content": "附:UserTypeConstant.java/** * 用户type\n */\npublic class UserTypeConstant implements Serializable {\n\n    private static final long serialVersionUID = -4607862808303533196L;\n\n    public static final int ADMIN = 1;//Admin\n    public static final int MEMBER = 2;//Member\n    public static final int GUEST = 3;//Guest\n\n}\nUserType.javapackage com.itangcent.common.constant;\n/**\n * 用户type\n */\npublic enum UserType {\n    //Admin\n    ADMIN(1, \"Admin\"),\n\n    //Member\n    MEMBER(2, \"Member\"),\n\n    //Guest\n    GUEST(3, \"Guest\");\n\n    private int type;//用户type\n\n    private String desc;\n\n    //constructors...\n\n    //getters...\n}\n"
        }
      ]
    },
    {
      "title": "method.return",
      "content": "设置method的return\n常用于以下情况:\n\nmethod返回Object\nmethod返回type中的泛型type未明确//\nmethod返回type与实际响应无关，例如通过操作HttpServletResponse来返回响应\n\n\n",
      "url": "/setting/rules/method_return.html",
      "children": [
        {
          "title": "如以下API",
          "url": "/setting/rules/method_return.html#如以下api",
          "content": "如以下APIAPI:    /**     * 通过`HttpServletResponse`写入响应\n     */\n    @RequestMapping(value = \"/writeByResponse\", method = RequestMethod.GET)\n    public void writeByResponse(HttpServletResponse response) throws IOException {\n        UserInfo userInfo = new UserInfo();\n        userInfo.setId(1l);\n        userInfo.setName(\"Tom\");\n        userInfo.setAge(25);\n        response.getOutputStream().write(new Gson().toJson(Result.success(userInfo)).getBytes(Charsets.UTF_8));\n    }\n这个method返回的是void,但实际响应的是Result, 所以需要通过额外的途径来表明此API的实际响应.\n简单的,可做如下配置:method.return=#real_return使用method:/** * @real_return com.itangcent.common.dto.Result\n */\n为了方便书写，我们可以尝试使用{@link}来设置实际响应type，利用helper.resolveLink来解析例如做如下配置:method.return[#real_return]=groovy: helper.resolveLink(it.doc(\"real_return\"))使用method:/** * @real_return {@link Result}\n */\n更进一步的，如果所有的响应都由com.itangcent.common.dto.Result包装做如下配置:method.return[#real_return]=groovy: \"com.itangcent.common.dto.Result\"使用method:/** * @real_return {@link UserInfo}\n */\n"
        }
      ]
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
      "title": "method.default.http.method",
      "content": "设置默认的api的HttpMethod\n缺省情况下，当API上未指定HttpMethod，且无特殊参数时默认使用GET\n",
      "url": "/setting/rules/method_default_http_method.html",
      "children": [
        {
          "title": "如希望默认使用POST",
          "url": "/setting/rules/method_default_http_method.html#如希望默认使用post",
          "content": "如希望默认使用POSTConfiguration:method.default.http.method=POST"
        }
      ]
    },
    {
      "title": "postman.host",
      "content": "Set host of postman API\nUse the current module name as the host of the API by default,for example:{{user}}\n",
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
      "title": "提供的工具/对象",
      "content": "\n\n    工具/对象\n规则desc\n\n\n\n\n☆it\n当前规则的应用对象\n\n\n☆tool\n主工具类\n\n\n    regex\n正则工具\n\n\n    logger\n日志工具\n\n\n    helper\n特殊帮助类\n\n\n",
      "url": "/setting/tools.html",
      "children": []
    },
    {
      "title": "it表示当前规则的应用对象",
      "content": "应用对象只提供method即it.method()✅，不提供属性it.property❎\n",
      "url": "/setting/tools/it.html",
      "children": [
        {
          "title": "对于class(类)、method(method/API)、field(字段/属性),arg(参数)都支持如下method",
          "url": "/setting/tools/it.html#对于class类、methodmethodapi、field字段属性,arg参数都支持如下method",
          "content": "对于class(类)、method(method/API)、field(字段/属性),arg(参数)都支持如下method\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\nname()\nstring\nname\nit.name()\n\n\nhasAnn(\"annotation_name\")\nboolean\n是否有指定注解\nit.hasAnn(\"org.springframework.web.bind.annotation.RequestBody\")\n\n\nann(\"annotation_name\")\nstring\n获取指定注解值(默认value)\nit.ann(\"org.springframework.web.bind.annotation.RequestBody\")\n\n\nann(\"annotation_name\",\"attr\")\nstring\n获取指定注解中的指定参数值\nit.ann(\"org.springframework.web.bind.annotation.RequestMapping\",\"path\")\n\n\ndoc()\nstring\n获取注释值\nit.doc()\n\n\ndoc(\"tag\")\nstring\n获取注释tag值(不需要加@)\nit.doc(\"return\")\n\n\ndocs(\"tag\")\narray\n获取多个注释tag值(不需要加@)\nit.docs(\"see\")\n\n\ndoc(\"tag\",\"subTag\")\nstring\n获取二级注释tag值\nit.doc(\"param\",\"a\")\n\n\nhasDoc(\"tag\")\nstring\n是否有指定注释tag\nit.hasDoc(\"ignore\")\n\n\nhasModifier(\"modifier\")\nstring\n是否有指定修饰\nit.hasModifier(\"public\")\n\n\nmodifiers()\nstring\n获取所有修饰\nit.modifiers()\n\n\nsourceCode()\nstring\n获取当前对象源码\nit.sourceCode()\n\n\ndefineCode()\nstring\n获取当前对象纯定义代码\nit.defineCode()\n\n\ncontextType()\nstring\n当前上下文type class/field/method/param\nit.contextType()\n\n\n"
        },
        {
          "title": "不同的应用对象提供额外的method",
          "url": "/setting/tools/it.html#不同的应用对象提供额外的method",
          "content": "不同的应用对象提供额外的methodclass(类)\n\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\nmethods()\nmethod[]\n类中的所有method\nit.methods()\n\n\nmethodCnt()\nint\n类中的method数\nit.methodCnt()\n\n\nfield()\nfield[]\n类中的所有字段\nit.field()\n\n\nfieldCnt()\nint\n类中的字段数\nit.fieldCnt()\n\n\nisExtend(superClass)\nboolean\n是否继承某个类\nit.isExtend(\"some.class.qualifiedName\")\n\n\nisMap()\nboolean\n是否为Map\nit.isMap()\n\n\nisCollection()\nboolean\n是否为集合\nit.isCollection()\n\n\nisArray()\nboolean\n是否为数组\nit.isArray()\n\n\ntoJson(readGetter)\nboolean\n获取当前type的json字符串\nit.toJson(true)\n\n\nmethod(method/API)\n\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\nreturnType()\nclass\nmethod返回type\nit.returnType()\n\n\nisVarArgs()\nboolean\n是否有不定参\nit.isVarArgs()\n\n\nargs()\narg[]\nmethod的所有参数\nit.args()\n\n\nargTypes()\nclass[]\nmethod的所有参数type\nit.argTypes()\n\n\nargCnt()\nint\nmethod参数个数\nit.argCnt()\n\n\ncontainingClass()\nclass\nmethod所属类\nit.containingClass()\n\n\nreturnJson(needInfer, readGetter)\nclass\n当前method返回对象的json字符串\nit.returnJson(true,true)\n\n\nfield(字段/属性)\n\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\ntype()\nclass\n字段type\nit.type()\n\n\ncontainingClass()\nclass\n字段所属类\nit.containingClass()\n\n\njsonName()\nstring\n字段json名\nit.jsonName()\n\n\njsonType()\nclass\n字段jsontype(被转换过的)\nit.jsonType()\n\n\narg(参数)\n\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\ntype()\nclass\n参数type\nit.type()\n\n\nisVarArgs()\nboolean\n是否为不定参\nit.isVarArgs()\n\n\n"
        }
      ]
    },
    {
      "title": "tool是提供的主工具类主要method其他一些method",
      "content": "\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\ndebug(obj)\nvoid\ndebug对象,获取对象所有可用method\ntool.debug(tool)\n\n\nnewSet(items...)\nSet\n创建Set对象\ntool.newSet(\"ele1\",\"ele2\")\n\n\nnewList(items...)\nList\n创建List对象\ntool.newList(\"ele1\",\"ele2\")\n\n\nnewMap()\nMap\n创建Map对象\ntool.newMap()\n\n\nparseJson(json)\nObject\n解析json字符串\ntool.parseJson(\"{\"key\":\"value\"}\")\n\n\ntoJson(obj)\nObject\n对象转json字符串\ngroovy:tool.toJson([key:\"value\"])js:tool.toJson({key:\"value\"})\n\n\nprettyJson(obj)\nObject\n对象转json字符串(格式化)\ngroovy:tool.prettyJson([key:\"value\"])js:tool.prettyJson({key:\"value\"})\n\n\nheadLine(str)\nstring\n获取字符串第一行\ntool.headLine(\"multi\\nline\")\n\n\ncapitalize(str)\nstring\n字符串首字母大写\ntool.capitalize(\"words\")\n\n\nuncapitalize(str)\nstring\n字符串首字母小写\ntool.uncapitalize(\"Words\")\n\n\nswapCase(str)\nstring\n字符串每个字符大小写转换\ntool.swapCase(\"WoRdS\")\n\n\nupperCase(str)\nstring\n字符串全部大写\ntool.upperCase(\"words\")\n\n\nlowerCase(str)\nstring\n字符串全部小写\ntool.lowerCase(\"words\")\n\n\nreverse(str)\nstring\n字符串反转\ntool.reverse(\"sdrow\")\n\n\nrepeat(str,repeat)\nstring\n重复指定字符串\ntool.repeat(\"x\",10)\n\n\nisNumeric(str)\nstring\n判断字符串是纯数字\ntool.isNumeric(\"123\")\n\n\ntoCamelCase(str)\nstring\n字符串转驼峰式\ntool.toCamelCase(\"some words\",true)\n\n\nnow()\nstring\n获取当前时间 格式为:yyyy-MM-dd HH:mm:ss\ntool.now()\n\n\nnow(pattern)\nstring\n获取当前时间并指定格式\ntool.now(\"yyyy-MM-dd\")\n\n\ntoday()\nstring\n获取当前时间 格式为:yyyy-MM-dd\ntool.today()\n\n\nformat()\nstring\n格视化时间戳\ntool.format(1000000000000,\"yyyy-MM-dd HH:mm:ss\")\n\n\n",
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
      "title": "regex是提供的正则工具",
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
      "title": "logger是提供的日志工具类",
      "content": "可以打印日志到控制台, 受日志级别设置影响, 部分级别的日志可能不会显示\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\nlog(str)\nvoid\n打印日志\nlogger.log(\"some log\")\n\n\ntrace(str)\nvoid\n打印日志(日志级别trace)\nlogger.trace(\"some log\")\n\n\ndebug(str)\nvoid\n打印日志(日志级别debug)\nlogger.debug(\"some log\")\n\n\ninfo(str)\nvoid\n打印日志(日志级别info)\nlogger.info(\"some log\")\n\n\nwarn(str)\nvoid\n打印日志(日志级别warn)\nlogger.warn(\"some log\")\n\n\nerror(str)\nvoid\n打印日志(日志级别error)\nlogger.error(\"some log\")\n\n\n",
      "url": "/setting/tools/logger.html",
      "children": []
    },
    {
      "title": "helper是提供的特殊帮助类(v1.6.1+)主要method",
      "content": "\n\nmethod\nreturn\ndesc\nDemo\n\n\n\n\nfindClass(str)\nclass\n获取类,类似Class.forName()\nhelper.findClass(\"java.lang.String\")\n\n\nresolveLink(str)\nclass\n解析字符串中的link\nhelper.resolveLink(\"{@link java.lang.String}\")\n\n\nresolveLinks(str)\narray\n解析字符串中的所有link\nhelper.resolveLink(\"{@link java.lang.String},{@link java.lang.Long}\")\n\n\n",
      "url": "/setting/tools/helper.html",
      "children": []
    },
    {
      "title": "groovy本地扩展",
      "content": "",
      "url": "/setting/groovy-ext-config.html",
      "children": [
        {
          "title": "介绍",
          "url": "/setting/groovy-ext-config.html#介绍",
          "content": "介绍针对极其特殊的情况, 无法使用简单配置实现需求时, 可以使用groovy扩展以获得极高的定制化功能\n相对普通配置来说, 对于开发者有一定的技术要求,包括groovy以及当前插件的结构等都要有一定的了解\nwiki\noffical\ndemo\n"
        },
        {
          "title": "使用步骤",
          "url": "/setting/groovy-ext-config.html#使用步骤",
          "content": "使用步骤\n在项目目录下创建 /.easyapi/ext\n\n\n创建扩展文件 ${ActionName}Ext.groovy当前可支持的操作有:\n\nApiCallAction\nApiDashBoardAction\nYApiDashBoardAction\nFieldsToJsonAction\nMarkdownExportAction\nPostmanExportAction\n\n\n\n在扩展文件中声明扩展类:\n\nclass ActionNameExt implements ActionExt {\n    void init(ActionContext.ActionContextBuilder builder) {\n        //在这里通过`bind`注入定制化组件,实现需要的功能\n        builder.bind(Xxx.class, KtHelper.INSTANCE.ktFunction({\n            it.to(Yyy.class).in(com.google.inject.Singleton.class)\n            return null\n        }))\n    }\n}\n"
        },
        {
          "title": "demo",
          "url": "/setting/groovy-ext-config.html#使用步骤-demo",
          "content": "demoYapiExportActionExt.groovy\nimport com.intellij.psi.*import com.itangcent.common.model.Request\nimport com.itangcent.idea.plugin.api.export.ClassExporter\nimport com.itangcent.idea.plugin.api.export.SpringRequestClassExporter\nimport com.itangcent.idea.plugin.api.export.yapi.YapiClassExportRuleKeys\nimport com.itangcent.idea.plugin.api.export.yapi.YapiRequestKitKt\nimport com.itangcent.idea.plugin.script.ActionExt\nimport com.itangcent.idea.plugin.utils.KtHelper\nimport com.itangcent.intellij.context.ActionContext\n\nimport java.util.stream.Collectors\nimport java.util.stream.Stream\n\nclass YapiExportActionExt implements ActionExt {\n\n    void init(ActionContext.ActionContextBuilder builder) {\n\n        builder.bind(ClassExporter.class, KtHelper.INSTANCE.ktFunction({\n            it.to(CustomClassExporter.class).in(com.google.inject.Singleton.class)\n            return null\n        }))\n\n    }\n\n    static class CustomClassExporter extends SpringRequestClassExporter {\n\n        void processCompleted(PsiMethod method, Request request) {\n            super.processCompleted(method, request)\n\n            String tags = ruleComputer.computer(YapiClassExportRuleKeys.TAG, method)\n            if (tags != null && !tags.isEmpty()) {\n                YapiRequestKitKt.setTags(request, Stream.of(tags.split(\"\\n\"))\n                        .map { it.trim() }\n                        .filter { !it.isEmpty() }\n                        .collect(Collectors.toList())\n                )\n            }\n\n            String status = ruleComputer.computer(YapiClassExportRuleKeys.STATUS, method)\n            logger.info(YapiRequestKitKt.class.toString())\n            YapiRequestKitKt.setStatus(request, status)\n        }\n    }\n}\n"
        },
        {
          "title": "特别注意",
          "url": "/setting/groovy-ext-config.html#特别注意",
          "content": "特别注意"
        },
        {
          "title": "由于插件源码语言是kotlin,在groovy中无法使用一些语法糖",
          "url": "/setting/groovy-ext-config.html#特别注意-由于插件源码语言是kotlin,在groovy中无法使用一些语法糖",
          "content": "由于插件源码语言是kotlin,在groovy中无法使用一些语法糖kotlin中声明的扩展method如\nfun Doc.setTags(tags: List?) {    ...\n}\n在groovy中使用如下:YapiRequestKitKt.setTags(request,tags)"
        }
      ]
    }
  ],
  "demo": [
    {
      "title": "demo projects",
      "content": "\nspringboot\n\n\nspringboot-webflux\n\n\ndubbo\n\n\nkotlin\n\n",
      "url": "/demo/index.html",
      "children": []
    }
  ],
  "framwork": [
    {
      "title": "Support different frameworks with configuration",
      "content": "Based on performance considerations, the built-in recommended configuration does not cover all the features of all frameworks\nTo add support for the specified framework or feature, see setting\n",
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
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/javax_validation.html",
      "children": []
    }
  ],
  "QA": [
    {
      "title": "",
      "content": "",
      "url": "/qa/index.html",
      "children": [
        {
          "title": "How to add a configuration file",
          "url": "/qa/index.html#how-to-add-a-configuration-file",
          "content": "How to add a configuration filesee local-file-config\n"
        },
        {
          "title": "How to organize API to specified folder",
          "url": "/qa/index.html#how-to-organize-api-to-specified-folder",
          "content": "How to organize API to specified folder\nmodule is use for classification API\n\nWhen exporting postman, each module will be used as a separate folder\n\n\n\nThe built-in configuration:\n\n#find module from comment tag module=#module\nComment like this on the class:\n/** * Mock Apis\n *\n * @module mock\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\n"
        },
        {
          "title": "How to ignore API",
          "url": "/qa/index.html#how-to-ignore-api",
          "content": "How to ignore APIThe built-in configuration:\n#ignore class or method which has comment tag 'ignore' ignore=#ignore\nComment like this on the class to ignore all apis in the class:\n/** * Mock Apis\n *\n * @ignore\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\nComment like this on the method to ignore the api:\n/** * Mock Apis\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n     /**\n      * Mock String\n      * @ignore\n      */\n     @GetMapping(\"/string\")\n     public String mockString() {\n         return Result.success(\"mock string\");\n     }\n\n}\n"
        },
        {
          "title": "How to set the name / description of API / folder",
          "url": "/qa/index.html#how-to-set-the-name-description-of-api-folder",
          "content": "How to set the name / description of API / folder\nIn general:\n/**\n * The head line of comments will be used as the title of the folder\n * The remaining line comments are used as the description\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n     * The head line of comments will be used as the title of the api\n     * The remaining line comments are used as the description\n     */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n\n\n"
        },
        {
          "title": "How to explain in the description of API / folder that API / folder is deprecated",
          "url": "/qa/index.html#how-to-explain-in-the-description-of-api-folder-that-api-folder-is-deprecated",
          "content": "How to explain in the description of API / folder that API / folder is deprecatedThe built-in configuration:\n```propertiesdoc.method[#deprecated]=groovy:\"\\n「deprecated」\" + it.doc(\"deprecated\")\ndoc.method[@java.lang.Deprecated]=「deprecated」\ndoc.method[@kotlin.Deprecated]=groovy:\"\\n「deprecated」\" + it.ann(\"kotlin.Deprecated\",\"message\")\n\ndoc.method[groovy:it.containingClass().hasDoc(\"deprecated\")]=groovy:\"\\n「deprecated」\" + it.containingClass().doc(\"deprecated\")\ndoc.method[groovy:it.containingClass().hasAnn(\"java.lang.Deprecated\")]=「deprecated」\ndoc.method[groovy:it.containingClass().hasAnn(\"kotlin.Deprecated\")]=groovy:\"\\n「deprecated」 \" + it.containingClass().ann(\"kotlin.Deprecated\",\"message\")\n\n```\n"
        },
        {
          "title": "How to declare the permissions required by API in API description(javax annotation security)",
          "url": "/qa/index.html#how-to-declare-the-permissions-required-by-api-in-api-descriptionjavax-annotation-security",
          "content": "How to declare the permissions required by API in API description(javax annotation security)add config for javax annotation security:\n## security descriptiondoc.method[@javax.annotation.security.RolesAllowed]=groovy:\"require role:\"+it.ann(\"javax.annotation.security.RolesAllowed\")\ncode:\n/** * The head line of comments will be used as the title of the folder\n * The remaining line comments are used as the description\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n     * The head line of comments will be used as the title of the api\n     * The remaining line comments are used as the description\n     */\n    @GetMapping(\"/string\")\n    @RolesAllowed(\"admin\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n\n"
        },
        {
          "title": "How to declare the permissions required by API in API description(spring security)",
          "url": "/qa/index.html#how-to-declare-the-permissions-required-by-api-in-api-descriptionspring-security",
          "content": "How to declare the permissions required by API in API description(spring security)add config for spring security:\n## security descriptionfind_role_in_PreAuthorize=(function(exp){var str=\"\";if(exp.indexOf(\"hasRole\")!=-1){var roles=exp.match(/hasRole\\\\((.*?)\\\\)/);if(roles&&roles.length>1){str+=\"require role:\"+roles[1];}};return str})\ndoc.method[@org.springframework.security.access.prepost.PreAuthorize]=js:${find_role_in_PreAuthorize}(it.ann(\"org.springframework.security.access.prepost.PreAuthorize\"))\ncode:\n/** * The head line of comments will be used as the title of the folder\n * The remaining line comments are used as the description\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n     * The head line of comments will be used as the title of the api\n     * The remaining line comments are used as the description\n     */\n    @GetMapping(\"/string\")\n    @PreAuthorize(\"hasRole('admin')\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n\n"
        },
        {
          "title": "How to ignore special fields",
          "url": "/qa/index.html#how-to-ignore-special-fields",
          "content": "How to ignore special fieldsIgnore fields with specific names:\n## ignore field 'log'json.rule.field.ignore=log\nIgnore fields of specific types:\n## ignore field 'log' typed xxx.xxx.Logjson.rule.field.ignore=groovy:it.type().name()==\"xxx.xxx.Log\"\nIgnore fields with specific modifiers:\n#ignore transient fieldjson.rule.field.ignore=groovy:it.hasModifier(\"transient\")\n"
        },
        {
          "title": "How to convert the specified type to another type",
          "url": "/qa/index.html#how-to-convert-the-specified-type-to-another-type",
          "content": "How to convert the specified type to another typeParse java.time.LocalDateTime as a string of yyyy-mm-dd\n#Resolve 'java.time.LocalDateTime' as 'java.lang.String'json.rule.convert[java.time.LocalDateTime]=java.lang.String\njson.rule.convert[java.time.LocalDate]=java.lang.String\nParse java.time.LocalDateTime as a long of timestamp\n#Resolve 'java.time.LocalDateTime' as 'java.lang.Long'json.rule.convert[java.time.LocalDateTime]=java.lang.Long\njson.rule.convert[java.time.LocalDate]=java.lang.Long\n"
        },
        {
          "title": "Some apis may have different returns",
          "url": "/qa/index.html#some-apis-may-have-different-returns",
          "content": "Some apis may have different returnsUse doc.method to show possible returns in method comments\nConfigurations:doc.method[#result]=groovy: it.docs(\"result\").collect{helper.resolveLink(it)}.grep{it!=null}.collect{\"may return:\\n\\n```json\\n\"+it.toJson(true)+\"\\n```\\n\\n\"}.join(\"\\n\")Usages: /**  * @result {@link UserInfo}\n  * @result {@link Result}\n  */\n public Result mockString() {\n     ...\n }\n"
        }
      ]
    }
  ]
}