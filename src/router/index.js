import Vue from 'vue'
import Router from 'vue-router'
import TimTopView from '@/components/templates/TimTopView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TimTop',
      component: TimTopView
    }
  ]
})
