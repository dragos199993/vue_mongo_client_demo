/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import Signin from './views/Signin.vue';
import store from './store/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      guest: true
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      guest: true
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
      guest: true
    },
  ],
});


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(localStorage.getItem('jwt') === null){
      next({
        path: '/signin',
        params: {nextUrl: to.fullPath}
      })
    }else{
      let user = JSON.parse(localStorage.getItem('user'))
      next()
    }
  }else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('jwt') == null){
      next()
    }
    else{
        next({ name: 'signin'})
    }
  }else {
    next() 
  }
});

export default router;
