<template>
  <div class="card col-sm-3 m-3">
    <div class="card-header">{{stock.name}}(price: {{stock.value}})</div>
    <div class="card-body">
      <div class="input-group mb-3">
        <input
          type="number"
          class="form-control"
          placeholder="Quantity"
          aria-label="Quantity"
          aria-describedby="button-addon2"
          v-model="quantity"
          :class="{'red-border': insufficientFunds}"
        />
        <div class="input-group-append">
          <button
            class="btn btn-success"
            type="button"
            id="button-addon2"
            @click="buyStock"
            :disabled="quantity <= 0 || insufficientFunds"
          >Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.stock.value * this.quantity > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockValue: this.stock.value,
        stockQuantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.red-border {
  border: 3px solid rgb(255, 126, 126);
}
</style>