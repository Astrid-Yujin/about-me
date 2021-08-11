<template>
  <div class="home">
      <div class="row">
        <div class="content-wrapper">
          <h1>{{ headline }}</h1>
          <h2>{{ subHeadline }}</h2>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    headline: {
      type: String,
      default: 'Yujin Wang',
    },
    subHeadline: {
      type: String,
      default: 'A happy frontend developer :)',
    },
  },
};
</script>

<style>
.row {
  position: relative;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
}

@media only screen and (min-width: 1600px){
  .row {
    max-width: 1200px;
  }
}

.home {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 40rem;
  background-color: black;
  overflow: hidden;
  display: flex;
  align-items: center;
}

@keyframes rotation {
  from {
    transform: rotate(-30deg);
  }
  to {
    transform: rotate(30deg);
  }
}

.home::before {
  content: "";
  display: block;
  position: absolute;
  height: 300vh;
  width: 300vw;
  top: -100vh;
  right: -5vw;
  background-image: url('../assets/svg/starwheel.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  animation: rotation 60s linear infinite;
}

.home .content-wrapper {
  width: 50%;
}
</style>
