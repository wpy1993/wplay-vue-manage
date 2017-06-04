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

import page1 from '../pages/page1.vue'
import 	page2 from '../pages/page2.vue'

import highcharts from '../pages/highcharts.vue'
import table from '../pages/table.vue'

const routes = [
	{path: '/BDsearch', component: BDsearch},
	{
		path: '/TMsearch',   //不知道:id怎么用，用了就会错，不用但是为什么会有那个api呢？
		component: TMsearch,
		children: [
			{
				path: 'page1',
				component: page1
			},
			{
				path: 'page2',
				component: page2
			}	

		]
	},
	{path: '/RouterA', component: RouterA},

	{path: '/hack-bg', component: Hackbg},

	// 导航二：highcharts和table
	{path: '/highcharts', component: highcharts},
	{path: '/table', component: table},

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