<template>
  <el-form :model="ruleForm" :inline="true" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="CRMid" prop="crmid">
      <el-input v-model="ruleForm.crmid"></el-input>
    </el-form-item>
    <el-form-item label="会议ID" prop="meetingid">
      <el-input v-model="ruleForm.meetingid"></el-input>
    </el-form-item>
    <el-form-item label="时间" prop="timeValue">
      <el-date-picker
        v-model="ruleForm.timeValue"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">搜索</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        ruleForm: {
          crmid: null,
          meetingid: null,
          timeValue: []
        },
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        rules: {
          crmid: [
//            {type: 'number', required: false, message: '请输入crmID数字', trigger: 'blur'},
//            {min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur'}
          ],
          meetingid: [
//            {type: 'number', required: false, message: '请输入会议ID数字', trigger: 'change'}
          ],
          timeValue: [
            {type: 'array', required: false, message: '请选择日期', trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        let self = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('cross', self.ruleForm.crmid)
            this.$emit('getFeedbackList', {
              criteria: {
                meetingId: self.ruleForm.meetingid,
                crmId: self.ruleForm.crmid
              },
              startTime: self.ruleForm.timeValue[0],
              endTime: self.ruleForm.timeValue[1]
            })
          } else {
            console.log(formName)
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">

</style>
