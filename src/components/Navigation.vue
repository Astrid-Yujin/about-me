<template>
  <nav
    id="nav"
    class="navigation"
    :class="!isVisible ? 'is-sticky': null"
  >
      <div class="row is-fullwidth">
        <div class="row-content">
          <ul class="nav-items">
            <router-link
              v-for="(item, index) in navItems"
              :key=index
              :to='{name: item}'
              custom
              v-slot="{ href, navigate, isActive, isExactActive }"
            >
              <li
                class="nav-item"
                :class="[isExactActive && 'is-active']"
                :active="isActive"
                :href="href"
                @click="navigate"
              >
                {{ item }}
              </li>
            </router-link>
          </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      navItems: ['Home', 'Work', 'Life'],
      isVisible: true,
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === false) {
        this.isVisible = false;
      } else if (entries[0].isIntersecting === true) {
        this.isVisible = true;
      }
    }, { threshold: [0] });

    observer.observe(this.$el);
  },
};
</script>
