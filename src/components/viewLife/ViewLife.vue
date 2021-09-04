<template>
  <div class="life page-content">
    <background-nature class="page-background"/>
    <router-view></router-view>
  </div>
</template>

<script>
import BackgroundNature from '../backgroundNature/BackgroundNature.vue';

export default {
  name: 'Life',
  components: {
    BackgroundNature,
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      document.body.className = to.meta.bodyClass;
    });
  },
};
</script>
