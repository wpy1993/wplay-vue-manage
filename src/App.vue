<template>
  <div id="app">
    <el-row :gutter="20">
      <!-- 左侧菜单栏，包含logo和左侧下拉条 -->
      <el-col :span="4">
        <logo></logo>
        <sideMenu></sideMenu>
      </el-col>
      
      <!-- 右侧内容栏，包含上侧导航和主内容区 -->
      <el-col :span="20" >
        <TopMenu></TopMenu>
        <Home></Home>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import TopMenu from './components/Topmenu.vue'
import SideMenu from './components/Sidemenu.vue'
import Logo from './components/Logo.vue'
import Home from './components/Home.vue'


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // router,
  components: {
    SideMenu,
    Logo,
    TopMenu,
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
  width: 100%;
  min-height: 100%;
}
html, body {
  width: 100%;
  min-height: 100%;
}

</style>
