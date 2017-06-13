<template>
	<div id="main">
		<el-row :gutter="20">
	      <!-- 左侧菜单栏，包含logo和左侧下拉条 -->
	      <el-col :span="4">
	        <sideMenu></sideMenu>
	      </el-col>
	      
	      <!-- 右侧内容栏，包含上侧导航和主内容区 -->
	      <el-col :span="20" >
	        <Home></Home>
	      </el-col>
	    </el-row>
	</div>
</template>

<script>
	import SideMenu from '../components/Sidemenu.vue'
	import Home from '../components/Home.vue'

	export default {
		name: 'main',
		// router,
		components: {
			SideMenu,
			Home
		}
	}
</script>

