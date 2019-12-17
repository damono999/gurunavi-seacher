<template>
  <component
    :class="classes"
    :is="tag"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    bg: {
      type: Boolean,
      default: false,
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
        'bg': this.bg,
        'pointer': this.pointer,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
}

.bg {
  font-size: 30px;
}

.pointer {
  cursor: pointer;
}
</style>