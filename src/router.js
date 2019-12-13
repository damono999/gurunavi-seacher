import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home/Home';
import ShowStore from './components/ShowStore/ShowStore';
import ResultSearch from './components/ResultSearch/ResultSearch';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/result-search',
      component: ResultSearch,
      name: 'result-search'
    },
    {
      path: 'search/store/',
      component: ShowStore,
      name: "show-store"
    }
  ],
});