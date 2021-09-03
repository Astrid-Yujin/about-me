import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Work from '../views/Work.vue';
import CommentBlock from '../components/life/CommentBlock.vue';
import ImageGallery from '../components/life/ImageGallery.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { bodyClass: 'page-home' },
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
    meta: { bodyClass: 'page-work' },
  },
  {
    path: '/life',
    name: 'Life',
    component: () => import(/* webpackChunkName: "life" */ '../views/Life.vue'),
    meta: { bodyClass: 'page-life' },
    children: [
      {
        path: '',
        name: 'ImageGallery',
        component: ImageGallery,
      },
      {
        path: 'comments',
        name: 'Comments',
        component: CommentBlock,
      },
    ],
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue'),
    meta: { bodyClass: 'page-404' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
