import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bezichtingen from '@/components/Bezichtingen'
import Bezichtiging from '@/components/Bezichtiging'
import BezichtigingConfirm from '@/components/BezichtigingConfirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
    }

  ]
})
