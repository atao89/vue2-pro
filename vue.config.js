/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-16 17:56:46
 * @LastEditors: 周涛
 * @LastEditTime: 2021-10-19 09:05:03
 */
const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin'); //生成骨架屏插件
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html'
  //   }
  // },
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 基本路径
  // baseUrl: './', // vue-cli3.3以下版本使用
  publicPath: process.env.NODE_ENV === "development" ? "/" : "/vue2-pro/", // vue-cli3.3+新版本使用
  // 输出文件目录
  // outputDir: 'dist/saas/',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  // assetsDir: 'static',
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false // 此处会报警告

    // ----全局注入scss变量----
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/stylues/global-variable.scss";
        `
      }
    },
  },

  chainWebpack: config => {
    // // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
    // config.plugin('define').tap(args => {
    //   args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
    //   return args
    // })
    config.plugin("loadshReplace").use(new LodashModuleReplacementPlugin());

    // 1.这种方式可以
    // #region svg-config
    const rule = config.module.rule('svg')
    rule.exclude.add(path.resolve('./src/assets/icons/svg'))
    const svgRule = config.module.rule('auto-svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule
      .test(/\.(svg)(\?.*)?$/)
      .exclude
      .add(/node_modules/) // 正则匹配排除node_modules目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    // #endregion svg-config

    // 2.这种方式可以 （svg rule loader）
    // const svgRule = config.module.rule('svg') // 找到svg-loader
    // svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    // svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    // svgRule // 添加svg新的loader处理
    //   .test(/\.svg$/)
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]',
    //   })
    // // 修改images loader 添加svg处理
    // const imagesRule = config.module.rule('images')
    // imagesRule.exclude.add(resolve('src/assets/icons'))
    // config.module
    //   .rule('images')
    //   .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)



    // 3.这种方式也可以
    // // 清空默认svg规则
    // config.module
    //   .rule('svg')
    //   .uses.clear()
    // config.module //针对svg文件添加svg-sprite-loader规则
    //   .rule('svg1')
    //   .test(/\.svg$/)
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end()
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


  devServer: {
    open: false, //是否自动弹出浏览器页面   
    host: "localhost",
    port: "8888",
    https: false, //是否使用https协议
    hotOnly: true, //是否开启热更新
    proxy: {
      '/user': {
        target: 'https://devadminschool.icourt.cc',
        ws: true, //如果要代理 websockets，配置这个参数
        secure: false,  //如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/user": "",
        },
      },
      '/live': {
        target: 'https://devadminschool.icourt.cc',
        ws: true, //如果要代理 websockets，配置这个参数
        secure: false,  //如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/live": "",
        },
      }
    }
  },

  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  lintOnSave: false
}
