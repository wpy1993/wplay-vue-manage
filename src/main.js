import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'


Vue.use(ElementUI)
Vue.use(VueRouter)

// 声明router
import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})