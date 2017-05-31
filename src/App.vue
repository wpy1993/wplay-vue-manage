<template>
  <div id="app">
    <el-row :gutter="20">
      <!-- 左侧菜单栏 -->
      <el-col :span="4">
        <logo></logo>
        <sideMenu></sideMenu>
      </el-col>
      
      <!-- 右侧内容栏 -->
      <el-col :span="20" >
        <TopMenu></TopMenu>
        <p>下面本该有router的</p>
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

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
