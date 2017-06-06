<template>
	<div id="page2">
		<h2>这里是天猫search的page2</h2>
		<p>我这里使用了axios哦： {{msg}}</p>
	</div>
</template>

<script>
	export default {
		name: 'page2',
		data() {
			return {
				msg: ''
			}
		},
		mounted: function () {
			var that = this;
			this.$axios('../../Data/data.txt').then((res) => {
				// 麻蛋怎么解决this指向被修改的问题？
				that.msg = res.data;

			})
		}
	}
</script>