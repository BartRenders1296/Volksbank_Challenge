import Vue from 'vue'
import Router from 'vue-router'
import Maps from '@/components/Maps'
import Home from '@/components/home'
import Bonnen from '@/components/bonnen'
<<<<<<< HEAD
import Guide from '@/components/guide'
import fblogin from '@/components/fblogin'
import UnlockPiece from '@/components/UnlockPiece'
import UnlockBon from '@/components/UnlockBon.vue'
=======
>>>>>>> d1cc3b73ae24fb365e2c3f16ec97985a8cf525cd

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/bezichtiging/:id',
      name: 'Bezichtiging',
      component: Bezichtiging
    },
    {
      path: '/bonnen',
      name: 'Bonnen',
      component: Bonnen
<<<<<<< HEAD
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/login',
      name: 'Login',
      component: fblogin
    },
    {
      path: '/unlockbon',
      name: 'UnlockBon',
      component: UnlockBon
    },
    {
      path: '/unlockpiece',
      name: 'UnlockPiece',
      component: UnlockPiece
=======
>>>>>>> d1cc3b73ae24fb365e2c3f16ec97985a8cf525cd
    }

  ]
})
