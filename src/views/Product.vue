<template>
  <div>
    <br>
    <br>
    <ProductPage :clickedShirt="clickedShirt" />
  </div>
</template>
<script>
import ProductPage from "@/components/ProductPage";
export default {
  data() {
    return {
      clickedShirt: {}
    };
  },
  components: {
    ProductPage
  },
  mounted() {
    this.getClickedShirt();
  },
  methods: {
    getClickedShirt() {
      this.$http
        .get(
          `https://magazin-online-32344.firebaseio.com/shirts/-MGE2v6t4dDmjJ2MuN1p/${this.$route.params.id}.json`
        )
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(shirt => {
          this.clickedShirt = shirt;
        });
    }
  }
};
</script>
<style scoped>
</style>