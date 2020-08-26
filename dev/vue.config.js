const path = require('path');
const resolve = require('./config/resolve');
const lodash = require('lodash');
const plugins = require('./config/plugins');
// import loaderConfig from './config/index';
// const loaderConfig = require('./config/index');

module.exports = {
  publicPath: '/',
  assetsDir: 'assets/',
  outputDir: '../../sfgdutrex',
  configureWebpack: (config) => {
    config.resolve = lodash.merge(config.resolve, resolve);
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      config.mode = 'production';
      // 热更新
    } else {
      // 开发环境
      // 热更新
      config.resolve.symlinks = true;
      config.plugins = lodash.merge(plugins, config.plugins);
      config.mode = 'development';
    }
  },
};
