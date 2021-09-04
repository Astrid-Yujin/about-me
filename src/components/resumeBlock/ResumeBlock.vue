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
  name: 'ResumeBlock',
  props: {
    title: String,
  },
};
</script>
