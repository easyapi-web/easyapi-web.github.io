# folder.name

Group APIs into folders in the exported documentation.

## Usage

```properties
folder.name=groovy:it.packageName().split("\\.")[-1]
```

## Example

### Group by package name

```properties
folder.name=groovy:it.packageName().split("\\.")[-1]
```

### Group by RequestMapping value

```properties
folder.name=groovy:it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value()?.replace("/", "-") ?: "default"
```

### Group by annotation

```properties
folder.name=groovy:it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value()
```
