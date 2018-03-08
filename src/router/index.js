import Vue from 'vue'
import Router from 'vue-router'
import Maps from '@/components/Maps'
import Home from '@/components/home'
import Bonnen from '@/components/bonnen'

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
    }

  ]
})
