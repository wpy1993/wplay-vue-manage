<template>
  <div id="app">
    <el-col :span="24">      
        <TopMenu></TopMenu>
     </el-col>
    <el-col class="main" :span="24">
      <router-view></router-view>
    </el-col>
    

  </div>
</template>

<script>
import TopMenu from './components/Topmenu.vue'


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    TopMenu
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
  // 窝草？为啥#app会有边距？只能使用*来去除了。。。
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  .main {
    margin-top: 60px;
  }

</style>
