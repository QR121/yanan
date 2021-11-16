import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login'
import Hsearch from '../components/pages/Hsearch'
import Pagination from 'vue-pagination-2'
Vue.component('pagination', Pagination)
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home,
        children: [
        ]
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/hsearch',
        component: Hsearch
      },
]
const router = new VueRouter({
    routes,
    mode: 'history'
  });

export default router