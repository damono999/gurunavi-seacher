<template>
  <div>
    <app-text
      tag="h5"
      bg
    >
      おススメ
    </app-text>
    <div class="carousel">
      <app-carousel />
    </div>
  </div>
</template>

<script>
import { Carousel, Text } from "@atoms";

export default {
  components: {
    appCarousel: Carousel,
    appText: Text,
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  margin-top: 30px;
}
</style>