# `helper` - Special Helper Class (v1.6.1+)

---

# 主要method

| method  |  return  |  desc  |  Demo  |
| ------------ | ------------ | ------------ |------------ |
| findClass(str) | class | Retrieves a class similar to Class.forName() | helper.findClass("java.lang.String")| 
| resolveLink(str) | class | Resolves the link in the given string | helper.resolveLink("{@link java.lang.String}")| 
| resolveLinks(str) | array<class/method/field> | Resolves all link occurrences in the given string | helper.resolveLink("{@link java.lang.String},{@link java.lang.Long}")|