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
      component: Home,
      meta: {title: 'Vuedonara Mix'}
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {title: 'Hello world! - Vuedonara Mix'}
    }
  ]
})