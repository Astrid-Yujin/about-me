<template>
  <div id="app">
    <navigation></navigation>
    <b-overlay :show="isPageLoading" rounded="sm">
      <main class="main-content">
        <transition name="default">
          <router-view></router-view>
        </transition>
      </main>
    </b-overlay>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { BOverlay } from 'bootstrap-vue';
import store from './store/index';
import Navigation from './components/navigation/Navigation.vue';
import AppFooter from './components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    AppFooter,
    BOverlay,
  },
  computed: {
    isPageLoading() {
      return store.state.isPageLoading;
    },
  },
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
};
</script>
