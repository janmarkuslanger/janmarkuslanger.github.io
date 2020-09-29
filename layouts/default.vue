<template>
  <div class="default-layout">
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
</style>

