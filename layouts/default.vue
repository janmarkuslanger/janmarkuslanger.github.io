<template>
  <div id="app">
    <Nav />
    <Logo />
    <div class="wrapper">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Nav from '~/components/Nav.vue';
  import Logo from '~/components/Logo.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Nav,
      Logo,
      Footer
    }
  }
</script>

<style lang="scss">
  .wrapper {
    width: 100%;
    margin: 0 auto;
    padding: 40px;
  }

  @include media('>desktop', 'screen') {
    .wrapper {
      width: $large;
      padding: 0;
    }
  }
</style>
