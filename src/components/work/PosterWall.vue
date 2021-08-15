<template>
  <section class="poster-wall">
    <div class="poster-wall__title">
      {{ title }}
    </div>
    <ul class="poster-wall__content">
      <poster
        v-for="(item, index) in items" 
        :key=index 
        :item="item"
      >
      </poster>
    </ul>
  </section>
</template>

<script>
import Poster from './Poster';

export default {
  name: 'poster-wall',
  components: {
    Poster,
  },
  props: {
    title: String,
    items: Array,
  },
};
</script>
