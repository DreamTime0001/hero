// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
import Vue from 'vue'
import './assets/scss/main.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from './libs/axios'
import router from './router'
import App from './App.vue'
import filters from './libs/filters'

Vue.prototype.$axios = axios;

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Object.keys(filters).forEach((key) => {
  const Filter = filters[key];
  Vue.filter(key, Filter);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
