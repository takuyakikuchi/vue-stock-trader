<template>
  <div id="Stocks" class="row">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  name: "Stocks",
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style>
</style>