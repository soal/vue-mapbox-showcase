import Vue from 'vue'
import Router from 'vue-router'
import GlMapTest from './views/GlMapTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'glMapTest',
      component: GlMapTest
    }
  ]
})
