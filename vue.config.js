/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-16 17:56:46
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-08 16:29:57
 */
const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin'); //生成骨架屏插件

module.exports = {
  chainWebpack: config => {
    // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })
  },
  configureWebpack: (config) => {
    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: path.join(__dirname, './src/skeleton.js'),
        },
      },
      minimize: true,
      quiet: true,
      router: {
        mode: 'history',
        routes: [
          {
            path: '/home', // 和router.js中的路径一样就行
            skeletonId: 'skeleton2' // 之前的id
          },
          {
            path: '/login',
            skeletonId: 'skeleton1'
          }
        ]
      }
    }))
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false // 此处会报警告，因此用下面一行代替
  },
  lintOnSave: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  },
}
