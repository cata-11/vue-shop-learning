import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Top from "../views/Top.vue";
import All from "../views/All.vue";
import New from "../views/New.vue";
import Cart from "../views/Cart.vue";
import Product from "../views/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new",
    name: "New",
    component: New,
  },
  {
    path: "/top",
    name: "Top",
    component: Top,
  },
  {
    path: "/all",
    name: "All",
    component: All,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
