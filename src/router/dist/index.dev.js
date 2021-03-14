"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Top = _interopRequireDefault(require("../views/Top.vue"));

var _All = _interopRequireDefault(require("../views/All.vue"));

var _New = _interopRequireDefault(require("../views/New.vue"));

var _Cart = _interopRequireDefault(require("../views/Cart.vue"));

var _Product = _interopRequireDefault(require("../views/Product.vue"));

var _ProdDetail = _interopRequireDefault(require("../views/ProdDetail.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/",
  name: "Home",
  component: _Home["default"]
}, {
  path: "/new",
  name: "New",
  component: _New["default"]
}, {
  path: "/top",
  name: "Top",
  component: _Top["default"]
}, {
  path: "/all",
  name: "All",
  component: _All["default"]
}, {
  path: "/cart",
  name: "Cart",
  component: _Cart["default"]
}, {
  path: "/product",
  name: "Product",
  component: _Product["default"],
  children: [{
    path: "/product/:id",
    name: _ProdDetail["default"],
    component: _ProdDetail["default"]
  }]
}];
var router = new _vueRouter["default"]({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;