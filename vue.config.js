const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      scss: {
        data: '@import "@global/global.scss";',
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@atoms", resolve('src/js/components/atoms'))
      .set("@globals", resolve('src/js/components/globals'))
      .set("@molecules", resolve('src/js/components/molecules'))
      .set("@pages", resolve('src/js/pages'))
      .set("@global", resolve('src/assets/scss/global'))
      .set("@styles", resolve('src/assets/scss/styles/'))
      .set("@img", resolve('src/assets/img'))
      .set("@data", resolve('src/js/data'))
      .set("@helpers", resolve('src/js/_helpers'))
      .set("@router", resolve('src/js/_router'))
      .set("@store", resolve('src/js/_store'));

    config
      .plugin('web-component-options')
      .use(
        require('webpack/lib/DefinePlugin'),
        [{
          'API_BASE_URL': 'https://api.gnavi.co.jp/RestSearchAPI/v3/',
        }]
      );
  },
}