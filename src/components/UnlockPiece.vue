<template>
  <div id="unlockpiece">
    <h1>Je hebt een stukje coupon verdiend</h1>
      <img :src="foto"/><br>
      <button v-on:click="click" class="btn btn-primary">Terug naar de kaart</button>
  </div>
</template>

<script>
    export default {
      name: "unlockpiece",
      beforeCreation: function () {
        this.$session.start();
      },
      data: function () {
        return {
          foto: "./static/img/QR " + this.$session.get('CouponPieces') + "-3.png"
        }
      },
      methods: {
        click: function () {
          this.$router.push('/maps/')
        }
      }
    }
</script>

<style scoped>

</style>
