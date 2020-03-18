<template>
  <div id="Home">
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Save & Load your data</h6>
    <h6>Click on 'End Day' to begin a new day!</h6>
    <hr />
    <p>Your funds: {{funds | currency}}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style>
</style>
