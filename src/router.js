import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Live from "./views/Live.vue";
import Ticketing from "./views/Ticketing.vue";
import Bets from "./views/Bets.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/live",
      name: "live",
      component: Live
    },
    {
      path: "/bets",
      name: "bets",
      component: Bets
    },
    {
      path: "/ticketing",
      name: "ticketing",
      component: Ticketing
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
