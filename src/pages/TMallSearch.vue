<template>
	<div id="tmsearch">
		<h2>
			这里是天猫搜索
		</h2>
		<router-link tag="button" to="/TMsearch/page1">page1</router-link>
		<!-- 关于路由这里点击事件无法生效原因很简单，页面换了啊，当然不生效了 -->
		<router-link tag="button" @click="getPage" to="/TMsearch/page2">page2</router-link>
		<a href="#" @click="getPage">点击可以使用</a>
		<router-view></router-view>
		<input type="text" @keyup="keyup">
	</div>
		

</template>

<script>
	export default {
		name: 'tmsearch',
		methods: {
			getPage() {
				alert(1);
				// 但是并不生效，这就尴尬了
				console.log('这里是判断关于router是否有形参');

			},
			keyup () {
				alert(1);
			}			
		}	
	}
</script>