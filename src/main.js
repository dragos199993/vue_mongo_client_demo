import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VeeValidate from 'vee-validate';

import './registerServiceWorker';


Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
