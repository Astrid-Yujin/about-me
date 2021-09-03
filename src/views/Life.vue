<template>
  <div class="life page-content">
    <nature class="page-background"/>
    <div class="row">
      <div class="row-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nature from '../components/background/Nature.vue';

export default {
  name: 'Life',
  components: {
    Nature,
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      document.body.className = to.meta.bodyClass;
    });
  },
};
</script>
