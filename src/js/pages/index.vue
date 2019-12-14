<template>
  <div class="wrapper">
    <app-header />
    <main class="main">
      <router-view />
    </main>
    <footer class="is-static">
      <app-footer />
    </footer>
  </div>
</template>
<script>
import {
  Footer,
  Header,
} from '@globals'
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  .main {
    margin-top: 60px;
  }

  .is-static {
    margin-top: auto;
    width: 100%;
  }
}

</style>