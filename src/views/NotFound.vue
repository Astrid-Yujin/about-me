<template>
  <home
    headline="Opps..."
    subHeadline="Page Not Found!"
  />
</template>

<script>
import Home from './Home.vue';

export default {
  name: 'NotFound',
  components: {
    Home,
  },
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    next(() => {
      document.body.className = to.meta.bodyClass;
    });
  },
};
</script>
