<template>
  <div class="bg">
    <div class="inner">
      <div class="result-search">
        <div
          v-for="(store, i) in this.stores"
          :key="store.name"
          class="result-search-content"
        >
          <figure class="result-search-content-gurally">
            <img
              :src="store.image_url.shop_image1 || getSubPhoto()"
              :alt="'store:' + i"
              class="result-search-content-img"
            />
          </figure>
          <section class="result-search-content-detail">
            <h2 class="result-search-content-title">{{ store.name }}</h2>
            <div class="result-search-content-address">{{ store.address }}</div>
            <p class="result-search-content-link">
              <a
                :href="store.url"
                variant="primary"
                target="_blank"
                rel="noopener"
              >
                ぐるなびで見る
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
    <app-pagination
      :last-page="lastPage"
      :current-page="currentPage"
      @toPage="toPage"
    />
  </div>
</template>

<script>
import axios from 'axios';
import subPhoto from '@img/PAK96_bistrokaunta-_TP_V.jpg';
import { Pagination } from '@molecules';

export default {
  beforeRouteUpdate(to, from, next) {
    this.getStores(to);
    next();
  },
  created() {
    this.getStores(this.$route);
  },
  data() {
    return {
      stores: [],
      totalHitCount: 0,
      hitPerPage: 0,
      pageOffset: 1,
    };
  },
  components: {
    appPagination: Pagination,
  },
  computed: {
    lastPage() {
      if(!this.totalHitCount && !this.hitPerPage) return;
      return Math.ceil(this.totalHitCount / this.hitPerPage);
    },
    currentPage() {
      return this.pageOffset;
    },
  },
  methods: {
    toPage(page) {
      if (page === 0) return;
      const query = Object.assign({}, this.$route.query, { 'offset_page': page });
      this.$router.push({
        name: 'search',
        query,
      });
    },
    getSubPhoto() {
      return subPhoto;
    },
    getStores(route){
      let form = Object.assign(
      {},
      route.query,
      { keyid: 'ae555c660c3b51ba8a093d9b477d909b' }
    );

    axios.get(`https://api.gnavi.co.jp/RestSearchAPI/v3/`,
      {
        params: form
      })
      .then(({ data }) => {
        this.totalHitCount = data.total_hit_count;
        this.hitPerPage = data.hit_per_page;
        this.pageOffset = data.page_offset;
        this.stores = data.rest;
      }).catch((err) => {
        console.log(`err: ${err}`);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  padding: 10px 0 60px;
}

.result-search {

  &-content {
    display: flex;
    background-color: #fff;
    margin: 15px 0;
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
