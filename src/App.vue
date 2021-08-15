<template>
  <div id="app">
    <navigation></navigation>
    <main class="main-content">
      <router-view></router-view>
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
  };
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
