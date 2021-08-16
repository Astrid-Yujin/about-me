<template>
  <home
    headline="Opps..."
    subHeadline="Page Not Found!"
  />
</template>

<script>
import home from './Home.vue';

export default {
  name: 'not-found',
  components: {
    home,
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
