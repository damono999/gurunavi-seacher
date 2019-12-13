<template>
  <div class="inner">
    <div class="p-result-search">
      <div
        v-for="(store, i) in this.stores"
        :key="store.name"
        class="p-result-search-content"
      >
        <figure class="p-result-search-content-gurally">
          <img :src="store.image_url.shop_image1" :alt="'store:' + i" class="p-result-search-content-img">
        </figure>
        <sessiton class="p-result-search-content-detail">
          <h2 class="p-result-search-content-title">{{ store.name }}</h2>
          <div class="p-result-search-content-address">{{ store.address }}</div>
          <p class="p-result-search-content-link">
            <a
              :href="store.url"
              variant="primary"
              target="_blank"
              rel="noopener"
            >
              ぐるなびで見る
            </a>
          </p>
        </sessiton>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  created() {

    let form = Object.assign(
      {},
      this.$route.query,
      { keyid: 'ae555c660c3b51ba8a093d9b477d909b' }
    );

    axios.get(`https://api.gnavi.co.jp/RestSearchAPI/v3/`,
      {
        params: form
      })
      .then(({ data }) => {
        console.log(data.rest[0]);
        this.stores = data.rest;
      }).catch((err) => {
        console.log(`err: ${err}`);
      });
  },
  data() {
    return {
      stores: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.p-result-search {
  margin-top: 60px;
  padding: 20px 5px;

  &-content {
    display: flex;
    background-color: #fff;
    margin: 15px;
    box-shadow: 0 0 4px 1px;


    &-title {
      font-size: 30px;
      font-weight: 700;
    }

    &-address {
      margin-top: 10px;
    }

    &-link {
      margin-top: 10px;
    }


    &-img {
      width: 150px;
      height: 150px;
      background-size: cover;
      padding: 3px;
      border: 2px solid black;
    }

    &-detail {
      padding: 5px;
    }
  }
}
</style>