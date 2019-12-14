<template>
  <div class="bg-color">
    <div class="inner">
      <div class="footer">
        <p class="footer-text">人気</p>
        <p class="footer-text">おススメ</p>
        <p class="footer-text">ランチ</p>
        <p class="footer-text">流行りの</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.bg-color {
  background-color: $baseColor1;
}

.footer {
  display: flex;
  justify-content: center;
  padding: 50px;
  width: 100%;

  &-text {
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
