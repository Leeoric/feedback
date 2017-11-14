<template>
  <div id="app">
    <el-container>
      <el-header>
        <header-nav></header-nav>
      </el-header>
      <el-container>
        <el-aside style="margin:0 20px;background-color: rgb(84, 92, 100); min-height: 100%;">
          <left-nav></left-nav>
        </el-aside>
        <el-main>
          <transition>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import HeaderNav from '@/components/HeaderNav'
  import LeftNav from '@/components/LeftNav'

  export default {
    name: 'app',
    beforeCreate () {
      if (this.$route.path === '/') {
        this.$router.push({path: '/FeedBack'})
      }
    },
    components: {
      HeaderNav, LeftNav
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    .el-container {
      height: 100%;
    }
  }
</style>
