<template>
	<div id="bdsearch">
		<h2 id="bdsearch">
			这里是百度搜索
		</h2>
		<div class="search-box">
			<input type="text" v-model="msg"
								@keyup="presearch">
			<span class="btn" @click="search"
					placeholder="请输入搜索信息">百度一下</span>
		</div>
			
	</div>
		
	
</template>

<script>
	export default {
		name: 'bdsearch',
		data() {
			return {
				msg: ''
			}
		},
		methods: {
			search() {
				/*this.$ajax({
					methods: 'get',
					url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + this.msg,
					headers: {'X-Requested-With': 'XMLHttpRequest'}

				}).then(function (msg) {
					console.log(msg.data);
				}, function (err,errcode) {
					console.log(err);
					console.log(errcode);
				})*/
				/*this.$axios.get(
					'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + this.msg + '&cb=precb'
				)*/
				this.$axios({
					method: 'get',
					url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + this.msg + '&cb=precb',
					responseType: 'jsonp',
					headers: {'contentType': ''}
				})

				function precb (res) {
					console.log(res)
				}

			},
			presearch() {
				console.log(this.msg);
			}
		}
	}
</script>

<style scoped lang="scss">
	@mixin bdr5 {
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		border-radius: 5px;
	}

	#bdsearch {
		text-align: center;
		h2 {
			margin: 10px auto;
			text-align: center;
		}
	}
	.search-box {
		input {
			width: 400px;
			height: 40px;
			line-height: 38px;
			@include bdr5;
		}
		.btn {
			padding: 10px 50px;
			border: 1px solid #333;
			box-shadow: inset 4px 4px #eee;
			cursor: pointer;
			@include bdr5;
		}
	}
</style>