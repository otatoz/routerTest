import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Control from '../views/Control.vue'
import Play from '../views/Play.vue'
import Sence from '../views/Sence.vue'
import Equipment from '../views/Equipment.vue'
import FunctionList from '../views/FunctionList.vue'
import Movie from '../views/test/Movie.vue'
import Music from '../views/test/Music.vue'
import MV from '../views/test/MV.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/play',
    name: 'play',
    component: () => import(/* webpackChunkName: "play" */ '../views/Play.vue'),
    children:[{
      path: '/movie',
      component: () => import(/* webpackChunkName: "movie" */ '../views/test/Movie.vue'),
      meta: { title: '电影'}
    },{
      path: '/music',
      component: () => import(/* webpackChunkName: "music" */ '../views/test/Music.vue'),
      meta: { title: '音乐'}
    },{
      path: '/mv',
      component: () => import(/* webpackChunkName: "music" */ '../views/test/MV.vue'),
      meta: { title: 'MV'}
    }]
  },
  {
    path: '/control',
    name: 'control',
    component: () => import(/* webpackChunkName: "control" */ '../views/Control.vue')
  },
  {
    path: '/sence',
    name: 'sence',
    component: () => import(/* webpackChunkName: "sence" */ '../views/Sence.vue')
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: () => import(/* webpackChunkName: "equipment" */ '../views/Equipment.vue')
  },
  {
    path: '/functionList',
    name: 'functionList',
    component: () => import(/* webpackChunkName: "functionList" */ '../views/FunctionList.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
