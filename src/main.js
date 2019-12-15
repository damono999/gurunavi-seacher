import '@styles/style.scss';

import '@babel/polyfill'
import Vue from 'vue'
import App from '@pages'
import router from '@router'
import store from '@store'
import mixins from '@helpers/mixins.js'

Vue.config.productionTip = false;
Vue.mixin(mixins);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
