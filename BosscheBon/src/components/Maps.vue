<template>
  <gmap-map
    class="google-map"
    :center="center"
    :zoom="16"
    :disableDefaultUI="true"
    :mapTypeId="type"
    :options="options">
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="ClickMarker(m.id)"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
  /////////////////////////////////////////
  // New in 0.4.0
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  import Router from 'vue-router'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyC98a7wwSS3C6DTm4NPigKTT8bk2w4kNNQ',
      // libraries: 'places', //// If you need to use place input
    }
  });

  export default {
    data () {
      return {
        center: {lat: 51.6890857, lng: 5.3037518},
        markers: [{
          id: "standbeeld-jeroen-bosch",
          position: {lat: 51.6890857, lng: 5.3037518}
        }],
        type: "hybrid",
        options: {styles: [
            {stylers: [{ visibility: 'simplified' }]},
            {elementType: 'labels', stylers: [{ visibility: 'off' }]}
        ]}
      }
    },
    methods: {
        ClickMarker: function (id) {
            this.$router.push('bezichtiging/' + id)
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .google-map {
        width: 100vw;
        height: calc(100vh - 56px);
        margin: 0 auto;
        background: gray;
    }
</style>