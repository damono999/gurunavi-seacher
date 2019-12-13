<template>
  <div class="wrapper">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default {
  methods: {
    beforeEnter() {
      this.$root.$emit("triggerScroll");
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style scope>
.a-init {
  padding: 5px;
  border: 1px solid #f2f2f2;
}

.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>
