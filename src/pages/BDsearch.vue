<template>
	<div id="bdsearch">
		<h2 id="bdsearch">
			这里是百度搜索
		</h2>
		<p>
			<font color="red">注意：由于axios禁止使用jsonp，所以此处引用了jquery1.12.4</font>
		</p>
		
		<el-col id="searchCon" :span="12" :offset="6">
			<div class="search-box" :gutter="20">
				<input :span="8" :offset="6" type="text" v-model="msg"
									@keyup="presearch"
									@focus="focus"
									@blur="blur">
				<span class="btn" @click="search"
						placeholder="请输入搜索信息">百度一下</span>
			</div>

			
			<el-col :span="16" :offset="1"  v-show="this.showBtn">
			  <div class="grid-content bg-purple">
			  	<el-card class="box-card" :body-style="{padding: '0'}">
			  	  
				  <div v-for="(item, index) in result" :key="item" class="text item">
				    {{item }}
				  </div>
				</el-card>
			  </div>
		    </el-col>
			
		</el-col>
		
	</div>
		
	
</template>

<script>
	import jquery from 'jquery'
	//这里的console是无效的，不该说无效，应该说无人认领
	// console.log(jquery);

	export default {
		name: 'bdsearch',
		data() {
			return {
				msg: '',
				result: [],
				showBtn: false
			}
		},
		methods: {
			presearch() {
				// axios不支持jsonp，别做梦了
				
				// 只能在export中console.log才有效，因为没有输出的东西，并不会被带出去啊
				// console.log(jquery);
				var that = this;
				jquery.ajax({
					url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + this.msg + '&json=1',
					async: true,
					type: 'GET',
					crossDomain: true,
					dataType: 'jsonp',
					jsonp: 'cb',
					jsonpCallback: 'callback'

				}).then(function (res) {
					/*
					 * 尝试了这么多，才发现，我只是没有使用that而已，并不需要什么$set之类的
					 * 但是问题来了，$set什么时候使用呢？
					 * 下面强行改变result[2]也是ok的
					 * 找到了根源，在于上面最初声明的result不能为空。。。一脸懵逼，为啥？--
					 */
					//console.log(res.s instanceof Array);  //true
					// console.log(typeof(res.s));  // object   真是让人蛋疼的结果
					// that.$set(that.result, res.s[0]);
					that.result =res.s;

					// 长点脑子吧，记得把showBtn的状态改变了啊！
					if (this.result.length != 0) {
						this.showBtn = true
					}
					
					// Vue.set(that, msg, 'q');
				})


			},
			search() {
				alert('暂时不让搜哦亲');
				console.log(this.msg);
			},
			focus() {
				// alert('聚焦了');
				if (this.result.length != 0) {
					this.showBtn = true
				}
			},
			blur() {
				// alert('失去焦点了');
				this.showBtn = false;
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
	.text {
	    font-size: 14px;
	  }

	  .item {
	    padding: 10px 0;
	    text-align: left;
	    text-indent: 5px;
	  }

	  .clearfix:before,
	  .clearfix:after {
	      display: table;
	      content: "";
	  }
	  .clearfix:after {
	      clear: both
	  }

	  .box-card {
	    width: 400px;
	    margin-left: 2px;
	    border-top: 0;
	  }
</style>