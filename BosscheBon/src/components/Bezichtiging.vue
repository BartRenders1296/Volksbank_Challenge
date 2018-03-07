<template>
  <div class="container">
    <div class="row">
      <h1>{{bezichtingen[this.$route.params.id].naam}}</h1>
      <div class="col-12">
        <div class="row">
          <div class="col-6 picture">
            <img :src="bezichtingen[this.$route.params.id].foto"/>
          </div>
          <div class="col-6 text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac viverra ante. In ultricies suscipit tortor. Fusce eu leo urna. Donec in rhoncus eros. Pellentesque vestibulum ligula vitae purus aliquet laoreet. Curabitur risus augue, sagittis ac orci et, convallis rutrum justo. Proin enim nibh, lobortis vel finibus vel, vestibulum eget risus. Aenean tortor ligula, accumsan in tempus nec, euismod sit amet dui. Nam urna justo, egestas et gravida in, tristique id nunc. Sed velit lectus, ultrices vel tellus vitae, pretium consectetur eros. Vestibulum eget nisi mollis, volutpat dolor quis, sollicitudin quam. Suspendisse in leo purus. Mauris non finibus nulla, quis eleifend tortor. Donec porttitor massa eu eros semper vulputate. Quisque in luctus sapien, in condimentum eros. Sed ac facilisis lorem.
<br/><br/>
              Nullam vel fermentum enim. Ut mattis consequat orci, nec consectetur ligula vulputate nec. Sed a lorem ante. Sed mattis interdum felis, in volutpat elit aliquam non. Mauris mi elit, imperdiet pellentesque convallis non, ullamcorper sed dolor. Aliquam accumsan velit non viverra feugiat. Vivamus pellentesque elit lacus, ac pellentesque mi suscipit ac. Nam arcu elit, tempus sed lorem ut, laoreet sollicitudin tortor. Sed mollis leo ac leo dictum, quis molestie sem elementum.
<br/><br/>
              Nullam et eros tincidunt, convallis enim vel, viverra odio. Cras facilisis euismod hendrerit. Donec consectetur risus ut risus iaculis sollicitudin a vitae nunc. Suspendisse vitae neque lectus. Pellentesque at velit eros. Nullam ac felis in urna mattis porta eget quis lorem. Sed suscipit cursus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/><br>
              Morbi malesuada condimentum ex, in venenatis ex sollicitudin vitae. Praesent nec mollis elit. Suspendisse vel consectetur ex, vulputate maximus mi. Ut dignissim vel est in commodo. Curabitur fringilla id sapien non pellentesque. Nam vestibulum, diam eu aliquet porttitor, odio ex dignissim lorem, non elementum leo est sit amet purus. Etiam imperdiet ipsum at purus varius feugiat. Proin pharetra aliquam risus ut elementum. Sed ac pulvinar leo. Etiam sit amet dolor a nunc commodo consequat eget vitae leo. Suspendisse ut semper quam. Maecenas lacinia risus ut semper dictum. Nunc pulvinar fermentum venenatis. Donec vitae semper arcu.
<br/><br>
              Nullam sollicitudin gravida urna, nec mollis massa. Ut aliquet nulla vel iaculis congue. Nam eleifend eu nibh eu mollis. Sed purus metus, elementum quis semper eget, dictum id magna. Cras dignissim pellentesque diam, id suscipit est rutrum eu. Vivamus pellentesque nisl vitae tortor egestas, ut consequat magna tincidunt. Quisque in porta dolor, et ultrices enim. Mauris viverra odio tincidunt nulla luctus, eu sagittis urna placerat. Sed dignissim libero in leo imperdiet luctus. Nunc accumsan elit a condimentum ultrices. Sed ultricies vehicula lectus vel gravida.
<br/><br/>
              Phasellus et ante quis lectus condimentum fringilla vitae non nibh. Sed mollis ex quis urna facilisis, ut sodales nulla tincidunt. Morbi in aliquam nisl. Quisque faucibus blandit massa, vel finibus enim imperdiet sit amet. Aenean vehicula quam eu felis facilisis, id lobortis dolor efficitur. Nullam pulvinar venenatis rutrum. Pellentesque eget leo sapien. Donec scelerisque neque arcu, eget egestas nibh ultrices a. Proin molestie tortor nulla, non feugiat mi hendrerit at. Sed non blandit lectus. Donec rutrum metus.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bezichtiging',

    data () {
      return {
        msg: 'Bezichtingen',
        bezichtingen: [
          {
            naam: 'De Sint Jan',
            foto: './static/img/kerk.jpeg'
          },
          {
            naam: 'De gouden draak',
            foto: './static/img/beeld.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  div.picture {
    margin-bottom: 10px;
  }
</style>
