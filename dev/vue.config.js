const path = require('path');
const resolve = require('./config/resolve');
// import loaderConfig from './config/index';
// const loaderConfig = require('./config/index');

module.exports = {
  publicPath: '/',
  assetsDir: 'assets/',
  outputDir: '../../sfgdutrex',
  configureWebpack: (config) => {
    console.log('\n当前环境', process.env.NODE_ENV);
    config.resolve = {
      ...config.resolve,
      ...resolve,
    };
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      config.mode = 'production';
      // 热更新
    } else {
      // 开发环境
      // 热更新
      config.resolve.symlinks = true;
      config.mode = 'development';
    }
  },
};
