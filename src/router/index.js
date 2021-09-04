import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewHome from '../components/viewHome/ViewHome.vue';
import ViewWork from '../components/viewWork/ViewWork.vue';
import MessageBoard from '../components/messageBoard/MessageBoard.vue';
import ImageGallery from '../components/imageGallery/ImageGallery.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ViewHome,
    meta: { bodyClass: 'page-home' },
  },
  {
    path: '/work',
    name: 'Work',
    component: ViewWork,
    meta: { bodyClass: 'page-work' },
  },
  {
    path: '/life',
    name: 'Life',
    component: () => import(/* webpackChunkName: "life" */ '../components/viewLife/ViewLife.vue'),
    meta: { bodyClass: 'page-life' },
    children: [
      {
        path: 'image-gallery',
        name: 'ImageGallery',
        component: ImageGallery,
        meta: { bodyClass: 'page-life page-image-gallery' },
      },
      {
        path: 'messages',
        name: 'Messages',
        component: MessageBoard,
        meta: { bodyClass: 'page-life page-messages' },
      },
    ],
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../components/viewNotFound/ViewNotFound.vue'),
    meta: { bodyClass: 'page-404' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
