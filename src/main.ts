import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {applyPolyfills, defineCustomElements} from '@pottery-ui/core/loader';

Vue.config.productionTip = false
Vue.config.ignoredElements = [/ui-\w*/];

applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
