<template>
  <div>

    <div class="burger" @click="burgerToggler" :class="{'is--active': isActive}">
      <div class="burger-inside">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>

    <div class="navigation" :class="{'is--active': isActive}">
      <div class="inside">

        <div class="pages">
          <div class="link-wrapper">
            <nuxt-link class="link" to="/"><span @click="burgerToggler">Home</span></nuxt-link>
          </div>

          <div class="link-wrapper">
            <nuxt-link class="link" to="/work"><span @click="burgerToggler">Work</span></nuxt-link>
          </div>

          <div class="link-wrapper">
            <nuxt-link class="link" to="/about"><span @click="burgerToggler">About</span></nuxt-link>
          </div>
        </div>

        <div class="the-others">
          <a class="link" href="https://github.com/janmarkuslanger" target="_blank">Github</a>
          <a class="link" href="https://www.instagram.com/janmarkuslanger/" target="_blank">Instagram</a>
          <a class="link" href="https://www.linkedin.com/in/jan-markus-langer-9a1a6219a/" target="_blank">Linkedin</a>
          <nuxt-link @click="burgerToggler" class="link" to="/imprint"><span @click="burgerToggler">Imprint</span></nuxt-link>
          <nuxt-link @click="burgerToggler" class="link" to="/privacy-policy"><span @click="burgerToggler">Privacy Policy</span></nuxt-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data: function() {
      return {
        isActive: false
      }
    },
    methods: {
      burgerToggler: function() {
        const nav = this.$el.querySelector('.navigation');

        const showPages = () => {
          nav.removeEventListener('transitionend', showPages);
          nav.classList.add('show--pages');
        };

        const onHidePages = () => {
          nav.removeEventListener('transitionend', onHidePages);
          this.isActive = false;
        };

        if (this.isActive) {
          nav.addEventListener('transitionend', onHidePages);
          nav.classList.remove('show--pages');
        } else {
          nav.addEventListener('transitionend', showPages);
          this.isActive = true;
        }
      }
    }
  }
</script>


<style lang="scss" scoped>

  .burger {
    position: fixed;
    top: 40px;
    right: 40px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    overflow: hidden;
    z-index: 3;
  }
  .burger-inside {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    height: 3px;
  }
  .line {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: $black;
    transition: 500ms all cubic-bezier(0.77, 0, 0.175, 1);
    opacity: .7;
  }
  .burger:hover .line,
  .burger.is--active .line {
    opacity: 1;
  }
  .burger .line:nth-child(1) {
    transform: translateY(-7px);
  }
  .burger .line:nth-child(3) {
    width: 70%;
    transform: translateY(7px);
  }
  .burger.is--active .line:nth-child(1) {
    transform: translateY(0) rotate(45deg);
  }
  .burger.is--active .line:nth-child(2) {
    transform: rotate(-45deg);
  }
  .burger.is--active .line:nth-child(3) {
    width: 70%;
    transform: translate(-200%, 7px);
  }

  .navigation {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $white;
    z-index: 2;
    transform: translateX(-100%);
    transition: transform 500ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .navigation.is--active {
    transform: translateX(0);
  }
  .inside {
    width: 100%;
    margin: 0 auto;
    padding: 40px;
  }
  .link-wrapper {
    margin-bottom: 20px;
    opacity: 0;
    transform: translateX(-100px);
  }

  @for $i from 1 through 4 {
    .link-wrapper:nth-child(#{$i}) {
      transition: all #{1000*$i}ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
  .navigation.show--pages .link-wrapper {
    opacity: 1;
    transform: translateX(0);
  }
  .pages {
    width: 100%;
    margin-bottom: 60px;
  }
  .navigation .link-wrapper:last-child {
    margin-bottom: 0;
  }
  .link-wrapper .link {
    display: inline-block;
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    color: $black;
    text-decoration: none;
    position: relative;
  }
  .the-others .link {
    margin-right: 80px;
    color: $red;
    text-decoration: none;
    opacity: 0;
    display: block;
    margin-bottom: 20px;
  }

  @for $i from 1 through 3 {
    .the-others .link:nth-child(#{$i}) {
      transition: all #{1000*$i}ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  .the-others .link:last-child {
    margin-right: 0;
  }
  .navigation.show--pages .the-others .link {
    opacity: 1;
  }

  @include media('>desktop', 'screen') {
    .inside {
      width: $large;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      height: 100%;
    }
    .pages {
      margin-bottom: 0;
    }
    .link-wrapper {
      margin-bottom: 80px;
    }
    .link-wrapper .link {
      font-size: 64px;
      line-height: 64px;
    }
    .link-wrapper .link::before,
    .link-wrapper .link::after {
      content: ' ';
      position: absolute;
      height: 8px;
      background-color: $black;
      top: 50%;
      transform: translateY(-30%);
      width: 0;
      pointer-events: none;
    }
    .link-wrapper .link::before {
      left: 0;
    }
    .link-wrapper .link::after {
      right: 0;
      width: 0;
      transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    .link-wrapper .link:hover::after {
      width: 100%;
      background-color: transparent;
    }
    .link-wrapper .link:hover::before {
      width: 100%;
      transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    .the-others .link {
      display: inline-block;
      margin-bottom: 0;
    }
  }

</style>
