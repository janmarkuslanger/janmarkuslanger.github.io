<template>
  <a class="logo" href="/">Jan-Markus Langer</a>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .logo {
    position: fixed;
    top: 40px;
    left: 40px;
    text-decoration: none;
    color: $black;
    opacity: .7;
    transition: opacity .4s ease;
  }
  .logo:hover {
    opacity: 1;
  }
</style>
