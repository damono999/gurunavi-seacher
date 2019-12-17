<template>
  <transition
     name="fade"
  >
    <div
      v-if="isOpen"
      class="bg"
    >
      <div
        class="cover"
        @click="$emit('click')"
      >
      </div>
      <div
        :class="['content', classes()]"
      >
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    classes() {
      return {
        'center': this.center,
      };
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s linear;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.cover {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, .7);
}

.content {
  position: absolute;
  padding: 10px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 300px;
  z-index: 11;
  display: inline-block;
}

.center {
  text-align: center;
}
</style>