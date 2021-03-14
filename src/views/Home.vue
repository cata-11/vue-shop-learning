<template>
  <div id="home">
    <br />
    <br />
    <div class="row">
      <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
        <BestShirt :nr="nr" />
      </div>
      <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 all-tabs">
        <div class="row">
          <div class="choose-seller" @click="nr=0">
            <h4>
              <a>Best seller 2020</a>
            </h4>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="choose-seller" @click="nr=1">
            <h4>
              <a>Best seller 2019</a>
            </h4>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="choose-seller" @click="nr=2">
            <h4>
              <a>Best seller 2018</a>
            </h4>
          </div>
        </div>
        <br />
      </div>
    </div>
    <br />
    <br />
    <hr />
    <br />
    <!--products-->
    <h2 class="text-left">On Sale</h2>
    <br />
    <div class="row">
      <ProductItem v-for="shirt in sale" :key="shirt.id" :shirt="shirt" />
    </div>
    <br />
    <hr />
    <br />

    <h2 class="text-left">Hot Offers</h2>
    <br />
    <div class="row">
      <ProductItem v-for="shirt in hot" :key="shirt.id" :shirt="shirt" />
    </div>
    <br />
    <hr />
    <br />
    <h2 class="text-left">You may like</h2>
    <br />
    <div class="row">
      <ProductItem v-for="shirt in others" :key="shirt.id" :shirt="shirt" />
    </div>
    <br />
  </div>
</template>

<script>
import BestShirt from "@/components/BestShirt";
import ProductItem from "@/components/ProductItem";
export default {
  data() {
    return {
      shirts: [],
      nr: 0,
      selectedCategory: 1,
      choosenClass: ""
    };
  },
  components: {
    BestShirt,
    ProductItem
  },
  methods: {
    getShirts() {
      this.$http
        .get(
          "https://magazin-online-32344.firebaseio.com/shirts/-MGE2v6t4dDmjJ2MuN1p.json"
        )
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(shirts => {
          this.shirts = shirts;
        });
    }
  },
  mounted() {
    this.getShirts();
  },
  computed: {
    sale() {
      return this.shirts.filter(shirt => {
        return shirt.category == 1;
      });
    },
    hot() {
      return this.shirts.filter(shirt => {
        return shirt.category == 2;
      });
    },
    others() {
      return this.shirts.filter(shirt => {
        return shirt.category == 3;
      });
    }
  }
};
</script>

<style scoped>
h4 {
  margin: 0;
  padding: 0;
}
#home {
  width: 80vw;
  margin: auto;
}
.choose-seller {
  width: 100%;
  height: 5rem;
  border: 1px solid rgb(218, 211, 211);
  border-radius: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.choose-seller:hover {
  background-color: rgb(255, 218, 51);
}
.backColor {
  background-color: rgb(255, 218, 51);
}
.notBackColor {
  background-color: none;
}
@media only screen and (max-width: 1000px) {
  .all-tabs {
    margin-top: 4rem;
  }
}
@media only screen and (min-width: 1750px) {
  #home {
    width: 55vw;
    margin: auto;
  }
}
</style>