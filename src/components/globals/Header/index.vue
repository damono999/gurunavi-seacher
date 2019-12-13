<template>
  <transition name="fade">
    <div v-show="showHeader" class="c-header">
      <div class="inner">
        <div class="c-header-content">
          <router-link class="c-header-title" to="/"><span class="c-header-title--hover">ぐるなびサーチ</span></router-link>
          <div class="c-header-form">
            <input v-model="form.keyword" type="text" class="c-header-form-text" placeholder="キーワード">
            <router-link
              :to="{name: 'result-search', query: { form:{name: form.keyword}}}"
              class="c-header-form-btn"
            >検索</router-link>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    data() {
      return {
        showHeader: true,
        scrollY: 0,
        form: {
          keyword: '',
        }
      }
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
      }
    },
  };
</script>

<style lang="scss" scoped>
$baseColor1: #f39800;

.fade-enter,
.fade-enter-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .8s;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}

.c-header {
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background: $baseColor1;
  box-shadow: 0 1px 1px 1px rgba(0,0,0,.4);
  z-index: 2;

  &-content {
    display: flex;
    justify-content: space-between;
  }

  &-title {
    font-size: 30px;
    line-height: 50px;
    height: 50px;
    margin: 5px 0;
    font-weight: 700;
    padding-left: 10px;
    border-left: #fff 10px solid;
    text-decoration: none;
    color: black;

    &--hover:hover {
      opacity: .5;
    }
  }

  &-form {
    height: 30px;
    padding: 15px;

    &-text {
      height: 30px;
      box-sizing: border-box;
      font: 15px/24px;
      box-sizing: border-box;
      padding: 5px 8px;
      transition: .3s;
      letter-spacing: 1px;
      // color: #aaa;
      border: 1px solid #fff;
      box-shadow: 1px 1px 2px 0 #707070 inset;
      border-radius: 4px;

      &:focus {
        // outline: none;
        // box-shadow: 2px 2px 2px 0 #c9c9c9;
        box-shadow: 0 0 3px 1px #00bfff;
      }
    }

    &-btn {
      height: 30px;
      text-decoration: none;
      background-color: #fff;
      color: black;
      font-size: 1em;
      line-height: 1;
      letter-spacing: .05em;
      padding: .2em 1em;
      border-radius: 3px;
      cursor: pointer;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
      -webkit-tap-highlight-color: transparent;
      transition: .3s ease-out;
      margin-left: 10px;

      &:hover,&:focus {
        box-shadow: 0 0 5px 1px #00bfff;
        outline: none;
      }
    }
  }
}
</style>
