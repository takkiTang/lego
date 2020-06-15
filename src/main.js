import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import _ from 'lodash'
import store from './store'
import VueClipboard from 'vue-clipboard2'
 
Vue.use(VueClipboard)

Vue.config.productionTip = false
Vue.prototype._ = _




new Vue({
  render: h => h(App),
  store
}).$mount('#app')