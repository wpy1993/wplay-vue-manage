import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 声明一堆路由对应的路径
// const home = r => require.ensure( [], () => r( require('@components/home') ), 'home' )
import Defaults from '../pages/404.vue'
import RouterA from '../pages/Router-a.vue'
import BDsearch from '../pages/BDsearch.vue'
import TMsearch from '../pages/TMallSearch.vue'

import Hackbg from '../pages/HackBg.vue'

const routes = [
	{path: '/BDsearch', component: BDsearch},
	{path: '/TMsearch', component: TMsearch},
	{path: '/RouterA', component: RouterA},

	{path: '/hack-bg', component: Hackbg},


	// 原来重定向放在底部也是没有关系的啊
	{path: '*', redirect: '/defaults'},	
	{path: '/defaults', component: Defaults}
]

// export
export default new VueRouter({
	// 使用mode去除#号
	mode: 'history',
	routes
})