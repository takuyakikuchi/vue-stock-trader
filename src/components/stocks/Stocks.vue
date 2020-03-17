<template>
  <div id="Stocks" class="row">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  name: "Stocks",
  data() {
    return {
      stocks: [
        { id: 1, name: "Toyota", value: 200 },
        { id: 2, name: "Nissan", value: 60 },
        { id: 3, name: "Mazda", value: 80 },
        { id: 4, name: "Suzuki", value: 70 },
        { id: 5, name: "Mitsubishi", value: 80 }
      ]
    };
  },
  components: {
    Stock
  }
};
</script>

<style>
</style>