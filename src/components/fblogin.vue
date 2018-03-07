<template>
  <div id="fblogin">
    <!--<button @click="authenticate('facebook')">auth Facebook</button>-->
    <template>
      <fb-signin-button
        :params="fbSignInParams"
        @success="onSignInSuccess"
        @error="onSignInError"
        :onlogin="checkLoginState">
        Sign in with Facebook
      </fb-signin-button>

    </template>
  </div>
</template>

<script>
  export default {
    name: 'fblogin',
    data () {
      return {
        fbSignInParams: {
          scope: 'email,user_likes',
          return_scopes: true,
        }
      }
    },
    methods: {
      onSignInSuccess (response) {
        FB.api('/me', dude => {
          console.log(`Good to see you, ${dude.name}.`)
          console.log(dude.name)
          this.$router.push("/bonnen/")
      })
      },
      onSignInError (error) {
        console.log('OH NOES', error)
      },
      checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
      }
    }
  }
  // export default {
  //   name: 'fblogin',
  //   methods: {
  //     authenticate: function (provider) {
  //       this.$auth.authenticate(provider).then(function () {
  //         // Execute application logic after successful social authentication
  //       })
  //     }
  //   }
  // }

</script>


<style>
  .fb-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #4267b2;
    color: #fff;
  }
</style>

