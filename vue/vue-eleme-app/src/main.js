// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import './common/stylus/index.styl'

axios.defaults.baseURL = 'https://easy-mock.com/mock/5cfb48988115d57ff6ad3751/example'
Vue.config.productionTip = false
Vue.prototype.$http = axios // 将axios挂载到vue的原型链上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
