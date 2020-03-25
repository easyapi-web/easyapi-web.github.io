---
banner:
  name: 'EasyApi'
  desc: 'Elegant documents come from elegant comments'
  btns:
    - { name: 'Start', href: './documents/index.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/tangcent/easy-api' }
  caption: 'version: v1.9.0'
features:
  - { name: 'several language', desc: 'Java/Kotlin/Scala' }
  - { name: 'several framwork', desc: 'Spring MVC/Spring boot/Spring WebFlux' }
  - { name: 'several channel', desc: 'Postman/Markdown' }
  - { name: 'rich expansibility', desc: 'Supports a variety of configurations and extensions to meet different frameworks and code specifications' }
  - { name: 'debug tool', desc: 'Request immediately, no export required' }

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