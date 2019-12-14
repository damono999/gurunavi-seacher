<template>
  <div class="carousel">
    <div class="prev" @click="prevImg()">＜</div>
    <div class="next" @click="nextImg()">＞</div>
    <div class="carousel-items">
      <!-- <button @click="show = !show">fjdlfjslfjsdk</button> -->
      <transition :name="transitionName" mode="out-in">
        <template v-for="(img, index) in carouselImgs">
          <div
            v-if="index === visibleContentNumber"
            class="carousel-item"
            :key="img.name"
          >
            <img :src="img.image_url.shop_image1" class="carousel-item-img" />
          </div>
        </template>
      </transition>
    </div>
    <div class="carousel-bars">
      <div
        v-for="i of carouselImgs.length"
        :class="[
          'carousel-sercle',
          visibleContentNumber === i - 1 ? 'is-active' : '',
          ''
        ]"
        :key="i"
        @click="changeImg(i - 1)"
      ></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      carouselImgs: [],
      visibleContentNumber: 0,
      transitionName: "show-prev",
      show: true
    };
  },
  methods: {
    autoSlide() {
      setTimeout(() => {
        this.nextImg();
        this.autoSlide();
      }, 5000);
    },
    prevImg() {
      this.transitionName = "show-prev";
      this.visibleContentNumber =
        this.visibleContentNumber === 0
          ? this.carouselImgs.length - 1
          : this.visibleContentNumber - 1;
    },
    nextImg() {
      this.transitionName = "show-next";
      this.visibleContentNumber =
        this.visibleContentNumber === this.carouselImgs.length - 1
          ? 0
          : this.visibleContentNumber + 1;
    },
    changeImg(targetNumber) {
      this.visibleContentNumber = targetNumber;
    }
  },
  created() {
    axios
      .get("https://api.gnavi.co.jp/RestSearchAPI/v3/", {
        params: {
          keyid: "ae555c660c3b51ba8a093d9b477d909b",
          name: "渋谷"
        }
      })
      .then(({ data }) => {
        this.carouselImgs.push(
          ...data.rest.filter(img => (img.image_url.shop_image1 ? true : false))
        );
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    this.autoSlide();
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 800px;
  height: 300px;
  margin: 0 auto;
  background-color: black;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.18);

  .prev,
  .next {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $baseColor3;
    text-align: center;
    line-height: 44px;
    font-weight: 700;
    top: calc(50% - 20px);
    cursor: pointer;
    opacity: 0.7;
    box-sizing: border-box;

    &:hover {
      opacity: 1;
    }
  }
  .prev {
    left: 8px;
    padding-right: 5px;
  }
  .next {
    right: 8px;
    padding-left: 5px;
  }

  &-item {
    &-img {
      width: 800px;
      height: 300px;
      object-fit: cover;
      z-index: 2;
      opacity: 1;
    }
  }

  &-bars {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 95%;
    transform: translateX(-50%);
  }

  &-sercle {
    width: 20px;
    height: 4px;
    background-color: $baseColor3;
    margin-left: 4px;
    cursor: pointer;
    border-radius: 2px;

    &:first-child {
      margin-left: 0;
    }

    &.is-active {
      background-color: black;
    }

    &:hover {
      background-color: $baseColor2;
    }
  }
}

.show-next-enter-active,
.show-next-leave-active,
.show-prev-enter-active,
.show-prev-leave-active {
  transition: transform 0.2s;
}

.show-next-enter,
.show-prev-leave-to {
  transform: translateX(100%);
}

.show-next-leave-to,
.show-prev-enter {
  transform: translateX(-100%);
}
</style>
