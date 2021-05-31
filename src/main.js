// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'

//ajax support
import  VueResource  from 'vue-resource'
//cross-domain support
import axios from 'axios'


Vue.use(VueResource)
Vue.prototype.$axios=axios;

// step3：使每次请求都会带一个 /api 前缀 
axios.defaults.baseURL = '/axios_cnblogs'
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



