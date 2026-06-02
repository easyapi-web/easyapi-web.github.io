# field.order.with

Set field order relative to another field using a comparator.

## Usage

```properties
field.order.with[password]=confirmPassword
```

This positions the `password` field next to `confirmPassword`.

## Example

### Alphabetical ordering

````properties
field.order.with=groovy:```
    return a.name().compareTo(b.name())
```
````

### Parent fields first

````properties
field.order.with=groovy:```
    def aDefineClass = a.defineClass()
    def bDefineClass = b.defineClass()
    if(aDefineClass == bDefineClass){
        return 0
    }else if(aDefineClass.isExtend(bDefineClass.name())){
        return 1
    }else{
        return -1
    }
```
````

## See Also

- [field.order](/settings/rules/field_order) — Set field order by index
- [Field Order Extensions](/framework/field-order) — Built-in ordering extensions
