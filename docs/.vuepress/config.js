module.exports = {
  title: 'Tailor',
  description: 'Content authoring platform',
  themeConfig: {
    nav: [
      { text: 'Tailor', link: 'https://github.com/ExtensionEngine/tailor' },
      { text: 'Boutique', link: 'https://github.com/ExtensionEngine/boutique' },
      { text: 'Tape', link: 'https://github.com/ExtensionEngine/tape' }
    ],
    sidebar: [
      '/',
      '/architecture/',
      '/guide/',
      '/guide/configuration/',
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
