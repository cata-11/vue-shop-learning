<template>
  <div id="clickedShirt" class="container-fluid">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <img :src="clickedShirt.url" alt />
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <br />
        <div class="shirt-info">
          <h4>
            <p>Name:</p>
            <strong>{{clickedShirt.title}}</strong>
          </h4>
          <br />
          <h4>
            <p>Price:</p>
            <strong>{{clickedShirt.price}}</strong>
          </h4>
          <br />
          <div @click="toShow=!toShow" id="size">
            <h4 class="choose-size">Choose size</h4>
            <ul v-show="toShow" class="size-dropdown">
              <li @click="cSize = 'XL'">XL</li>
              <li @click="cSize = 'L'">L</li>
              <li @click="cSize = 'M'">M</li>
              <li @click="cSize = 'S'">S</li>
              <li @click="cSize = 'XS'">XS</li>
            </ul>
          </div>
          <br />
          <h4>
            <p>Size:</p>
            <em v-if="!cSize" class="text-danger">not choosen</em>
            <strong else>{{cSize}}</strong>
          </h4>
          <br />
          <div id="count">
            <h2>{{counter}}</h2>
            <div class="arrows">
              <i @click="counter++" class="fa fa-caret-up"></i>
              <i @click="count" class="fa fa-caret-down"></i>
            </div>
          </div>
        </div>
        <br />
        <hr id="hr" />
        <br />
        <button
          :class="[cSize == false ? 'notReady' : 'ready']"
          class="btn btn-success"
          @click="addToCart"
        >
          <h3>Add to cart</h3>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["clickedShirt"],
  data() {
    return {
      toShow: false,
      cSize: "",
      counter: 1
    };
  },
  methods: {
    count() {
      if (this.counter <= 1) this.counter = 1;
      else this.counter--;
    },
    addToCart() {
      this.$store.state.cart.push(this.clickedShirt);
      this.clickedShirt.quantity = this.counter;
      this.clickedShirt.size = this.cSize;

      this.counter = 1;
      this.cSize = "";
      localStorage.setItem("shirt", JSON.stringify(this.$store.state.cart));
    }
  }
};
</script>


<style scoped>
p {
  margin: 0;
  margin-right: 0.5rem;
}
.notReady {
  filter: brightness(60%);
  pointer-events: none;
}
.ready {
  cursor: pointer;
}
#hr {
  width: 50%;
  margin-left: 0;
}
.card {
  width: 70%;
  height: 30rem;
  border: 1px solid rgb(218, 211, 211);
  border-radius: 1%;
  padding: 1rem;
  background-color: rgb(255, 218, 51);
  margin: auto;
}
img {
  width: 100%;
  height: 100%;
}
.shirt-info {
  display: flex;
  justify-content: left;
  flex-direction: column;
}
h4 {
  display: flex;
  justify-content: left;
  margin: 0;
}
h2 {
  margin: 0;
  margin-left: 0.8rem;
}
#size {
  padding: 0.5rem 1rem;
  background-color: rgb(255, 218, 51);
  width: 50%;
  cursor: pointer;
  position: relative;
}
.choose-size {
  display: flex;
  justify-content: space-between;
}
.choose-size::before {
  content: "";
}
.choose-size::after {
  font-family: FontAwesome;
  content: "\f078";
}
.size-dropdown {
  padding: 1rem;
  z-index: 1000;
  position: absolute;
  background-color: rgb(255, 218, 51);
  top: 0;
  left: 0;
}
ul {
  list-style: none;
  margin: 0;
  margin-top: 2.7rem;
  width: 100%;
  opacity: 0.9;
}
li {
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
}
li:hover {
  background-color: rgb(255, 218, 51);
  filter: brightness(85%);
}
#count {
  width: 4.5rem;
  height: 4rem;
  background-color: rgb(255, 218, 51);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.arrows {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
}
i {
  margin: 0rem 0;
  padding: 0 0.7rem;
  cursor: pointer;
}
i:hover {
  background-color: rgb(255, 218, 51);
  filter: brightness(90%);
}
.btn {
  width: 50%;
  height: 4rem;
  float: left;
}
button h3 {
  margin: 0;
  padding: 0;
}
</style>