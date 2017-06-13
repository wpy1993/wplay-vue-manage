<template>
	<div id="log_reg">	
		
		<router-view></router-view>
	</div>
</template>

<script>
	import TopMenu from '../components/Topmenu.vue'

	export default {
		name: 'LR'
	}
</script>

<style lang="scss">
	#log_reg {
		background: url(../assets/logo.png) no-repeat center;
		background-size: 100%;
	}
</style>