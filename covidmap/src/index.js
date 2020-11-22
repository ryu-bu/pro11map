import Vue from 'vue'
import Router from 'vue-router'
//import GoogleMap from '@/components/GoogleMap'
//import Quick_stats from '@/components/Quick_stats'

Vue.use(Router)

export default new Router({
    routes: [
      /*({
        path: '/',
        name: 'GoogleMap',
        component: () => import('@/components/GoogleMap')
      },*/
      {
        path: '/',
        name: 'QuickStats',
        props: true,
        component: () => import('@/components/Quick_stats')
      }
    ]
})