<template>
  <transition name="fade">
    <div v-show="showHeader" class="header">
      <div class="inner">
        <div class="header-content">
          <app-router-link
            tag="h1"
            to="/"
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
    this.keyword = localStorage.getItem('keyword') || '';
  },
  created() {
    this.keyword = localStorage.getItem('keyword') || '';
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
      console.log('object');
      localStorage.setItem('keyword', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-enter-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s;
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
    padding: 15px;
    display: flex;

    .is-inline-block {
      margin-left: 15px;
      display: inline-block;
    }
  }
}
</style>
