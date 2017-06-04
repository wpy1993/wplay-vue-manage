<template>
	<el-row id="content">
		<!-- 这里存放路由的主视图 -->
		<router-view></router-view>
	</el-row>
</template>

<script>
/*import Vue from 'vue'
import VueRouter from 'vue-route'
Vue.use(VueRouter)*/
  


export default {
}

</script>

<style scoped lang="scss">
	#content {
      width: 100%;
      margin-top: 5px;
    }

</style>