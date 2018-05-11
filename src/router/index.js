import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/sign-in',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'Register',
      component: Register
    }
  ]
})
