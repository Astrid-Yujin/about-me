import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import Cloudinary, { CldImage } from 'cloudinary-vue';
import VueEllipseProgress from 'vue-ellipse-progress';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'normalize.css';
import './assets/scss/App.scss';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
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
