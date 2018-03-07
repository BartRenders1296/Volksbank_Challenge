<template>
  <div id="home">
    <h1>Welkom!</h1>
    <img :src="logo" class="img-fluid" height="100px" alt="Bossche Bon" />
    <h2>Inloggen met</h2>
    <button class="btn btn-primary" @click="authenticate('facebook')"><i class="fab fa-facebook-f"></i>Facebook</button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        logo: "./static/img/logo.png"
      }
    },
    methods: {
      authenticate: function (provider) {
        this.$auth.authenticate(provider).then(function () {
         alert("test");
        })
      }
    }
  }
</script>

<style>
  h1 {
    margin-top: 60px;
    margin-bottom: 45px;
  }
  h2 {
    margin-top: 45px;
    margin-bottom: 30px;
  }
  .btn-primary {
    border: 0;
    padding: 20px 50px;
    padding-left: 30px;
    font-size: 26px;
  }
  .btn .fa-facebook-f {
    margin-right: 20px;
    margin-left: 20px;
  }
</style>