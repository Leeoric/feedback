<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1" class="float-right el-mengu-border-bottom">
      <el-select v-model="value" placeholder="请选择HOST" class="float-right" @change="openMsg">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-menu-item>
  </el-menu>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        activeIndex: '1',
        options: [{
          value: 'http://114.80.154.45/3CWeb',
          label: '主站'
        }, {
          value: 'http://10.10.100.42/3CWeb',
          label: '体验站'
        }, {
          value: 'http://10.102.32.15/3CWeb',
          label: '测试站'
        }, {
          value: 'http://10.102.16.202:8080/3CWeb',
          label: '开发站'
        }],
        value: ''
      }
    },
    methods: {
      openMsg (hostValue) {
        //TODO trans msg to feedback component
        this.$message({
          message: '切换HOST成功,当前HOST为：' + hostValue,
          type: 'success'
        })
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  .float-right {
    float: right;
  }

  .el-menu-demo .el-mengu-border-bottom {
    border-bottom: none;
  }
</style>
