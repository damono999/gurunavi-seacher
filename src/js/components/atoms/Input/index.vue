<template>
  <input
    type="text"
    :value="value"
    :class="classes"
    :placeholder="placeholder"
    @input="$emit('update:value', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        input: true,
      };
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  height: 30px;
  box-sizing: border-box;
  font: 15px/24px;
  box-sizing: border-box;
  padding: 5px 8px;
  transition: 0.3s;
  letter-spacing: 1px;
  border: 1px solid #fff;
  box-shadow: 1px 1px 2px 0 #707070 inset;
  border-radius: 4px;

  &:focus {
    box-shadow: 0 0 3px 1px #00bfff;
  }
}
</style>