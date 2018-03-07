<template>
  <div class="bezichtingen">
    <h1>{{ msg }}</h1>

    <table class="table table-striped">
      <thead>
        <th scope="col">Bezichtegings type</th>
        <th scope="col">Foto</th>
        <th scope="col"></th>
      </thead>
      <tbody>
        <tr v-for="item in bezichtingen">
          <td>{{item.naam}}</td>
          <td><img :src="item.foto" class="img-responsive"/></td>
          <td><router-link :to="/bezichtiging/ + item.id"><div class="btn btn-success">Bekijken</div></router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'bezichtingen',

    data () {
      return {
        msg: 'Bezichtingen',
        bezichtingen: [
          {
            id: 0,
            naam: 'De Sint Jan',
            foto: './static/img/kerk.jpeg'
          },
          {
            id: 1,
            naam: 'De gouden draak',
            foto: './static/img/beeld.jpg'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }
</style>
