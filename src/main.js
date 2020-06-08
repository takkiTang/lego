import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import _ from 'lodash'
import store from './store'

Vue.config.productionTip = false
Vue.prototype._ = _



new Vue({
  render: h => h(App),
  store
}).$mount('#app')