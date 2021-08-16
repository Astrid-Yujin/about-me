<template>
  <div class="home">
      <div class="row">
        <div class="row-content col-6">
          <h1>{{ headline }}</h1>
          <div class="h6">{{ subHeadline }}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    headline: {
      type: String,
      default: 'Yujin Wang',
    },
    subHeadline: {
      type: String,
      default: 'A happy frontend developer :)',
    },
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      document.body.className = to.meta.bodyClass;
    });
  },
};
</script>
