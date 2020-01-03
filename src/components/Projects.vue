<template>
  <div class="projects">

    <Project color="#F0EB89" url="https://github.com/janmarkuslanger/gitfoliopy" image="/icons/gitfoliopy.svg" title="gitfoliopy - Create your own portfolio in a few seconds." subtitle="Python | Open Source" />
    <Project color="#038C40" url="https://github.com/janmarkuslanger/instagram-simple-like-bot" image="/icons/insta.svg" title="instagram-simple-bot" subtitle="Python | Selenium | Open Source" />
    <Project color="#DD2649" url="https://github.com/janmarkuslanger/tweetpy" image="/icons/twitter.svg" title="tweetpy - Automate your twitter." subtitle="Python | Selenium | Open Source" />
    <Project color="#17BDBF" url="https://github.com/janmarkuslanger/w3c-app" image="/icons/w3c.svg" title="W3C - Desktop app to validate your website via w3c" subtitle="Javascript | NodeJS | Electron | Open Source" />

  </div>
</template>

<script>
import Project from '~/components/Project.vue';

export default {
  components: {
    Project
  }
}
</script>

<style lang="scss" scoped>
  .projects {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
</style>
