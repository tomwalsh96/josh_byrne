import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('./views/Music.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('./views/Event.vue')
    },
    {
      path: '/event/vantastival-18',
      name: 'vantastival-18',
      component: () => import('./views/events/Vantastival-18.vue')
    },
    {
      path: '/event/life-18',
      name: 'life-18',
      component: () => import('./views/events/Life-18.vue')
    },
    {
      path: '/event/bodyandsoul-18',
      name: 'bodyandsoul-18',
      component: () => import('./views/events/BodyandSoul-18.vue')
    },
    {
      path: '/moving-image',
      name: 'moving-image',
      component: () => import('./views/Moving-Image.vue')
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('./views/People.vue')
    },
    {
      path: '/place',
      name: 'place',
      component: () => import('./views/Place.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
