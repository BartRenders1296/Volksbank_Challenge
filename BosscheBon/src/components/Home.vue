<template>
  <div id="home">
    <h1>Welkom!</h1>
    <img src="assets/logo.png" alt="Bossche Bon">
    <h2>Inloggen met</h2>
    <button class="btn btn-primary" @click="authenticate('facebook')">Facebook</button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      authenticate: function (provider) {
        this.$auth.authenticate(provider).then(function () {
          // Execute application logic after successful social authentication
        })
      }
    }
  }
</script>

<style>
  h1 {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .btn-primary {
    border: 0;
    padding: 30px 50px;
    font-size: 26px;
  }
</style>