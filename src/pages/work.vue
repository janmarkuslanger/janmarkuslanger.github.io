<template>
  <div class="container">
    <Headline title="Work" />

    <Projects />

  </div>
</template>

<script>
import Headline from '~/components/Headline.vue';
import Projects from '~/components/Projects.vue';

export default {
  components: {
    Headline,
    Projects
  }
}
</script>
