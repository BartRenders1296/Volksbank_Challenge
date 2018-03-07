// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSession from 'vue-session'
import VueAuthenticate from 'vue-authenticate'
import VueAxios from 'vue-axios'
import axios from 'axios'
import FBSignInButton from 'vue-facebook-signin-button'
Vue.use(FBSignInButton)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueSession)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:8080', // Your API domain

  providers: {
    facebook: {
      clientId: 2118470915055975,
      redirectUri: 'http://localhost:8080/loginsuccess/', // Your client app URL
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created: function () {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '2118470915055975',
        cookie     : true,  // enable cookies to allow the server to access the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
      });
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
})
