const path = require('path')
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@Components", resolve('components'))
      .set("@pages", resolve('pages'))
  },
}