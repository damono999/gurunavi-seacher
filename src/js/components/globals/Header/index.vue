<template>
  <transition name="fade">
    <div v-show="showHeader" class="header">
      <div class="inner">
        <div class="header-content">
          <app-router-link
            tag="h1"
            to="/"
            pointer
          >
            ぐるなびサーチ
          </app-router-link>
          <div class="header-form">
            <app-input
              placeholder="キーワード"
              :value.sync="keyword"
            />
            <div class="is-inline-block">
              <app-button
                @click="handleClick"
              >検索</app-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  Button,
  Input,
  RouterLink,
} from '@atoms';

export default {
  beforeRouteUpdate() {
    this.keyword = sessionStorage.getItem('keyword') || '';
  },
  created() {
    this.keyword = sessionStorage.getItem('keyword') || '';
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    appButton: Button,
    appInput: Input,
    appRouterLink: RouterLink,
  },
  data() {
    return {
      showHeader: true,
      scrollY: 0,
      keyword: "",
    };
  },
  methods: {
    handleScroll() {
      const y = window.scrollY;
      if (this.scrollY < y && 50 < y) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
      this.scrollY = y;
    },
    handleClick() {
      const keyword = this.keyword;
      if(!keyword) return;
      console.log('object');
      const query = {
        name: keyword
      };
      this.$router.push({
        name: 'search',
        query,
      });
    },
  },
  watch: {
    keyword(val) {
      sessionStorage.setItem('keyword', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .8s;
}

.fade-leave-active {
  transition: opacity .4s;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}

.header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background: $baseColor1;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.4);
  z-index: 2;

  &-content {
    display: flex;
    justify-content: space-between;
  }

  &-form {
    height: 30px;
    padding: 15px 0;
    display: flex;

    .is-inline-block {
      margin-left: 15px;
      display: inline-block;
    }
  }
}
</style>
