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
              :to='{name: item.destination}'
              custom
              v-slot="{ href, navigate, isActive, isExactActive }"
            >
              <li
                v-if="!item.children"
                class="nav-item"
                :class="{
                  'is-active': isExactActive,
                }"
                :active="isActive"
                :href="href"
                @click="navigate"
              >
                {{ item.label }}
              </li>
              <b-nav-item-dropdown
                v-else
                :text="item.label"
              >
              <router-link
                v-for="(subItem, subIndex) in item.children"
                :key=subIndex
                :to='{name: subItem.destination}'
                custom
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <li
                  class="nav-item secondary"
                  :class="{
                    'is-active': isExactActive,
                  }"
                  :active="isActive"
                  :href="href"
                  @click="navigate"
                >
                  {{ subItem.label }}
                </li>
              </router-link>
              </b-nav-item-dropdown>
            </router-link>
          </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      navItems: [{
        label: 'Home',
        destination: 'Home',
      },
      {
        label: 'Work',
        destination: 'Work',
      },
      {
        label: 'Life',
        destination: 'Life',
        children: [{
          label: 'Image Gallery',
          destination: 'ImageGallery',
        },
        {
          label: 'Message Board',
          destination: 'Comments',
        }],
      }],
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
