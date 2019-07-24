import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vueVimeoPlayer from 'vue-vimeo-player'

Vue.config.productionTip = false

Vue.use(vueVimeoPlayer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
