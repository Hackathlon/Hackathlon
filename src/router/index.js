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
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (Contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue'),
  },
  {
    path: '/compte',
    name: 'Compte',
    // route level code-splitting
    // this generates a separate chunk (Contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Compte.vue'),
  },
  {
    path: '/demarche',
    name: 'Demarche',
    // route level code-splitting
    // this generates a separate chunk (Contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Demarche.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    // route level code-splitting
    // this generates a separate chunk (Contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contact" */ '../views/FAQ.vue'),
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: () => import(/* webpackChunkName: "downloads" */ '../views/connexion.vue'),
  },
  {
    path: '/enregistrer',
    name: 'enregistrer',
    component: () => import(/* webpackChunkName: "downloads" */ '../views/enregistrer.vue'),
  },
  {
    path: '/demarche/passeport',
    name: 'FormPassport',
    component: () => import(/* webpackChunkName: "downloads" */ '../views/FormPassport.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
