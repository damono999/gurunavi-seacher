import Vue from 'vue';
import Router from 'vue-router';

import Home from '@pages/Home';
import Search from '@pages/Search';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    {
      path: '/search',
      component: Search,
      name: 'search'
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
});