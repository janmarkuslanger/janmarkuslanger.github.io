<template>
  <div class="container">
    <!-- <iframe src="https://giphy.com/embed/ -->
    <About
      title="About"
      :items="[{
        val: 'Jan-Markus Langer',
        meme: 'YQitE4YNQNahy'
      },{
        val: '25 years old',
        meme: 'xULW8GkYBHOiZbJNBu'
      }, {
        val: 'germany',
        meme: '3xz2BCe5jn2j4OM9ZS'
      }]" />
    <About
      title="Software / Backend"
      :items="[ {
        val: 'Python',
        meme: '2lbhL8dSGMh8I'
      }, {
        val: 'NodeJS'
        }]"
    />

    <About
      title="Frontend"
      :items="[ {
        val: 'Javascript',
        meme: 'o0vwzuFwCGAFO'
      }, {
        val: 'HTML(5)',
        meme: '11wOSDHU0ILk7S'
      }, {
        val: 'CSS(3)',
        meme: '13FrpeVH09Zrb2'
      }, {
        val: 'SCSS'
      }, {
        val: 'Less'
      }]"
    />

    <About
      title="SQL"
      :items="[{
        val: 'MySQL',
        meme: '12TKyrgd3YrdJu'
      }, {
        val: 'PostgreSQL'
      }, {
        val: 'SQLite'
      }]"
    />

    <About
      title="Tools"
      :items="[{
        val: 'Webpack'
      }, {
        val: 'Rollup'
      }, {
        val: 'eslint'
      }, {
        val: 'babel'
      }]"
    />

    <About
      title="Others"
      :items="[{
        val: 'Vue.js',
        meme: 'ECNfFa3o6pidW'
      }, {
        val: 'Nuxt.js'
      }, {
        val: 'Contao CMS'
      }, {
        val: 'Shopware'
      }]"
    />

  </div>
</template>

<script>
import About from '~/components/About.vue';

export default {
  components: {
    About
  }
}
</script>
