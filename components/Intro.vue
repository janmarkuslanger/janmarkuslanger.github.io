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
        <p>Hey there 👋, my name is Jan and I am a so called computer freak from germany.<br>I love to code all day with tons of coffee.<br>Back in the days as a young student I needed money. So I started coding websites with HTML and CSS.<br>Later on I was learning Javascript which is one of my two favorite languages. Next to Javscript I was learning NodeJS, PHP and MySQL. With those languages and tools I was able to create websites, shops and apps. But that wasn´t enought for me, because PHP didn´t make me happy at all. So I decided to learn Python. It was love of the first sight. With Python I can code all the things you need as a software engineer. I built an instagram bot, a twitter bot and an api cms system.</p>
        <p>Python and Javascript are my two favorite languages.<br>Besides coding I try to stay fit with wrestling and fitness or walking with my dog.</p>
        <p>Do you have a job offer for me or just want to talk? Whenever you have a question or something else feel free to contact me. <a href="mailto:janmarkuslanger10121994@gmail.com">Write me</a></p>
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
