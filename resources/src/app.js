// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@store'
import router from '@router'
import { sync } from 'vuex-router-sync'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

import App from './App.vue'
// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
  router,
  store,
  ...App
})

// Change Document Title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

// Disable Devtools on Production
if (process.env.NODE_ENV == "production") {
  Vue.config.devtools = false;
  Vue.config.debug = false;
  Vue.config.silent = true;
}

// actually mount to DOM
app.$mount('#app')

export { app, router, store }