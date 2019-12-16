<template>
  <transition
     name="fade"
  >
    <div
      v-if="isOpen"
      class="cover"
      @click="$emit('click')"
    >
      <div class="content">
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
    }
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

.cover {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0, .7);
}

.content {
  position: relative;
  padding: 10px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 300px;
  z-index: 11;
}
</style>