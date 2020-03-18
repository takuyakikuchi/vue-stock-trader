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
        />
        <div class="input-group-append">
          <button
            class="btn btn-success"
            type="button"
            id="button-addon2"
            @click="buyStock"
            :disabled="quantity <= 0"
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
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockValue: this.stock.value,
        stockQuantity: this.quantity
      };
      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
</style>