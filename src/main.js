import Vue from 'vue';
import { BIcon, BIconLaptop, BIconPen } from 'bootstrap-vue';
import Cloudinary, { CldImage } from 'cloudinary-vue';
import VueEllipseProgress from 'vue-ellipse-progress';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'normalize.css';
import './App.scss';

Vue.component('BIcon', BIcon);
Vue.component('BIconLaptop', BIconLaptop);
Vue.component('BIconPen', BIconPen);

Vue.use(VueEllipseProgress);
Vue.use(Cloudinary, {
  configuration: {
    cloudName: 'dlonpzhqn',
    secure: true,
  },
  components: {
    CldImage,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
