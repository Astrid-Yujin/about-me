<template>
  <div id="app">
    <navigation></navigation>
    <main class="main-content">
      <transition name="change-page">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
  import navigation from './components/Navigation';

  export default {
    name: 'app',
    components: {
      navigation,
    },
    metaInfo: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  };
</script>