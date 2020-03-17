<template>
  <div class="card col-sm-3 m-3">
    <div class="card-header">{{stock.name}}(price: {{stock.value}})</div>
    <div class="card-body">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Quantity"
          aria-label="Quantity"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  props: ["stock"]
};
</script>

<style>
</style>