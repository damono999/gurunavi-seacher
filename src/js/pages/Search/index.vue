<template>
  <div class="bg">
    <div class="inner">
      <div class="search">
        <div
          v-for="(store, i) in this.stores"
          :key="createUniqueKey(store.name)"
          class="search-content"
        >
          <figure class="search-content-gurally">
            <img
              :src="store.image_url.shop_image1 || getSubPhoto()"
              :alt="'store:' + i"
              class="search-content-img"
            />
          </figure>
          <section class="search-content-detail">
            <h2 class="search-content-title">{{ store.name }}</h2>
            <div class="search-content-address">{{ store.address }}</div>
            <p class="search-content-links">
              <a
                :href="store.url"
                variant="primary"
                target="_blank"
                rel="noopener"
                class="search-content-link"
              >
                ぐるなびで見る
              </a>
              <a
                @click="toggleModal(store)"
                href="#"
                class="search-content-link"
              >
                詳細を見る
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
    <app-modal
      :isOpen="isOpen"
      @click="toggleModal"
      center
    >
      <div class="mt">
        <a
          :href="targetStore.url"
          variant="primary"
          target="_blank"
          rel="noopener"
          class="search-content-link"
        >
          ぐるなびで見る
        </a>
      </div>
      <div class="mt">
        <app-text
          tag="p"
        >
          {{ `住所: ${this.targetStore.address}` }}
        </app-text>
      </div>
      <div
        class="mt"
        v-if="this.targetStore.pr"
      >
        <app-text
          tag="p"
        >
          {{ `説明: ${ this.targetStore.pr.pr_short }` }}
        </app-text>
      </div>
      <div
        class="mt"
        v-if="this.targetStore.pr"
      >
        <app-text
          tag="p"
        >
          {{ `詳細: ${ this.targetStore.pr.pr_long	}` }}
        </app-text>
      </div>
      <div class="mt">
        <app-button
          @click="toggleModal"
        >
          閉じる
        </app-button>
      </div>
    </app-modal>
  </div>
</template>

<script>
import axios from 'axios';
import subPhoto from '@img/PAK96_bistrokaunta-_TP_V.jpg';
import { Pagination } from '@molecules';
import { Modal, Button, Text } from '@atoms';

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
      isOpen: false,
      targetStore: {},
    };
  },
  components: {
    appPagination: Pagination,
    appModal: Modal,
    appButton: Button,
    appText: Text,
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
    toggleModal(store = null) {
      this.targetStore = Object.assign({}, store);
      this.isOpen = !this.isOpen;
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

.is-flex {
  display: flex;
  flex-flow: column wrap;
}

.mt {
  margin-top: 20px;
}

.search {

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

    &-links {
      margin-top: 10px;
    }

    &-link:nth-child(n+2) {
      margin-left: 15px;
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
