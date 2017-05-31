<template>
	<div id="logo">
		<h2>{{name}}</h2>
		<p>{{detail}}</p>
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
		width: 100%;
		text-align: center;
	}
	h2 {
		margin: 0;
		border-radius: 15%;
		background: #01cdb2;
		line-height: 40px;
	}
	p {
		font-size: 16px;
		background: -webkit-gradient(linear , 0 0, 0 100%, from(#01cdb2), color-stop(.5, #a3cddd), to(#ccc));
		margin-top: 10px;
		margin-bottom: 10px;
	}
</style>