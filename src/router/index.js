import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views - Pages
const Page404 = () => import('@/views/Page404')
const Page500 = () => import('@/views/Page500')
const Login = () => import('@/views/Login')
const Home = () => import('@/views/Home')

Vue.use(Router)

export const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/',
      redirect: '/home',
      name: 'Home',
      component: DefaultContainer,
      meta: { requiresAuth: true },
    },
    {
      path: '/500',
      name: 'Page500',
      component: Page500,
      meta: { requiresAuth: false },
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404,
      meta: { requiresAuth: false },
    },
    {
      path: '*',
      redirect: '/404',
      name: '404',
      component: {
        render (c) { return c('router-view') }
      },
      meta: { requiresAuth: false },
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  
  if (requiresAuth && !isAuthenticated) {
      next('login')
  } else if (!requiresAuth && isAuthenticated) {
      next()
  } else {
      next()
  }
})