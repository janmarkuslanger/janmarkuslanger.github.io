<template>
  <div class="intro">
    <div class="content">

      <div class="headlines">
        <div class="inner-headlines">
          <h1 class="title">Jan-Markus Langer</h1>
          <h2 class="subtitle">I am a <i>software engineer</i></h2>
        </div>
        <div class="image-container">
          <transition name="fade">
            <img class="image" src="~/assets/coding.gif" alt="Me doing sh**!"  />
          </transition>
        </div>
      </div>

      <div class="text">
        <p>Hey there 👋, my name ist Jan.</p>
        <p>I am a so-called nerd who loves to code and think about solutions for problems. Back in the days, I started to learn the basics of frontend development. So at this time, I created websites with HTML and CSS.
And of course, both were not enough to do a great job, so this got me into javascript. It was love at first sight. With growing requirements, I needed to dive deeper and learned MySQL, NodeJS, and PHP. With those languages, I was able to create and modify websites, shops, and apps.
Nevertheless, I wanted to learn more languages, and so I learned Python.
In my free time, I mostly code in Python or Javascript. I try to learn new things with little side-projects on Github like a twitter bot or a tab switcher. Coding and software engineering is my big passion. Learning is a never ending process.</p>
      </div>

    </div>
  </div>
</template>

<script>
import Crazy from '~/assets/crazy.js';

export default {
  mounted: function() {
    Crazy(
        this.$el.querySelector('.title')
    );
    Crazy(
      this.$el.querySelector('.subtitle')
    );
    Crazy(
      this.$el.querySelector('.image-container'),
      false
    )
  }
}
</script>

<style lang="scss" scoped>

  .intro {
    padding-top: 200px;
    padding-bottom: 50px;
  }
  .content {
    margin: 0 auto;
    position: relative;
  }
  .headlines {
    position: relative;
    z-index: 1;
    display: inline-block;
    margin-bottom: 100px;
  }
  .image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    z-index: 0;
  }
  .title {
    font-size: 30px;
    font-weight: 700;
    position: relative;
    z-index: 1;
    will-change: transform;
  }
  .subtitle {
    font-size: 26px;
    padding-left: 20px;
    position: relative;
    margin-bottom: 40px;
    z-index: 1;
    will-change: transform;
  }
  i {
    text-decoration: underline;
    color: $red;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .text p {
    font-size: 18px;
    line-height: 34px;
    margin-bottom: 20px;
  }

  @include media('>desktop', 'screen') {
    .intro {
      padding-top: 400px;
      padding-bottom: 400px;
    }
    .headlines {
      margin-bottom: 400px;
    }
    .title {
      font-size: 64px;
    }
    .subtitle {
      font-size: 50px;
      padding-left: 100px;
    }
    .image-container {
      position: absolute;
      left: 100%;
      top: 100%;
      margin-top: -100px;
      margin-left: -100px;
    }
    .image {
      width: 500px;
    }
    .text {
      width: 700px;
    }
    .text p {
      font-size: 28px;
      line-height: 54px;
    }
    .text a {
      color: $red;
    }
  }
</style>
