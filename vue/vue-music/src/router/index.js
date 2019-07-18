import Vue from 'vue'
import Router from 'vue-router'
import search from '@/pages/search'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/search',
    name: 'search',
    component: search
  }]
})
