<template>
  <div class="maps">
    <div class="overlay" v-if="guide">
        <div class="header">{{object_name}}</div>
        <div class="guide"></div>
        <div class="message">
        <a class="btn btn-primary" v-on:click="startChallenge()">Begin opdracht!</a>
        <p class="head">Wist je dat:</p>
        <p class="expl">{{object_name}} al meer dan 100 jaar oud is!</p>
        </div>
    </div>
    <gmap-map
        ref="example"
        class="google-map"
        :center="center"
        :zoom="zoom"
        :mapTypeId="type"
        :options="options">
        <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :icon="m.icon"
        :clickable="true"
        :draggable="false"
        @click="ClickMarker(m.id,m.name,m.position)"
        ></gmap-marker>
    </gmap-map>
  </div>
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
        object_id: "",
        object_name: "",
        guide: false,
        zoom: 15,
        center: {lat: 51.6890857, lng: 5.3037518},
        markers: [{
            id: "standbeeld-jeroen-bosch",
            name: "Standbeeld Jeroen Bosch",
            icon : new google.maps.MarkerImage(
                "./static/img/monument_icon.png",
                null, /* size is determined at runtime */
                null, /* origin is 0,0 */
                null, /* anchor is bottom center of the scaled image */
                new google.maps.Size(25, 40)
            ),
            position: {lat: 51.68914, lng: 5.3040225}
          },
          {
          id: "sint-janskathedraal",
          name: "Sint-Janskathedraal",
          icon : new google.maps.MarkerImage(
            "./static/img/monument_icon.png",
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(25, 40)
          ),
          position: {lat: 51.6881126, lng: 5.30735}
          },
          {
          id: "t-paultje",
          name: "t Paultje",
          icon : new google.maps.MarkerImage(
            "./static/img/pub_icon.png",
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(25, 40)
          ),
          position: {lat: 51.6901098, lng: 5.2994475}
          },
          {
          id: "brasserie-top",
          name: "Brasserie Top",
          icon : new google.maps.MarkerImage(
            "./static/img/terrace_icon.png",
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(25, 40)
          ),
          position: {lat: 51.6882099, lng: 5.3019601}
          },
          {
          id: "otten-speelgoed",
          name: "Otten Speelgoed",
          icon : new google.maps.MarkerImage(
            "./static/img/playground_icon.png",
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(25, 40)
          ),
          position: {lat: 51.6895116, lng: 5.3053829}
          },
          {
          id: "ff-swanjee",
          name: "FF Swanjee",
          icon : new google.maps.MarkerImage(
            "./static/img/restaurant_icon.png",
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(25, 40)
          ),
          position: {lat: 51.6884449, lng: 5.3076449}
          },
          {
          id: "het-noordbrabants-museum",
          name: "Het Noordbrabants Museum",
          icon : new google.maps.MarkerImage(
            "./static/img/monument_icon.png",
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(25, 40)
          ),
          position: {lat: 51.6865193, lng: 5.3033309}
          },
          {
          id: "carrousel",
          name: "Carrousel",
          icon : new google.maps.MarkerImage(
            "./static/img/pub_icon.png",
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(25, 40)
          ),
          position: {lat: 51.6897071, lng: 5.3005028}
          },
          {
          id: "yalla-yalla-pizzeria",
          name: "Yalla Yalla Pizzeria",
          icon : new google.maps.MarkerImage(
            "./static/img/restaurant_icon.png",
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(25, 40)
          ),
          position: {lat: 51.6872478, lng: 5.3005001}
          }
          ,
          {
          id: "restaurant-picasso",
          name: "Restaurant Picasso",
          icon : new google.maps.MarkerImage(
            "./static/img/restaurant_icon.png",
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(25, 40)
          ),
          position: {lat: 51.6880232, lng: 5.3053721}
          }
        ],
        type: "hybrid",
        options: {
            disableDefaultUI: true,
            styles: [
            {stylers: [{ visibility: 'simplified' }]},
            {elementType: 'labels', stylers: [{ visibility: 'off' }]}
        ]}
      }
    },
    beforeCreate: function () {
      var coupon = this.$session.get('ActiveCoupon')
      var couponPieces = this.$session.get('CouponPieces')
      if (coupon.level == couponPieces) {
        this.$router.push('/unlockbon/')
      }
    },
    methods: {
        ClickMarker: function (id,name,position) {
            this.object_id = id;
            this.object_name = name;
            this.guide = true;
            this.$refs.example.panTo(position)
            this.zoom = 20;
        },
        startChallenge: function () {
            this.$router.push('/bezichtiging/' + this.object_id)
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
    .maps {
        position: relative;
    }

    .overlay {
        width: 100vw;
        height: calc(100vh - 56px);
        background: transparent;
        position: absolute;
        z-index: 1000;
    }

    .btn-primary {
        border: 0;
        padding: 20px 50px !important;
        padding-left: 30px;
        font-size: 26px;
        background: #4bb5d9;
        border-color: #000;
        position: absolute;
        bottom: 105px;
        text-align: center;
        right: 0;
    }

    .header {
        font-size: 25px;
        background: white;
        padding: 15px;
        font-weight: bold;
        border-bottom: 5px solid #4bb5d9;
    }

    .guide {
        position: absolute;
        bottom: 5px;
        left: 5px;
        height: 300px;
        width: 150px;
        background-image: url("../assets/guides/guid_4.png");
        background-repeat: no-repeat;
        background-position: left bottom;
        z-index: 1;
    }

    .message {
        position: absolute;
        bottom: 20px;
        right: 5px;
        height: 100px;
        width: 300px;
        background: white;
        padding: 15px;
        border: 5px solid #4bb5d9;
    }

    p.head {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 0;
    }
</style>
