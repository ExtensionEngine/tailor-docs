module.exports = {
  title: 'Tailor docs',
  description: 'Strategy, Implementation, Support',
  head: [
    ['link', { rel: 'icon', href: '/default-logo-full.svg' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Tailor', link: 'https://github.com/ExtensionEngine/tailor' },
      { text: 'Boutique', link: 'https://github.com/ExtensionEngine/boutique' },
      { text: 'Tape', link: 'https://github.com/ExtensionEngine/tape' }
    ],
    sidebar: [{
      title: 'Tailor',
      children: [
        '/tailor/intro',
        '/tailor/concepts',
        {
          title: 'User guide',
          collapsable: false,
          children: [
            '/tailor/user-guide/catalog',
            '/tailor/user-guide/repository',
            '/tailor/user-guide/editor',
            '/tailor/user-guide/collaboration',
            '/tailor/user-guide/admin',
            '/tailor/user-guide/profile'
          ]
        },
        {
          title: 'Developer guide',
          collapsable: false,
          children: [
            '/tailor/developer-guide/installation',
            '/tailor/developer-guide/configuration',
            '/tailor/developer-guide/publishing',
            {
              title: 'Extensions',
              children: [
                '/tailor/developer-guide/extensions/containers',
                '/tailor/developer-guide/extensions/elements',
                '/tailor/developer-guide/extensions/metas',
              ]
            },
            '/tailor/developer-guide/sso',
            '/tailor/developer-guide/hooks',
            '/tailor/developer-guide/branding',
          ]
        }
      ]
    }]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'images/'
      }
    }
  },
  base: '/tailor-docs/'
}
