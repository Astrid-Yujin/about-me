<template>
  <view-home
    headline="Opps..."
    subHeadline="Page Not Found!"
  />
</template>

<script>
import ViewHome from '../viewHome/ViewHome.vue';

export default {
  name: 'NotFound',
  components: {
    ViewHome,
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
