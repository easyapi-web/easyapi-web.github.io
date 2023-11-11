---
banner:
  name: 'EasyApi'
  desc: 'Export APIs from IntelliJ IDEA to Postman seamlessly'
  btns:
    - { name: 'Start', href: './documents/index.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/tangcent/easy-api' }
  caption: 'version: v2.2.7'
features:
  - { name: 'several language', desc: 'Java/Kotlin/Scala' }
  - { name: 'several framwork', desc: 'Spring MVC/Spring boot/Spring WebFlux' }
  - { name: 'several channel', desc: 'Postman/Markdown' }
  - { name: 'rich extensibility', desc: 'Supports a wide range of configurations and extensions to cater to diverse frameworks and code specifications.' }

footer:
  copyRight:
    name: 'tangcent'
    href: 'http://www.itangcent.com/'
  links:
    GitRepository:
      - { name: 'Github', href: 'https://github.com/tangcent/easy-api' }
      - { name: 'Github Issue', href: 'https://github.com/tangcent/easy-api/issues' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />