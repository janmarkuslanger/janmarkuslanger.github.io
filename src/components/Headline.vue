<template>
  <h1 v-if="title" class="title">{{title}}</h1>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style lang="scss" scoped>
  .title {
    padding-top: 200px;
    padding-bottom: 200px;
  }
</style>
