<template>
  <div>
    <br />
    <h2>My Cart</h2>
    <br />
    <CartItem v-for="item in cart" :key="item.id" :item="item" />
  </div>
</template>
<script>
import CartItem from "@/components/CartItem";
export default {
  data() {
    return {
      cart: this.$store.state.cart
    };
  },
  components: {
    CartItem
  }
};
</script>
<style scoped>
h2 {
  padding: 1rem;
  background-color: rgb(255, 218, 51);
  width: 33.33%;
  margin: 1rem auto 0 auto !important;
}
</style>