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
          :class="{'red-border': insufficientQuantity}"
        />
        <div class="input-group-append">
          <button
            class="btn btn-warning"
            type="button"
            id="button-addon2"
            @click="sellStock"
            :disabled="quantity <= 0 || insufficientQuantity"
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
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        id: this.stock.id,
        value: this.stock.value,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
.red-border {
  border: 3px solid rgb(255, 126, 126);
}
</style>