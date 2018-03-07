<template>
  <div class="bonnen">
    <div class="coupon" v-for="item in list">
      <a class="coupon-a" v-on:click="ActivateCoupon(item)">
        <img :src="item.store" class="img-responsive" />
        <h2 v-if="item.type === 'percentage'">{{ item.discount }}%</h2>
        <h2 v-if="item.type === 'amount'">&euro;{{ item.discount }}</h2>
        <h3>Korting</h3>
        <h5>Monumenten benodigd: {{ item.level }}</h5>
      </a>
    </div>
  </div>
</template>

<script>
  const items = [
    { id: 0, store: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png', discount: 10, type: 'percentage', level: 3 },
    { id: 1, store: 'https://www.reachmee.com/wp-content/uploads/2014/08/mcdonalds-portfolio.png', discount: 1.0, type: 'amount', level: 6 },
    { id: 2, store: 'https://www.lacubanita.nl/assets/lacuba_logo.png', discount: 1.0, type: 'amount', level: 6 },
    { id: 3, store: 'https://pbs.twimg.com/profile_images/411642497715023872/VzNhx_og_400x400.jpeg', discount: 1.0, type: 'amount', level: 6 },
    { id: 4, store: 'http://a921350a6510cea66694-329126a9800884f602fa76a2ac0b67f5.r49.cf1.rackcdn.com/lps/assets/u/LM-.jpg', discount: 1.0, type: 'amount', level: 6 },
    { id: 5, store: 'http://www.restaurant-rodeo.nl/wp-content/uploads/2017/11/RODEO-LOGO-transp-400x400-1.png', discount: 1.0, type: 'amount', level: 6 }
  ]

  export default {
    name: 'bonnen',
    beforeCreate: function () {
      this.$session.start()
    },
    methods: {
      ActivateCoupon: function (event) {
        this.$session.set('ActiveCoupon', event)
        this.$router.push('/maps')
      }
    },
    data () {
      return {
        list: items
      }
    }
  }
</script>

<style scoped>
  .bonnen {
    position: relative;
  }
  .coupon{
    background: #fcfcfc;
    display: inline-block;
    width: 150px;
    margin: 7px;
    padding: 35px;
    text-align: center;
  }

  .coupon:hover{
    background: #c6dcff;
  }

  .coupon-a{
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
