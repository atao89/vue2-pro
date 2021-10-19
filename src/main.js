/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:12:54
 * @LastEditors: 周涛
 * @LastEditTime: 2021-10-19 09:46:15
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './components'
import './assets/icons'
import './lib/element-ui'
import { ls, ss } from './utils/storage'
import './assets/stylues/common.scss'
import './directives'
import './permission.js'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  error: require('@/assets/images/error.png'), //报错需要的图片
  loading: require('@/assets/images/loading.png') // 替换需要的图片
})

import moment from "moment";
moment.locale("zh-cn");

import DefaultLayout from './layout/default'
import HomeLayout from './layout/home'
import BasicLayout from './layout/basic'

Vue.component('default-layout', DefaultLayout)
Vue.component('home-layout', HomeLayout)
Vue.component('basic-layout', BasicLayout)

Vue.prototype.ls = ls;
Vue.prototype.ss = ss;
Vue.prototype.$moment = moment;

// 打包生产环境不需要Mock
if (process.env.NODE_ENV !== 'production') import('./mock')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

// let app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// })

// window.mountApp = () => {
//   app.$mount('#app')
// }

// if (window.STYLE_READY) {
//   window.mountApp
// }