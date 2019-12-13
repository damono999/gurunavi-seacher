import '@babel/polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.path === '/users/1') {
//     next('/');
//   }
//   next();
// });

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
