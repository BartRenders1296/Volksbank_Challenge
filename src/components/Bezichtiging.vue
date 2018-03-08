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
              <button class="btn btn-primary" v-on:click="submit()">Opsturen</button>
            </div>
          </div>

          <div v-if="bezichtingen[this.$route.params.id].type == 'question'">
            <div class="col-xs-12">
              <input class="form-control" type="text" placeholder="Typ uw antwoord hier..." style="margin-top: 20px;">
            </div>
            <div class="col-xs-12">
              <button class="btn btn-primary" v-on:click="submit()">Beantwoord</button>
            </div>
          </div>

          <div v-if="bezichtingen[this.$route.params.id].type == 'multiplechoice'">
            <div class="col-xs-12">
              <button class="btn btn-primary multiplechoice" v-on:click="submit()">43</button>
            </div>
            <div class="col-xs-12">
              <button class="btn btn-primary multiplechoice" v-on:click="submit()">102</button>
            </div>
            <div class="col-xs-12">
              <button class="btn btn-primary multiplechoice" v-on:click="submit()">67</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const items = {
    'het-noordbrabants-museum': {
      naam: 'Het Noordbrabants Museum', foto: './static/img/building/noordbrabants-museum.png', tekst: 'Dit beeld is te vinden bij het Noordbrabants museum, zoek dit beeld en probeer dezelfde foto te maken.', points: '1 deel', type: 'image', pieces: 1
    },
    'restaurant-picasso': {
      naam: 'Restaurant Picasso', foto: './static/img/building/restaurant-picasso.jpg', tekst: 'Wat zijn de openingstijden op woensdag?', points: '1 deel', type: 'question', pieces: 1
    },
    't-paultje': {
      naam: 't Paultje', foto: './static/img/building/het-paultje.jpg', tekst: 'Hoeveel verschillende bieren hebben ze hier?', points: '1 deel', type: 'multiplechoice', pieces: 1
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
      submit: function(e) {
        this.$session.set('CouponPieces', this.$session.get('CouponPieces') + 1)
        var coupon = this.$session.get('ActiveCoupon')
        var couponPieces = this.$session.get('CouponPieces')
        if (coupon.level <= couponPieces) {
          this.$router.push('/unlockbon')
        } else {
          this.$router.push('/unlockpiece')
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
