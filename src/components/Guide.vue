<template>
  <div class="overlay">
    <div class="header">Sint Jan Kerk</div>
    <div class="guide"></div>
    <div class="message">
      <p class="head">Wist je dat:</p>
      <p class="expl">Deze kerk al meer dan 100 jaar oud is!</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'guide'
  }
</script>

<style scoped>
  .overlay {
    width: 100vw;
    height: calc(100vh - 56px);
    background: transparent;
    position: relative;
    padding-top: 15px;
  }

  .header {
    font-size: 25px;
    background: white;
    padding: 15px;
    font-weight: bold;
    border-top: 5px solid #4bb5d9;
    border-bottom: 5px solid #4bb5d9;
  }

  .guide {
    position: absolute;
    bottom: 15px;
    left: 15px;
    height: 300px;
    width: 150px;
    background-image: url("../assets/guides/guid_4.png");
    background-repeat: no-repeat;
    background-position: left bottom;
    z-index: 1;
  }

  .message {
    position: absolute;
    bottom: 15px;
    right: 15px;
    height: 100px;
    width: 300px;
    background: white;
    padding: 15px;
    border: 5px solid #4bb5d9;
  }

  p.head {
    font-weight: bold;
    font-size: 18px;
  }
</style>
