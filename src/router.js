import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import CV from "@/views/CV";
import Error from "@/views/Error";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/CV", name: "CV", component: CV },
    {path: "*", name: "Error", component: Error },
  ],
});
