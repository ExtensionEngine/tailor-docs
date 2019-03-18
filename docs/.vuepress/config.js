module.exports = {
  title: 'Custom Learning Experiences',
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
    sidebar: [
      '/',
      '/ecosystem/',
      '/guide-tailor/',
      '/guide-tailor/tailor-configuration/',
      '/guide-boutique/',
      '/guide-tape/',
      '/teaching-elements/',
      '/content/',
      '/content/contribute/',
      '/contribute/',
      '/issues/'
    ]
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
