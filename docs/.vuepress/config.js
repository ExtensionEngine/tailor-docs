module.exports = {
  title: 'Tailor',
  description: 'Tailor - short description',
  themeConfig: {
    nav: [
      { text: 'Tailor', link: 'https://github.com/ExtensionEngine/tailor' },
      { text: 'Boutique', link: 'https://github.com/ExtensionEngine/boutique' },
    ],
    sidebar: [
      '/',
      '/guide/',
      '/architecture/',
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
  }
}
