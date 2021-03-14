<template>
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 sol-xs-12">
    <div
      class="product-item"
      :class="[shirt.category == 1 ? 'markGreen' : shirt.category == 2 ? 'markRed' : 'markBlue']"
    >
      <div class="product">
        <img class="product-image" :src="shirt.url" />
        <h4 class="product-name">
          <strong>{{shirt.title}}</strong>
        </h4>
        <div class="prices-sale">
          <h5
            v-if="shirt.category == 1"
            class="product-prev-price"
          >{{ `${parseInt(shirt.price)*1.5}`}}$</h5>
          <h5 class="product-curent-price">{{shirt.price}}</h5>
        </div>
        <router-link :to="`/product/${shirt.id}`">
          <button class="btn btn-success">Vue me</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["shirt"]
};
</script>

<style scoped>
.product-item {
  background-color: rgba(255, 218, 51, 0.774);
  padding: 0.8rem;
  border-radius: 3%;
  width: 100%;
  border: 8px solid rgb(255, 218, 51);
  margin-bottom: 3rem;
}
.markRed {
  border: 8px solid rgb(236, 63, 63);
}
.markBlue {
  border: 8px solid rgb(77, 152, 223);
}
.markGreen {
  border: 8px solid rgb(179, 230, 70);
}
.product {
  width: 100%;
  height: 21.9rem;
}
.product-image {
  width: 100%;
  height: 16rem;
  margin-bottom: 1rem;
}
.product-name {
  cursor: default;
}
.prices-sale {
  display: flex;
  justify-content: center;
  cursor: default;
}
.prices-sale h5 {
  margin: 0.5rem;
  cursor: default;
}
.product-prev-price {
  text-decoration: line-through;
  cursor: default;
}
img {
  width: 18rem;
  height: 25rem;
  cursor: pointer;
}
@media only screen and (min-width: 1750px) {
  .product-image {
    width: 90%;
  }
}
@media only screen and (width: 425px) {
  .product-image {
    width: 90%;
  }
}
</style>
