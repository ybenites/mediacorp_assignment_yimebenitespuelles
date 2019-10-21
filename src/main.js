import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/scss/bootstrap-reboot.scss';
// import 'bootstrap/scss/bootstrap-grid.scss';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
