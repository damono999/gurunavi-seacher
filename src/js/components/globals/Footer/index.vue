<template>
  <div class="c-footer">
    <p class="c-footer-text">人気</p>
    <p class="c-footer-text">おススメ</p>
    <p class="c-footer-text">ランチ</p>
    <p class="c-footer-text">流行りの</p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.c-footer {
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color: #f39800;
  margin-top: auto;

  &-text {
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>