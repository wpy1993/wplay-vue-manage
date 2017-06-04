import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Axios from 'axios'

import vueHighcharts from 'vue-highcharts'

import App from './App.vue'


Vue.use(ElementUI)
Vue.use(vueHighcharts)
// Vue.use(Axios)
Vue.prototype.$axios = Axios

// 声明router
import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
