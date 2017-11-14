import Vue from 'vue'
import Router from 'vue-router'
import FeedBack from '@/components/rightmain/FeedBack'
import Page1 from '@/components/rightmain/Page1'

Vue.use(Router)

let routes = [
  {
    path: '/FeedBack',
    name: 'feedback',
    class: 'el-icon-location',
    id: '1',
    component: FeedBack
  },
  {
    path: '/Page1',
    name: 'page1',
    class: 'el-icon-menu',
    id: '2',
    component: Page1
  }
]

export default new Router({
  routes
})
