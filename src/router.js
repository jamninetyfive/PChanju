import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/Home.vue"
import SearchView from "./views/Search.vue";
import Download from "./views/Download.vue";
import DeatilView from "./views/Detail.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/search",
      name: "search",
      component: SearchView
    },
    {
      path: "/download",
      name: "download",
      component: Download
    },       
    {
      path: "/settings",
      name: "settings",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "settings" */ "./views/Settings.vue")
    },
    {
      path: "/history",
      name: "history",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "history" */ "./views/History.vue")
    },        
    {
      path: "/player",
      name: "player",
      props: true,
      component: () => import(/* webpackChunkName: "player" */ "./views/Player.vue")
    },
    {
      path: "/detail",
      name: "detail",
      props: true,
      component: DeatilView
    },
  ]
});
