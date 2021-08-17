<template>
  <section class="timeline">
    <div class="timeline__title">
      <b-icon :icon="iconType" font-scale="1.5"></b-icon>
      {{ title }}
    </div>
    <ul class="timeline__content">
      <timeline-item
        v-for="(item, index) in items"
        :key=index
        :item="item"
      >
      </timeline-item>
    </ul>
  </section>
</template>

<script>
import timelineItem from './TimelineItem.vue';

export default {
  name: 'timeline',
  components: {
    timelineItem,
  },
  props: {
    title: String,
    items: Array,
    iconType: {
      type: String,
      default: 'laptop',
    },
  },
};
</script>
