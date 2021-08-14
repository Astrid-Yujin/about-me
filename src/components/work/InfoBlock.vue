<template>
  <section class="info-block">
    <div class="info-block__title">
      {{ title }}
    </div>
    <div class="info-block__content">
      <div 
        v-for="(value, name, key) in infos" 
        :key=key 
        class="info-block__item"
      >
        <div class="info-block__item-name">{{ name }}</div>
        <div class="info-block__item-value" v-html="value"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'info-block',
  props: {
    title: String,
    infos: Object,
  },
};
</script>
