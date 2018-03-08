<template>
  <div class="container">
    <div class="row">
      <h1>{{bezichtingen[this.$route.params.id].naam}}</h1>
      <div class="col-md-12">
        <div class="row">
          <div class="col-xs-12">
            <br>
            {{bezichtingen[this.$route.params.id].tekst}}
            <br>
            <br>
            Deze opdracht is geldig voor {{bezichtingen[this.$route.params.id].points}} van je kortingsbon
            <br>
            <br>
          </div>
          <div class="col-xs-12 picture">
            <img v-bind:width="300" :src="bezichtingen[this.$route.params.id].foto"/>
          </div>

          <div v-if="bezichtingen[this.$route.params.id].type == 'image'">
            <div class="col-xs-12 picture">
              <div v-if="!image">
                Upload een afbeelding
                <input type="file" @change="onFileChange">
              </div>
              <div v-else>
                <img v-bind:width="300" class="img-responsive" :src="image" />
                <button @click="removeImage">Remove image</button>
              </div>
            </div>
            <div class="col-xs-12">
              <button class="btn btn-primary" v-on:click="upload(bezichtingen[this.$route.params.id])">Opsturen</button>
            </div>
          </div>

          <div v-if="bezichtingen[this.$route.params.id].type == 'question'">
            <div class="col-xs-12">
              <input class="form-control" type="text" placeholder="Typ uw antwoord hier..." style="margin-top: 20px;">
            </div>
            <div class="col-xs-12">
              <button class="btn btn-primary" v-on:click="answer(bezichtingen[this.$route.params.id])">Beantwoord</button>
            </div>
          </div>
<<<<<<< HEAD
          <div class="col-md-6">
            <button class="btn btn-primary" v-on:click="submit">Opsturen</button>
=======

          <div v-if="bezichtingen[this.$route.params.id].type == 'multiplechoice'">
            <div class="col-xs-12">
              <button class="btn btn-primary multiplechoice" v-on:click="answer(bezichtingen[this.$route.params.id])">43</button>
            </div>
            <div class="col-xs-12">
              <button class="btn btn-primary multiplechoice" v-on:click="answer(bezichtingen[this.$route.params.id])">102</button>
            </div>
            <div class="col-xs-12">
              <button class="btn btn-primary multiplechoice" v-on:click="answer(bezichtingen[this.$route.params.id])">67</button>
            </div>
>>>>>>> d1cc3b73ae24fb365e2c3f16ec97985a8cf525cd
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const items = {
    'het-noordbrabants-museum': {
      naam: 'Het Noordbrabants Museum', foto: './static/img/building/noordbrabants-museum.png', tekst: 'Dit beeld is te vinden bij het Noordbrabants museum, zoek dit beeld en probeer dezelfde foto te maken.', points: '2 delen', type: 'image', pieces: 2
    },
    'restaurant-picasso': {
      naam: 'Restaurant Picasso', foto: './static/img/building/restaurant-picasso.jpg', tekst: 'Wat zijn de openingstijden op woensdag?', points: '2 delen', type: 'question', pieces: 2
    },
    't-paultje': {
      naam: 't Paultje', foto: './static/img/building/het_paultje.png', tekst: 'Hoeveel verschillende bieren hebben ze hier?', points: '1 deel', type: 'multiplechoice', pieces: 1
    }
  }
  export default {
    name: 'bezichtiging',
    beforeCreate: function () {
      this.$session.start()
    },
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
<<<<<<< HEAD
      submit: function(e) {
        this.$session.set('CouponPieces', this.$session.get('CouponPieces') + 1)
        this.$router.push('/unlockpiece')
=======
      upload: function(e) {
        if(this.image !== ''){
          moveOn(e)
        }
      },
      moveOn: function(item) {
        var pcs = this.$session.get('CouponPieces')
        this.$session.set('CouponPieces', pcs + item.pieces)
        this.$router.push('')
>>>>>>> d1cc3b73ae24fb365e2c3f16ec97985a8cf525cd
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

  .btn {
    padding: 20px 50px;
    font-weight: bold!important;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .multiplechoice {
    margin: 10px 0 !important;
  }
</style>
