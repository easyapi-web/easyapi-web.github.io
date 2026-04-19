import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'EasyApi',
  description: 'Simplifies API Development - Export APIs from IntelliJ IDEA to Postman, Markdown and more',

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/favicon.ico',

    nav: [
      { text: 'Guide', link: '/getting-started/introduction' },
      { text: 'Frameworks', link: '/frameworks/spring-boot' },
      { text: 'Configuration', link: '/configuration/ide-settings' },
      { text: 'Rules', link: '/rules/api-rules' },
      { text: 'Tools', link: '/tools/script-tools' },
      { text: 'FAQ', link: '/faq' },
      {
        text: 'Links',
        items: [
          { text: 'GitHub', link: 'https://github.com/tangcent/easy-api' },
          { text: 'JetBrains Plugin', link: 'https://plugins.jetbrains.com/plugin/12211-easyapi' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Quick Start', link: '/getting-started/quick-start' },
        ],
      },
      {
        text: 'Guide',
        items: [
          { text: 'Export to Postman', link: '/guide/export-postman' },
          { text: 'Export to Markdown', link: '/guide/export-markdown' },
          { text: 'Export to RPC', link: '/guide/export-rpc' },
          { text: 'API Call', link: '/guide/api-call' },
          { text: 'Script Executor', link: '/guide/script-executor' },
          { text: 'Generic Type Support', link: '/guide/generic' },
          { text: 'Advanced Usage', link: '/guide/advanced-use' },
        ],
      },
      {
        text: 'Framework Support',
        items: [
          { text: 'Spring Boot', link: '/frameworks/spring-boot' },
          { text: 'Spring WebFlux', link: '/frameworks/spring-webflux' },
          { text: 'JAX-RS', link: '/frameworks/jaxrs' },
          { text: 'Dubbo', link: '/frameworks/dubbo' },
          { text: 'Swagger', link: '/frameworks/swagger' },
          { text: 'Jackson', link: '/frameworks/jackson' },
          { text: 'javax.validation', link: '/frameworks/javax-validation' },
          { text: 'gRPC', link: '/frameworks/grpc' },
        ],
      },
      {
        text: 'Configuration',
        items: [
          { text: 'IDE Settings', link: '/configuration/ide-settings' },
          { text: 'Local File Config', link: '/configuration/local-file-config' },
          { text: 'Remote Config', link: '/configuration/remote-config' },
          { text: 'Config Rules', link: '/configuration/config-rules' },
          { text: 'Groovy Extension', link: '/configuration/groovy-extension' },
          { text: 'Markdown Custom Rules', link: '/configuration/markdown-rules' },
        ],
      },
      {
        text: 'Rules Reference',
        items: [
          { text: 'API Rules', link: '/rules/api-rules' },
          { text: 'Field Rules', link: '/rules/field-rules' },
          { text: 'Param Rules', link: '/rules/param-rules' },
          { text: 'Method Rules', link: '/rules/method-rules' },
          { text: 'JSON Rules', link: '/rules/json-rules' },
          { text: 'Postman Rules', link: '/rules/postman-rules' },
          { text: 'Enum Rules', link: '/rules/enum-rules' },
        ],
      },
      {
        text: 'Tools Reference',
        items: [
          { text: 'Script Tools', link: '/tools/script-tools' },
        ],
      },
      {
        text: 'FAQ',
        items: [
          { text: 'Frequently Asked Questions', link: '/faq' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tangcent/easy-api' },
    ],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/tangcent/easyapi-web.github.io/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright 2019-present tangcent',
    },
  },
})
