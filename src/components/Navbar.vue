<template>
  <div id="nav">
    <div id="burger" @click="toggleNavLinks">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <router-link id="nav-logo" to="/">LOGO</router-link>
    <ul id="nav-links">
      <router-link tag="li" to="/new">New</router-link>
      <router-link tag="li" to="/top">Top</router-link>
      <router-link tag="li" to="/all">All</router-link>
    </ul>
    <div id="nav-cart">
      <router-link to="/cart">
        <i class="fa fa-shopping-cart"></i>
      </router-link>
      <div id="counter">{{this.$store.state.cart.length}}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNavLinks() {
      this.$emit("showNavLinks");
    }
  }
};
</script>

<style scoped>
#burger {
  display: none;
}
#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 5rem;
  box-shadow: 0 4px 16px rgba(205, 209, 218, 0.4);
}
#nav-logo {
  font-size: 2rem;
  color: black;
  text-decoration: none;
  background-color: rgb(255, 218, 51);
  padding: 0 10px;
  border-radius: 15%;
}
#nav-links {
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 30%;
  font-size: 1.5rem;
  list-style: none;
  margin: 0;
  color: grey;
  cursor: pointer;
}
#nav-links li {
  padding: 0.7rem 2rem;
  border-radius: 5%;
}
#nav-links li.router-link-exact-active {
  color: black;
  background-color: rgb(255, 218, 51);
}
#nav-links li:hover {
  transition: all 0.2s ease;
  background-color: rgb(255, 218, 51);
  color: black;
}
#nav-cart {
  display: flex;
  position: relative;
}
#nav-cart i {
  margin-right: 10px;
  background-color: rgb(255, 218, 51);
  color: black;
  padding: 8px 15px 8px 10px;
  border-radius: 25%;
  font-size: 2rem;
  cursor: pointer;
}
#counter {
  cursor: default;
  background-color: black;
  color: rgb(255, 218, 51);
  padding: 0px 6px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 0;
}

@media only screen and (max-width: 700px) {
  #nav-links {
    display: none;
  }
  #burger {
    cursor: pointer;
    height: 2.8rem;
    width: 2.8rem;
    background-color: rgb(255, 218, 51);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #burger div {
    width: 1.5rem;
    height: 0.2rem;
    background-color: black;
    margin: 2px 0;
    padding: 0;
  }
}
</style>
