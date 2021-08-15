import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';
import Home from '@/components/Home';
import Work from '@/components/work/Work';
import Life from '@/components/life/Life';
import NotFound from '@/components/NotFound';

Vue.use(Router);
Vue.use(VueMeta);

export default new Router({
  routes: [
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
      component: Life,
      meta: { bodyClass: 'page-life' },
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: { bodyClass: 'page-404' },
    },
  ],
});
