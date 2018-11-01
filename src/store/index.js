import Vue from 'vue';
import Vuex from 'vuex';

import authentication from './authentication/index';
import alerts from './alerts/index';
import helpers from './helpers/index';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication,
    alerts,
    helpers,
  },
});
