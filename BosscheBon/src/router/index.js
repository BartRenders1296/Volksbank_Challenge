import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Map from '@/components/Map'
import Maps from '@/components/Maps'

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
    }
  ]
})
