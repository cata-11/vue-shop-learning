<template>
  <div class="row">
    <div class="col-12">
      <div class="item">
        <img :src="item.url" alt />
        <h4>"{{item.title}}"</h4>
        <h4>{{item.size}}</h4>
        <div class="btns">
          <button @click="count" class="btn btn-success">
            <h2>-</h2>
          </button>
          <h5>x{{quant}}</h5>
          <button @click="quant++" class="btn btn-success">
            <h2>+</h2>
          </button>
        </div>

        <h2>{{item.price}}</h2>
        <h2 v-if="quant > 1">{{`${parseInt(item.price)*quant}`}}$</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
      quant: this.item.quantity
    };
  },
  methods: {
    count() {
      if (this.quant <= 1) this.quant = 1;
      else this.quant--;
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  background-color: rgb(255, 218, 51);
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  border: 1px solid black;
}
img {
  width: 10rem;
  height: 10rem;
}
.btns {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 7rem;
  align-items: center;
}
h5,
h2 {
  margin: 0;
}
.btn {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>