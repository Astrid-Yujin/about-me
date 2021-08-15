<template>
  <nav id="nav" class="navigation">
      <div class="row is-fullwidth">
        <div class="row-content">
          <ul class="nav-items">
            <router-link
              v-for="(item, index) in navItems" 
              :key=index 
              :to='{name: item}'
              custom
              v-slot="{ href, navigate, isExactActive }"
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
    };
  },
};
</script>