<template>
  <div class="feedback-table-container">
    <el-table
      :data="feedBackList.list"
      border
      fit
      style="width: 100%">
      <el-table-column
        fixed
        header-align="center"
        prop="actionTime"
        label="日期">
      </el-table-column>
      <el-table-column
        header-align="center"
        prop="crmId"
        label="crmID">
      </el-table-column>
      <el-table-column
        header-align="center"
        prop="clientVersion"
        label="终端版本">
      </el-table-column>
      <el-table-column
        header-align="center"
        prop="actionDevice"
        label="浏览器内核">
      </el-table-column>
      <el-table-column
        header-align="center"
        prop="meetingId"
        label="会议id">
      </el-table-column>
      <el-table-column
        prop="actionContent"
        label="记录"
        header-align="center"
        min-width="400">
      </el-table-column>
      <!--<el-table-column-->
      <!--header-align="center"-->
      <!--align="center"-->
      <!--fixed="right"-->
      <!--label="操作">-->
      <!--<template slot-scope="scope">-->
      <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
      <!--<el-button type="text" size="small">编辑</el-button>-->
      <!--</template>-->
      <!--</el-table-column>-->
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        align="right"
        layout="total, sizes, prev, pager, next, jumper"
        :total="feedBackList.count">
      </el-pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    methods: {
      handleClick (row) {
        console.log(row)
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
        this.$emit('getFeedbackList', {
          criteria: {},
          pageSize: val
        })
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
        this.$emit('getFeedbackList', {
          criteria: {},
          currentpage: val
        })
      }
    },
    props: {
      feedBackList: {}
    },
    data () {
      return {
        currentPage: 1
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">

</style>
