<template>
  <div class="google-map" id="Map"></div>
</template>

<script>
    export default {
      name: 'Map',
      props: ['name'],
      data: function () {
        return {
          mapName: this.name,
          markerCoordinates: [{
            latitude: 51.6890857,
            longitude: 5.3037518
          }],
          map: null,
          bounds: null,
          markers: []
        }
      },
      methods: {
          ClickMarker: function (event) {
              
          }
      },
      mounted: function () {
        const options = {
          zoom: 16,
          center: new google.maps.LatLng(51.6890857, 5.3037518),
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
            {stylers: [{ visibility: 'simplified' }]},
            {elementType: 'labels', stylers: [{ visibility: 'off' }]}
          ]
        }
        this.bounds = new google.maps.LatLngBounds();
        const element = document.getElementById("Map")
        this.map = new google.maps.Map(element, options);
        this.markerCoordinates.forEach((coord) => {
            const position = new google.maps.LatLng(coord.latitude, coord.longitude);
            const marker = new google.maps.Marker({ 
                position,
                map: this.map
            });
            marker.addListener('click', function() {
                
            });
            //this.map.fitBounds(this.bounds.extend(position))
        });
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