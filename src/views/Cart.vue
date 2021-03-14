<template>
  <div class="container">
    <CartItems />
    <div v-if="this.$store.state.cart.length == 0">
      <br />
      <h1>Sorry, your cart is empty =(</h1>
      <br />
      <h3 style="text-decoration: underline">
        <router-link to="/">Go to Home</router-link>
      </h3>
    </div>
  </div>
</template>
<script>
import CartItems from "@/components/CartItems";
export default {
  components: { CartItems },

};
</script>
<style scoped>
</style>