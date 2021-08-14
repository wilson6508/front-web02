import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
// import PieChart from "@/components/PieChart.vue";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Home",
  component: Home,
  meta: {
    title: "首頁",
  },
  // children: [{
  //   path: "PieChart",
  //   name: "PieChart",
  //   component: PieChart,
  //   meta: {
  //     title: "測試HC",
  //   },
  // }, ],
}, ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;