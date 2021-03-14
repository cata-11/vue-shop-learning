<template>
  <div id="best-shirt">
    <div class="window-best-seller">
      <img :src="shirts[nr].url" />
      <div class="shirt-info">
        <div class="shirt-info-text">
          <h4>Best seller {{shirts[nr].year}}</h4>
          <br />
          <h5>
            Title:
            <strong>{{shirts[nr].title}}</strong>
          </h5>
          <br />
          <h5>
            Price:
            <strong>{{shirts[nr].price}}</strong>
          </h5>
        </div>
        <router-link class="btn btn-success" :to="`/product/${shirts[nr].id}`">Vue me</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nr"],
  data() {
    return {
      shirts: []
    };
  },

  methods: {
    getBestShirts() {
      this.$http
        .get(
          "https://magazin-online-32344.firebaseio.com/shirts/-MGE2v6t4dDmjJ2MuN1p.json"
        )
        .then(response => {
          return response.json();
        })
        .then(shirts => {
          this.shirts = shirts;
        });
    }
  },
  mounted() {
    this.getBestShirts();
  }
};
</script>


<style scoped>
img {
  width: 25rem;
  height: 25rem;
  margin-top: 2rem;
}
.window-best-seller {
  width: 100%;
  height: 30rem;
  border-radius: 1%;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  position: relative;
  border: 10px solid rgb(255, 218, 51);
}
.shirt-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
@media only screen and (max-width: 1125px) {
  .shirt-info {
    flex-direction: row;
    position: absolute;
    bottom: -4rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 35rem;
  }
  .shirt-info-text {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 25rem;
  }
  .shirt-info-text h5 {
    font-size: 1rem;
  }
  .shirt-info-text h4 {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 850px) {
  .shirt-info-text {
    display: none;
  }
  .shirt-info {
    width: 100%;
  }
  button {
    width: 100%;
  }
}
</style>