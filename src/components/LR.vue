<template>
	<div id="log_reg">	
		<div class="void-top"></div>
		<router-view class="lr-box"></router-view>
	</div>
</template>

<script>

	export default {
		name: 'LR'
	}
</script>

<style lang="scss" scoped>
	html, body {
		width: 100%;
		height: 100%;
		overflow: hidden;
		overflow-y: hidden;
	}
	#log_reg {
		background: url(../assets/lr-bg.jpg) no-repeat center;
		background-size: 100%;

		width: 100%;
		position: absolute;
		top: 60px;
		bottom: 0; 

	}
	.void-top {
		width: 100%;
		height: 0;   // 暂时没见他有用的地方
	}
	.lr-box {
		text-align: center;
		margin: 0 auto;
		// margin-top不知道为啥无效，没办法，用padding-top吧
		padding-top: 50%;
		transform: translateY(-50%);
	}
</style>