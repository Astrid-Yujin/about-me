<template>
  <div class="home">
      <div class="row">
        <div class="row-content col-6">
          <h1>{{ headline }}</h1>
          <h2>{{ subHeadline }}</h2>
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
};
</script>
