<template>
  <footer class="footer">
    <div class="inside">

      <p class="name">© {{ year }} Jan-Markus Langer</p>
      <ul class="list">
        <li class="item">
          <a class="link" href="https://github.com/janmarkuslanger" target="_blank">Github</a>
        </li>
        <li class="item">
          <a class="link" href="https://www.instagram.com/janmarkuslanger/" target="_blank">Instagram</a>
        </li>
        <li class="item">
          <a class="link" href="https://www.linkedin.com/in/jan-markus-langer-9a1a6219a/" target="_blank">Linkedin</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
    data: function() {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    padding: 40px;
  }
  .list {
    list-style: none;
  }
  .name {
    margin-bottom: 20px;
  }
  .item {
    margin-bottom: 10px;
  }
  .link {
    color: $red;
    text-decoration: none;
  }

  @include media('>desktop', 'screen') {
    .footer {
      padding: 0;
    }
    .inside {
      display: flex;
      justify-content: space-between;
      width: $large;
      margin: 0 auto;
      padding-bottom: 40px;
    }
    .list {
      display: flex;
    }
    .name,
    .item {
      margin-bottom: 0;
    }
    .name {
      font-size: 20px;
    }
    .item {
      margin-left: 40px;
    }
    .link {
      font-size: 20px;
    }
    .item:first-child {
      margin-left: 0;
    }
  }
</style>
