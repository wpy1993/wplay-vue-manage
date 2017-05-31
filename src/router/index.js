import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 声明一堆路由对应的路径
// const home = r => require.ensure( [], () => r( require('@components/home') ), 'home' )
import home from '../components/Home.vue'
import router1 from '../pages/Router-1.vue'

const routes = [
	{path: '/home', component: home},
	{path: '/router1', component: router1}
]

// export
export default new VueRouter({
	routes
})