<template>
  <li class="poster">
    <a
      class="poster__content"
      :href="item.link"
    >
    <div
      class="poster__title"
    >
      {{ item.title }}</div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Poster',
  props: {
    item: Object,
  },
};
</script>
