<template>
  <div class="default-layout">
    <div class="route-transition-element"></div>
    <HeaderElement />
    <Nuxt />
  </div>
</template>

<script>

import HeaderElement from '@/components/header-element.vue';

export default {
  components: {
    HeaderElement,
  },
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap');

  // reset
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  // global body styles
  body {
    font-family: 'Roboto Mono', monospace;
    background-color: $black;
    color: $white;
  }

  // headlines
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  // selection
  ::-moz-selection {
    color: $white;
    background: $yellow;
  }

  ::selection {
    color: $white;
    background: $yellow;
  }

  .default-layout {
    padding-top: $headerHeightSmall;
  }

  // route 
  .route-transition-element {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $red;
    z-index: 10;
    transform: translateY(-100%);

    &--active {
      animation: routeTransition 1.2s;
    }
  }

  @keyframes routeTransition {
    0% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @media only screen and (min-width: $desktop-breakpoint) {
    .default-layout {
      padding-top: $headerHeightLarge;
    }
  }
</style>

