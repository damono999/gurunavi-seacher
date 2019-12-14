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
  },
  computed: {
    classes() {
      return {
        text: true,
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
  padding-left: 10px;
  border-left: #fff 10px solid;
  text-decoration: none;
  color: black;

  &:hover {
    opacity: 0.5;
  }
}
</style>