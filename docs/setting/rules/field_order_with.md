# field.order.with

> Similar to a `comparator`, it returns -1, 0, or 1 by comparing two fields to indicate the order of the two compared fields in the result.

Note: This has a higher priority than [field.order](field_order.md), and it's generally not recommended to use them at the same time.


## Some configurations related to field.order.with can be found in the recommended configurations

1. Control order through annotation JsonPropertyOrder

``````properties

#[Jackson_JsonPropertyOrder]
#Support for Jackson annotation JsonPropertyOrder
field.order=@com.fasterxml.jackson.annotation.JsonProperty#index
json.class.parse.before[@com.fasterxml.jackson.annotation.JsonPropertyOrder]=groovy:```
    def properties = it.annValue("com.fasterxml.jackson.annotation.JsonPropertyOrder")
    properties.each { property ->
        session.push("JsonPropertyOrder-properties-"+it.name(), property)
    }
    session.set("JsonPropertyOrder-alphabetic"+it.name(),
        it.annValue("com.fasterxml.jackson.annotation.JsonPropertyOrder","alphabetic") ?: false)
```
json.class.parse.after[@com.fasterxml.jackson.annotation.JsonPropertyOrder]=groovy:```
    session.remove("JsonPropertyOrder-properties-"+it.name())
    session.remove("JsonPropertyOrder-"+it.name())
```
field.order=groovy:```
    def index = session.get("JsonPropertyOrder-properties-"+ it.containingClass().name())?.indexOf(it.name())
    if (index == -1) {
        return null
    }else{
        return index
    }
```
field.order.with=groovy:```
    def orderedProperties = session.get("JsonPropertyOrder-properties-"+ a.containingClass().name())
    if(a.name() in orderedProperties) {
         if(b.name() in orderedProperties){
             return orderedProperties.indexOf(a.name()) - orderedProperties.indexOf(b.name())
         }else{
             return -1
         }
    } else if(b.name() in orderedProperties){
        return 1
    } else if(session.get("JsonPropertyOrder-alphabetic"+a.containingClass().name())){
        return a.name().compareTo(b.name())
    } else {
        return null
    }
```
``````

2. Subclass fields first

``````properties
# child fields first
field.order.with=groovy:```
    def aDefineClass = a.defineClass()
    def bDefineClass = b.defineClass()
    if(aDefineClass==bDefineClass){
        return null
    }else if(aDefineClass.isExtend(bDefineClass.name())){
        return -1
    }else{
        return 1
    }
```
``````

3. Superclass fields first

``````properties
# parent fields first
field.order.with=groovy:```
    def aDefineClass = a.defineClass()
    def bDefineClass = b.defineClass()
    if(aDefineClass==bDefineClass){
        return null
    }else if(aDefineClass.isExtend(bDefineClass.name())){
        return 1
    }else{
        return -1
    }
```
``````


4. Alphabetically Ascending Order

``````properties
# fields alphabetically ordered
field.order.with=groovy:```
    return a.name().compareTo(b.name())
```
``````

5. Alphabetically Descending Order

``````properties
# fields descending alphabetically ordered
field.order.with=groovy:```
    return -a.name().compareTo(b.name())
```
``````

## demo

***Select `Jackson_JsonPropertyOrder` in the recommended configurations***

***UserInfo.java***

```java
@JsonPropertyOrder(value = {"name", "birthDay"}, alphabetic = true)
public class UserInfo {

    private Long id;//user id

    /**
     * @see com.itangcent.common.constant.UserType
     */
    private int type;//user type

    /**
     * @mock tangcent
     * @order 1
     */
    @NotBlank
    private String name;//user name

    /**
     * age
     *
     * @mock 1${digit}
     */
    @NotNull
    private Integer age;

    /**
     * @deprecated It's a secret
     */
    private Integer sex;

    //birthday
    private LocalDate birthDay;

    //registration time
    private LocalDateTime regtime;
}
```

### Parse into json5:

```json5
{
    "name": "",
    "birthDay": "", //birthday
    "age": 0, //age
    "id": 0, //user id
    "regtime": "", //registration time
    "sex": 0, //「Deprecated」It's a secret
    /**
     * 1 :Administrator
     * 2 :Member
     * 3 :Guest
     */
    "type": 0
}
```