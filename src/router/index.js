import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Login from '../components/Login'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/login',
        component: Login
      },
]
const router = new VueRouter({
    routes,
    mode: 'history'
  });

export default router