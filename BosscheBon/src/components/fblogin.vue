<template>
  <div id="fblogin">
    <button @click="authenticate('facebook')">auth Facebook</button>
  </div>
</template>

<script>
  export default {
    name: 'fblogin',
    methods: {
      authenticate: function (provider) {
        this.$auth.authenticate(provider).then(function () {
          // Execute application logic after successful social authentication
        })

        this.$auth.logout(provider)
      }
    }
  }
</script>

