import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('./views/Student.vue')
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('./views/Teacher.vue')
    }
  ]
})
