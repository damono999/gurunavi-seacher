<template>
  <button
    :class="classes"
    @click="$emit('click', $event.target.value)"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    button: {
      type: Boolean,
      default: true,
    },
    pointer: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Boolean,
      default: false,
    },
    bgWidth: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'button': this.button,
        'button--pointer': this.pointer,
        'button--pagination': this.pagination,
        'button--bg-width': this.bgWidth,
        'button--disabled': this.disabled,
      };
    },
  },
}
</script>
<style lang="scss" scoped>
.button {
  height: 30px;
  text-decoration: none;
  background-color: #fff;
  color: black;
  font-size: 1em;
  letter-spacing: 0.05em;
  padding: 0.2em 1em;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;
  transition: 0.3s ease-out;

  &:hover,
  &:focus {
    box-shadow: 0 0 5px 1px #00bfff;
    outline: none;
  }
}

.button--pagination {
  margin: 0 2px;
  padding: 0;
  background: $baseColor4;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  color: #fff;

  &:hover,
  &:active {
    color: $baseColor4;
    background: #fff;
    border: 1px solid $baseColor4;
    border-radius: 10px;
  }
}
.button--disabled {
  background-color: $disabledColor;
  cursor: default;
  &:hover {
    opacity: 1;
  }
}
.button--pointer {
  cursor: pointer;
}
</style>