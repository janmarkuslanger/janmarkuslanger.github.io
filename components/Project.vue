<template>

  <a class="project" target="_blank" :href="url">
    <div class="inside">
      <div class="image-wrapper">
        <div class="image" :style="{ backgroundColor: color, backgroundImage: `url(${image})` }"></div>
      </div>
      <h3 v-if="title" class="title">{{ title }}</h3>
      <h4 v-if="subtitle" class="subtitle">{{ subtitle }}</h4>
    </div>
  </a>

</template>

<script>
export default {
  props: ['image', 'color', 'title', 'subtitle', 'link', 'url']
}
</script>

<style lang="scss" scoped>
  .project {
    width: 100%;
    margin-bottom: 100px;
    text-decoration: none;
  }
  .image-wrapper {
    height: 400px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
  }
  .project:nth-child(1) .image-wrapper,
  .project:nth-child(3n+1) .image-wrapper {
    height: 300px;
  }
  .image-wrapper {
    transition: transform 500ms ease-in-out;
  }
  .project:hover .image-wrapper {
    transform: scale(.9);
  }
  .image {
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 300px auto;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transition: transform 500ms ease-in-out;
  }
  .project:hover .image {
    transform: scale(1.2);
  }
  .title {
    color: $black;
    margin-bottom: 10px;
  }
  .subtitle {
    color: $black;
    opacity: .6;
  }

  @include media('>desktop', 'screen') {
    .project {
      width: 50%;
    }
    .project:nth-child(1),
    .project:nth-child(2n+1) {
      border-right-width: 40px;
      border-right-style: solid;
      border-right-color: transparent;
    }
    .project:nth-child(2n) {
      border-left-width: 40px;
      border-left-style: solid;
      border-left-color: transparent;
    }
  }
</style>
