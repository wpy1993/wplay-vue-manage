<template>
	<div id="logo">
		{{name}}
	</div>
</template>

<script>
	
	export default {
		name: 'logo',
		data () {
			return {
				name : 'wplay',
				detail: 'OOS: Objected-Oriented Salary'
			}
			
		}
	}
</script>

<style scoped lang="scss">
	#logo {
		width: 150px;
		height: 100%;
		text-align: center;
		color: #fff;
		font-size: 40px;
		font-family: '宋体';
	}
	
</style>