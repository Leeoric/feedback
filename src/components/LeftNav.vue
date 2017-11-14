<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        v-for="(item,index) in $router.options.routes" :key="index">
        <el-menu-item :index="item.path">
          <i :class="item.class"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },

    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
        switch (key) {
          case '1':
            this.$router.push({path: '/feedback'})
            break
          case '2':
            this.$router.push({path: '/page1'})
            break
        }
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  .el-menu {
    border: none;
  }
</style>
