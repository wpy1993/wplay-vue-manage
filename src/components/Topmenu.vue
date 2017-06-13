<template>
	<div id="topMenu">
		<el-menu theme="dark" :router="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  
		<el-menu-item index="/"><logo></logo></el-menu-item>
		  <el-menu-item index="1">处理中心</el-menu-item>

		  <el-submenu index="2">
		    <template slot="title">登录/注册</template>
		    <el-menu-item index="/Login">登录</el-menu-item>
		    <el-menu-item index="/Register">注册</el-menu-item>
		  </el-submenu>

		  <el-menu-item index="/hack-bg">关于我</el-menu-item>
	  </el-menu>
	</div>
	  
</template>

<script>
	import Logo from '../components/Logo.vue'

	export default {
		name: 'topmenu',
		data() {
			return {
				activeIndex: '1'
			};
		},
		components: {
		    Logo
		  },
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style lang="scss">
	a {
		text-decoration: none;
		color: #48576a;
	}
	.el-menu-item.is-active > a {
		color: #20a0ffl
	}
</style>