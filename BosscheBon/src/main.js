// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSession from 'vue-session'
import VueAuthenticate from 'vue-authenticate'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueImageCompare from 'vue-image-compare';

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

Vue.config.productionTip = false

Vue.use(VueImageCompare);
Vue.use(VueAxios, axios)
Vue.use(VueSession)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:8080', // Your API domain

  providers: {
    facebook: {
      clientId: 2118470915055975,
      redirectUri: 'http://localhost:8080/auth/callback', // Your client app URL
      display: 'popup'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
