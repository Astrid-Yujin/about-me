<template>
  <div id="app">
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',
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

.main-content {
  text-align: center;
}
</style>
