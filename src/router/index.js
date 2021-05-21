import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (Contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue'),
  },
  {
    path: '/Compte',
    name: 'Compte',
    // route level code-splitting
    // this generates a separate chunk (Contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Compte.vue'),
  },
  {
    path: '/downloads',
    name: 'Téléchargements',
    component: () => import(/* webpackChunkName: "downloads" */ '../views/Downloads.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
