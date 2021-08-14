<template>
  <section class="timeline">
    <div class="timeline__title">
      {{ title }}
    </div>
    <div class="timeline__content">
      <div 
        v-for="(item, index) in items" 
        :key=index 
        class="timeline__item"
      >
        <div class="timeline__item-period">{{ item.period }}</div>
        <div class="timeline__item-position">{{ item.position }}</div>
        <div class="timeline__item-company">
          <a :href="item.company.url">{{ item.company.name }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'timeline',
  props: {
    title: String,
    items: Array,
  },
};
</script>
