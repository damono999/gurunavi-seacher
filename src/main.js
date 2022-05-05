import '@styles/style.scss';

import '@babel/polyfill';
import Vue from 'vue';
import App from '@pages';
import router from '@router';
import store from '@store';
import mixins from '@helpers/mixins.js';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueLodash from 'vue-lodash';

Vue.config.productionTip = false;
Vue.mixin(mixins);
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_API_KEY,
    libraries: 'places',
  },
});
const options = { name: 'lodash' }; // customize the way you want to call it
Vue.use(VueLodash, options); // options is optional
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
