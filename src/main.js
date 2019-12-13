import '@babel/polyfill'
// import '@scss/style.scss';
import Vue from 'vue'
import App from '@pages'
// import router from './_router/router'

Vue.config.productionTip = false

new Vue({
  // router: router,
  render: h => h(App),
}).$mount('#app')
