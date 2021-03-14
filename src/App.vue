<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="comp" @showNavLinks="comp = 'MobNav'" @closed="comp = 'Navbar'" />
    </transition>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import MobNav from "@/components/MobNav";
export default {
  data() {
    return {
      comp: Navbar
    };
  },
  components: {
    Navbar,
    MobNav
  },
  mounted() {
    const cart = JSON.parse(localStorage.getItem("shirt"));
    if (this.$store.state.cart.length == 0) {
      for (let item of cart) {
        this.$store.state.cart.push(item);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  overflow-y: none;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: black;
  text-decoration: none;
}
.fade-enter {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
</style>
