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
			this.$axios('../../Data/data.txt').then(function (res) {
				this.msg = res.data;
			})
		}
	}
</script>