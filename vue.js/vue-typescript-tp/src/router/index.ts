import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Shows from "../views/ShowsPage.vue";
import Favorites from "@/views/FavoritesPage.vue";
import MoreDetails from "@/views/ShowDetailPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: "shows",
    path: "/",
    component: Shows
  },
  {
    name: "shows-favorites",
    path: "/shows/favorites",
    alias: "/starred",
    component: Favorites
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    name: "moreDetails",
    path: "/show/:id",
    component: MoreDetails,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
