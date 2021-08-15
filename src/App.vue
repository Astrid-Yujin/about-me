<template>
  <div id="app">
    <navigation></navigation>
    <main class="main-content">
      <transition name="change-page">
        <router-view></router-view>
      </transition>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import navigation from './components/Navigation';
  import appFooter from './components/Footer';

  export default {
    name: 'app',
    components: {
      navigation,
      appFooter,
    },
    metaInfo: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  };
</script>