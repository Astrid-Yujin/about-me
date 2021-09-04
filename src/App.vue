<template>
  <div id="app">
    <navigation></navigation>
    <main class="main-content">
      <transition name="default">
        <router-view></router-view>
      </transition>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navigation from './components/navigation/Navigation.vue';
import AppFooter from './components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    AppFooter,
  },
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
};
</script>
