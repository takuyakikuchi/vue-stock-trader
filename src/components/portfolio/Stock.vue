<template>
  <div class="card col-sm-3 m-3">
    <div class="card-header">{{stock.name}}(price: {{stock.value}}) quantity: {{stock.quantity}}</div>
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
            @click="sellStock"
            :disabled="quantity <= 0"
          >Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Stock",
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(["sellStock"]),
    sellStock() {
      const order = {
        id: this.stock.id,
        value: this.stock.value,
        quantity: this.quantity
      };
      this.sellStock(order);
    }
  }
};
</script>

<style>
</style>