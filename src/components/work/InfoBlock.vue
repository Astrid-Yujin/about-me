<template>
  <section class="info-block">
    <div class="info-block__title">
      {{ title }}
    </div>
    <div class="info-block__content">
      <div
        v-for="(value, name, key) in infos"
        :key="key"
        class="info-block__item"
      >
        <template v-if="progressBarType">
          <progress-bar :type="progressBarType"></progress-bar>
        </template>
        <template v-else>
          <div class="info-block__item-name">{{ name }}</div>
          <div class="info-block__item-value" v-html="value"></div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import ProgressBar from './ProgressBar.vue';

export default {
  name: 'InfoBlock',
  components: {
    ProgressBar,
  },
  props: {
    title: String,
    infos: Object,
    progressBarType: String,
  },
};
</script>
