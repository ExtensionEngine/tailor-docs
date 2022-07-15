module.exports = {
  title: 'Tailor docs',
  description: 'Strategy, Implementation, Support',
  head: [
    ['link', { rel: 'icon', href: '/default-logo-full.svg' }]
  ],
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    displayAllHeaders: false,
    nav: [
      { text: 'Concepts', link: '/concepts' },
      { text: 'Configuration', link: '/configuration/reference' },
      {
        text: 'Guides',
        ariaLabel: 'Guides menu',
        items: [
          { text: 'User guide', link: '/user-guide/catalog' },
          { text: 'Dev guide', link: '/developer-guide/getting-started' }
        ]
      },
      { text: 'Tutorials', link: '/tutorials/intro' },
      { text: 'GitHub', link: 'https://github.com/ExtensionEngine/tailor' }
    ],
    sidebar: {
      '/configuration/': [
        'reference',
        'examples'
      ],
      '/user-guide/': [
        'catalog',
        'repository',
        'editor',
        'collaboration',
        'admin',
        'profile'
      ],
      '/developer-guide/': [
        'getting-started',
        'configuration',
        'publishing',
        {
          title: 'Extensions',
          collapsable: false,
          children: [
            '/developer-guide/extensions/introduction',
            '/developer-guide/extensions/elements',
            '/developer-guide/extensions/containers',
            '/developer-guide/extensions/metas',
            '/developer-guide/extensions/utils'
          ]
        },
        'sso',
        'storage-proxy',
        'branding',
        'migration'
      ],
      '/tutorials/': [
        'intro'
      ],
      '/': [
        '',
        'concepts',
        'intro'
      ]
    }
  },
  base: '/tailor-docs/'
}
