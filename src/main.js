import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
