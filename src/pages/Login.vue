<template>
	<div id="Login">
		<div class="login-box">
			<h2>请登录哟</h2>
			<el-form ref="form" :model="form" label-width="">
				<el-form-item label="">
					<el-input v-model="form.name" placeholder="昵称/邮箱/手机号"></el-input>
				</el-form-item>
				<el-form-item label="">
					<el-input v-model="form.password" placeholder="密码"></el-input>
				</el-form-item>
				<el-checkbox-group class="login-options" v-model="form.type">
					<el-checkbox label="记住我" name="type"></el-checkbox>
					<span class="find-password" @click="cantFind">找回密码</span>
				</el-checkbox-group>
				<el-form-item>
					<el-button class="login-btn" type="success">登录</el-button>
				</el-form-item>
			</el-form>
		</div>

		

</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					password: '',
					type: false
				}
			}
		},
		methods: {
			cantFind() {
				const h = this.$createElement;

				this.$notify({
					title: '找回密码',
					message: h('em', {style: 'color: teal'}, '嘻嘻，不给你找回密码的机会哟~（友情提示，狂点找回密码很好玩哟）')
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	h2 {
		margin-bottom: 25px;
		font-size: 25px;
		font-weight: 400;
		text-align: center;
		color: #323a45;
	}
	.login-box {
		position: relative;
		z-index: 9;
		padding: 30px 40px 40px; 
		border-radius: 10px;
		width: 400px;
		background: #fff;
		margin: 0 auto;
	}
	.login-options {
		text-align: left;
		.find-password {
			float: right;
			cursor: pointer;
		}
	}

	.login-btn {
		margin-top: 10px;
		width: 100%;
		height: 48px;
		border-radius: 24px;
		background: #323a45;
		font-size: 24px;
		border-color: #323a45;
	}

</style>

<style lang="scss">
	/* 窝草？真的可以写两个scss */
	.el-input__inner {
		height: 52px;
	}
</style>