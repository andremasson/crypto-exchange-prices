// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router'
import App from './App'
import 'vuetify/dist/vuetify.min.css'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
