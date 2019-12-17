<template>
  <router-link
    :class="classes"
    :to="to"
    :tag="tag"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
    tag: {
      type: String,
      default: 'p',
    },
    pointer: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'text': true,
        'pointer': this.pointer,
      };
    },
  },
}
</script>

<style lang="scss" scoped>
.text {
  font-size: 30px;
  line-height: 50px;
  height: 50px;
  margin: 5px 0;
  font-weight: 700;
  text-decoration: none;
  color: black;

  &:hover {
    opacity: .7;
  }
}

.pointer {
  cursor: pointer;
}
</style>