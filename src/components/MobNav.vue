<template>
  <div id="mob-nav">
    <div id="x" @click="closeMobNav">
      <div class="line1"></div>
      <div class="line2"></div>
    </div>
    <div class="fix-mid">
      <ul id="nav-links">
        <router-link tag="li" to="/new">New</router-link>
        <router-link tag="li" to="/top">Top</router-link>
        <router-link tag="li" to="/all">All</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobNav",
  methods: {
    closeMobNav() {
      this.$emit("closed");
    }
  }
};
</script>

<style scoped>
#mob-nav {
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 218, 51);
  position: relative;
  cursor: pointer;
}
#x {
  z-index: 100;
  position: absolute;
  margin: 1rem 2rem;
  top: 0;
  right: 0;
  background-color: black;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#x div {
  width: 1.5rem;
  height: 0.2rem;
  position: absolute;
}
#x .line1 {
  background-color: rgb(255, 218, 51);
  transform: rotateZ(45deg);
}
#x .line2 {
  background-color: rgb(255, 218, 51);
  transform: rotateZ(-45deg);
}
ul {
  padding: 0;
}
.fix-mid {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}
#nav-links {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  list-style: none;
  margin: auto;
  color: black;
  cursor: pointer;
}
#nav-links li {
  padding: 0.7rem 2rem;
  width: 80vw;
  border-top: 1px solid grey;
}
#nav-links li:last-of-type {
  border-bottom: 1px solid grey;
}
#nav-links li.router-link-exact-active {
  color: black;
  background-color: rgb(255, 218, 51);
}
#nav-links li:hover {
  transition: all 0.2s ease;
  color: white;
  filter: brightness(95%);
}
</style>