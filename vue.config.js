module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/cherri/' : '/',
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    i18n: {
      locale: 'zh-TW',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
