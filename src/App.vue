<template>
  <div id="app">
    <Header />
    <div class="container">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-10px);
    opacity: 0;
  }
}
</style>
