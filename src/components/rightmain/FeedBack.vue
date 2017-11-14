<template>
  <div>
    <feed-back-search @getFeedbackList="getFeedbackList"></feed-back-search>
    <keep-alive>
      <feed-back-table :feedBackList="feedBackList" @getFeedbackList="getFeedbackList"></feed-back-table>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  import FeedBackTable from '@/basic/FeedBackTable'
  import FeedBackSearch from '@/basic/FeedBackSearch'
  import { ACTIONCODE } from '@/feature/command.js'

  let devHost = 'http://10.102.16.202:8080/3CWeb'
   //let devHost = 'http://10.102.32.15/3CWeb'

  export default {
    data () {
      return {
        host: devHost,
        feedBackList: {}
      }
    },
    created () {
      this.getFeedbackList()
    },
    watch: {
      host: function () {
        this.getFeedbackList()
      }
    },
    mounted () {
    },
    methods: {
      test () {
        console.log('hehe')
      },
      getFeedbackList (obj) {
        console.log(this.host)
        if (!obj) {
          var preSenddata = {
            criteria: {}
          }
        } else {
          preSenddata = {
            criteria: {
              meetingId: obj.criteria.meetingId || '',
              crmId: obj.criteria.crmId || ''
            },
            isPaging: obj.isPaging || true,
            pageSize: obj.pageSize || 10,
            currentPage: obj.currentpage || 1,
            startTime: obj.startTime || '',
            endTime: obj.endTime || ''
          }
        }
        axios.post(this.host + '/getUserLog.json', preSenddata)
          .then((response) => {
            console.log(response)
            this.translateCode(response.data)
            this.feedBackList = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },
      translateCode (code) {
        for (let item of code.list) {
          //content handler
          let content = ''
          if (item.actionContent.length < 20) {
            continue
          }
          let distCode = JSON.parse(item.actionContent)
          for (let k in distCode) {
            if (ACTIONCODE[k]) {
              content += ACTIONCODE[k]
              content += '\r\n'
              content += decodeURIComponent(distCode[k])
            } else {
              content += k
              content += '\r\n'
              content += decodeURIComponent(distCode[k])
            }
          }
          item.actionContent = content
          //version handler
          if (item.clientVersion.length < 20) {
            continue
          }
          let distVersionCode = JSON.parse(item.clientVersion)
          item.clientVersion = distVersionCode.result
        }
      }
    },
    components: {
      FeedBackTable,
      FeedBackSearch
    }
  }
</script>

<style>

</style>
