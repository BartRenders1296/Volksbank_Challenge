<template>
  <div class="container">
    <div class="row">
      <h1>{{bezichtingen[this.$route.params.id].naam}}</h1>
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <br>
            Dit beeld is te vinden bij het Noordbrabants museum, zoek dit beeld en probeer dezelfde foto te maken.
            <br>
            <br>
            Deze opdracht is geldig voor 1 deel van je kortingsbon
            <br>
            <br>
          </div>
          <div class="col-md-6 picture">
            <img v-bind:width="300" :src="bezichtingen[this.$route.params.id].foto"/>
          </div>
          <div class="col-md-6 picture">
            <div v-if="!image">
              Upload een afbeelding
              <input type="file" @change="onFileChange">
            </div>
            <div v-else>
              <img v-bind:width="300" class="img-responsive" :src="image" />
              <button @click="removeImage">Remove image</button>
            </div>
          </div>
          <div class="col-md-6">
            <button class="btn btn-primary" v-on:click="upload">Opsturen</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const items = {
    'het-noordbrabants-museum': {
      naam: 'Het Noordbrabants Museum', foto: './static/img/building/noordbrabants-museum.png',
   }
  }
  export default {
    name: 'bezichtiging',
    methods: {
      onFileChange: function (e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      removeImage: function (e) {
        this.image = '';
      },
      upload: function(e) {
        if(this.image !== ''){

        }
      }
    },
    data () {
      return {
        msg: 'Bezichtingen',
        bezichtingen: items,
        image: ''
      }
    }
  }
</script>

<style scoped>
  div.picture {
    margin-bottom: 10px;
  }

  .btn{
    width: 200px;
    height: 50px;
    font-weight: bold!important;
    font-size: 18px;
    margin-top: 20px;
  }
</style>
