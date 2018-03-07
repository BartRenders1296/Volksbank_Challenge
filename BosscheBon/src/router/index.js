import Vue from 'vue'
import Router from 'vue-router'
import Maps from '@/components/Maps'
import Bezichtingen from '@/components/Bezichtingen'
import Bezichtiging from '@/components/Bezichtiging'
import BezichtigingConfirm from '@/components/BezichtigingConfirm'
import LoginSuccess from '@/components/LoginSuccess'
import Home from '@/components/home'
import Bonnen from '@/components/bonnen'
import Guide from '@/components/guide'

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
      path: '/bezichtingen',
      name: 'Bezichtingen',
      component: Bezichtingen
    },
    {
      path: '/bezichtiging/:id',
      name: 'Bezichtiging',
      component: Bezichtiging
    },
    {
      path: '/bezichtigingconfirm/',
      name: 'Bezichtiging',
      component: BezichtigingConfirm
    },
    {
      path: '/auth/facebook',
      name: 'Loginsuccess',
      component: LoginSuccess
    },
    {
      path: '/bonnen',
      name: 'Bonnen',
      component: Bonnen
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    }

  ]
})
