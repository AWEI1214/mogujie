/*
 * @Author: your name
 * @Date: 2021-07-12 21:14:02
 * @LastEditTime: 2021-07-13 10:43:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/home.vue'
const home = () => import('../views/home/home.vue')
const category = () => import('../views/category/category.vue')
const cart = () => import('../views/cart/shopcart.vue')
const profile = () => import('../views/profile/profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',

  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',

    component: cart
  },
  {
    path: '/profile',

    component: profile
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
