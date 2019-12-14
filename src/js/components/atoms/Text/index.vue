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
      default: '',
    },
    bg: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'text': true,
        'bg': this.bg,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 600;
}

.bg {
  font-size: 30px;
}
</style>