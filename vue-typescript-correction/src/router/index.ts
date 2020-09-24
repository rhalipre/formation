import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Shows from "../views/Shows.vue";
import Favorites from "@/views/Favorites.vue";
import ShowDetail from "@/views/ShowDetail.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/shows",
    name: "Shows",
    component: Shows,
    alias: ["/", "/toto"]
  },
  {
    path: "/shows/favorites",
    name: "Favorites",
    component: Favorites
  },
  {
    path: "/shows/:id",
    name: "Detail",
    component: ShowDetail,
    props: true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
