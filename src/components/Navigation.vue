<template>
  <nav id="nav" class="navigation">
      <div class="row is-fullwidth">
        <div class="row-content">
          <ul class="nav-items">
            <router-link
              class="nav-item"
              to="/"
              tag="li"
              active-class="is-active"
              exact-active-class="is-current"
              exact
            >
              Home
            </router-link>
            <router-link 
              class="nav-item"
              to="/work"
              tag="li" 
              active-class="is-active"
              exact-active-class="is-current"
            >
              Work
            </router-link>
          </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
};
</script>