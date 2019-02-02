import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@views/Home'
import About from '@views/About'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})