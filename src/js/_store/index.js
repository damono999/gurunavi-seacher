import Vue from 'vue';
import Vuex from 'vuex';

import search from './_modules/search';

Vue.use(Vuex);
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    search,
  },
});