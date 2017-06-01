<template>
	<h3>{{msg}}</h3>
</template>

<script>
	export default {
		name: 'Router-a.vue',
		data () {
			// 子组件的data需要是函数并且return出来一个对象
			return {
				msg: 'this is a router-a.vue'
			}
			
		}
	}
</script>

<style>
	
</style>