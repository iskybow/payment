import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import store from '@/store';
import appInput from './components/appInput'
import popup from './components/popup'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.component('app-input', appInput);
Vue.component('popup', popup);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
