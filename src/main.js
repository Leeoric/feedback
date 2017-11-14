// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import axios from 'axios'

axios.interceptors.request.use(function (config) {
  console.log(config)
  config.data = JSON.stringify(config.data)
  if (config.method === 'post') {
    config.headers['Content-Type'] = 'application/json'
  }
  config.timeout = 15000
  return config
}, function (error) {
  return Promise.reject(error)
})
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
