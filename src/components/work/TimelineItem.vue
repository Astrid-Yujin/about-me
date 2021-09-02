<template>
  <li class="timeline-item">
    <div class="timeline-item__period">{{ item.period }}</div>
    <div class="timeline-item__title">{{ item.title }}</div>
    <div class="timeline-item__institution">
      <a :href="item.institution.url">{{ item.institution.name }}</a>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TimelineItem',
  props: {
    item: Object,
  },
};
</script>
