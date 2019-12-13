<template>
  <div class="bg-color">
    <div class="inner">
      <section>
        <h5 class="m-3">おススメ</h5>
        <carousel></carousel>
      </section>
      <section>
        <h5 class="m-3">エリアから探す</h5>
        <tabs
          :active-tab-area="activeTabArea"
          @change-active-tab="changeActiveTab($event)"
        ></tabs>
      </section>
      <section>
        <h5 class="m-3">詳細検索</h5>
        <detail-search></detail-search>
      </section>
    </div>
  </div>
</template>

<script>
import Tabs from '../Tabs/Tabs'
import Carousel from '../Carousel/Carousel'
import DetailSearch from '../DetailSearch/DetailSearch'

  export default {
    data() {
      return {
        title: '',
        form: {
          keyword: '',
          address:''
        },
        activeTabArea: '',
      }
    },
    components: {
      Tabs,
      Carousel,
      DetailSearch,
    },
    methods: {
      changeActiveTab(targetArea) {
        this.activeTabArea = targetArea;
      }
    }
  }
</script>

<style scoped>
.bg-color {
  background: #f6f6f6;
  margin-top: 60px;
  padding-bottom: 100px;
}

.inner {
  width: 800px;
  margin: 0 auto;
  padding-top: 10px;
}

.m-3 {
  margin: 40px 0 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 600;
}
</style>