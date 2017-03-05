// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store/'
import MuseUI from 'muse-ui'
import i18nChs from './i18n/index.js'

import 'muse-ui/dist/muse-ui.css'

Vue.use(VueRouter)
Vue.use(MuseUI)

const router = new VueRouter({
  routes
})

Vue.prototype.i18n = i18nChs

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
