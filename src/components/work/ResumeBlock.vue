<template>
  <section class="resume-block">
    <div class="resume-block__title">
      {{ title }}
    </div>
    <div class="resume-block__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'resume-block',
  props: {
    title: String,
  },
};
</script>
