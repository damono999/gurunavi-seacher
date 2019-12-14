<template>
  <div class="bg">
    <div class="inner">
      <section>
        <app-home-carousel />
      </section>
      <section class="tabs">
        <app-home-tabs />
      </section>
    </div>
  </div>
</template>

<script>
import { HomeCarousel, HomeTabs } from '@molecules';

export default {
  components: {
    appHomeCarousel: HomeCarousel,
    appHomeTabs: HomeTabs,
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background: #f6f6f6;
  padding: 45px 0 60px;
}

.tabs {
  margin-top: 60px;
}
</style>