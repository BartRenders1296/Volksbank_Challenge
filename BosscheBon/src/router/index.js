import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Map from '@/components/Map'
import Maps from '@/components/Maps'
import Bezichtingen from '@/components/Bezichtingen'
import Bezichtiging from '@/components/Bezichtiging'
import BezichtigingConfirm from '@/components/BezichtigingConfirm'
import LoginSuccess from '@/components/LoginSuccess'
import fblogin from '@/components/fblogin'
import Coupons from '@/components/coupons'
import Guide from '@/components/guide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
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
      path: '/loginsuccess/',
      name: 'Loginsuccess',
      component: LoginSuccess
    },
    {
      path: '/login/',
      name: 'login',
      component: fblogin
    },
    {
      path: '/coupons',
      name: 'Coupons',
      component: Coupons
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    }

  ]
})
