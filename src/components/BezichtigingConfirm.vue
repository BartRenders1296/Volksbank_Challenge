<template>
  <div class="container">
    <div class="row">
      <button v-on:click="test">Confirm</button>
    </div>
  </div>
</template>

<script>
  // this.$session.start()

  export default {
    name: 'bezichtigingconfirm',
    beforeCreate: function () {
      this.$session.start()
      this.$session.set('naam', 'henk')
    },
    methods: {
      test: function (event) {
        alert('Session says: ' + this.$session.get('naam'))
      }
    }
  }
</script>

<style scoped>
  div.picture {
    margin-bottom: 10px;
  }
</style>
