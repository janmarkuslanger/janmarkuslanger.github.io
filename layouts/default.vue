<template>
  <div class="default-layout">
    <Nuxt />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Roboto Mono', monospace;
    background-color: $black;
    color: $white;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
</style>

