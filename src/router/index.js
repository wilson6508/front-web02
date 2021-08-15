import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import PieChart from "@/components/PieChart.vue";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Home",
  component: Home,
  meta: {
    title: "首頁",
  },
  children: [{
    path: "PieChart",
    name: "PieChart",
    component: PieChart,
    meta: {
      title: "圓餅圖",
    },
  }, ],
}, ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   next();
//   // const goToHome = ["/", "*"];
//   // if (goToHome.includes(to.path)) {
//   //   next("/front-web02");
//   // } else {

//   // }
// });

export default router;