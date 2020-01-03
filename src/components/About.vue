<template>
  <div class="about">

    <h4 class="title" v-if="title">{{ title }}</h4>
    <ul v-if="items" class="list">
      <li class="item" v-for="(item, i) in items">
        <span  @mouseenter="onMouseover(i)" @mouseleave="index = null">{{ item.val }}</span>
        <iframe  v-if="index === i && item.meme" :src="`https://giphy.com/embed/${item.meme}`"  width="480" height="317" frameBorder="0" class="giphy-embed"></iframe>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      index: null
    }
  },
  props: ['title', 'items'],
  methods: {
    onMouseover: function(i) {
      this.index = i;
    }
  }
}
</script>

<style lang="scss" scoped>

  .about {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .title {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 20px;
  }
  .list {
    list-style: none;
  }
  .item {
    font-size: 20px;
    opacity: .6;
    margin-bottom: 10px;
    position: relative;
  }
  .giphy-embed {
    position: absolute;
    top: 100%;
    left: 20px;
  }

</style>
