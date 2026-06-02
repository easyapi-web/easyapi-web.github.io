# How to Group APIs to Folder

Use the `folder.name` rule to organize APIs into folders in the exported documentation.

## By Package Name

```properties
folder.name=groovy:it.packageName().split("\\.")[-1]
```

## By Annotation Value

```properties
folder.name=groovy:it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value()
```

## By Custom Logic

```properties
folder.name=groovy:it.ann("org.springframework.web.bind.annotation.RequestMapping")?.value()?.replace("/", "-") ?: "default"
```

See [folder.name](/settings/rules/folder_name) for more details.
