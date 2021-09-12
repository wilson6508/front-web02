<template>
  <div style="background-color: #c4d79b">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#" @click="change('ColumnChart')">長條圖(直)</b-nav-item>
        <!-- <b-nav-item href="#" @click="change('BarChart')">長條圖(橫)</b-nav-item> -->
        <b-nav-item href="#" @click="change('PieChart')">圓餅圖</b-nav-item>
        <b-nav-item href="#" @click="change('LineChart')">折線圖</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="collapse navbar-collapse justify-content-end">
        <b-nav-item href="https://docs.google.com/forms/d/e/1FAIpQLSciIB-sX4oNoz25sqtvokGIHEu0fgSGlnV77ldIX64B876iGQ/viewform?vc=0&c=0&w=1&flr=0" target="_blank">聯絡作者</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div style="padding: 50px">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<style>
html {
  background-color: #c4d79b;
}
</style>

<script>
import ColumnChart from "@/components/ColumnChart";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";
import LineChart from "@/components/LineChart";

export default {
  components: {
    ColumnChart,
    BarChart,
    PieChart,
    LineChart
  },
  data() {
    return {
      currentComponent: "ColumnChart",
    };
  },
  methods: {
    change(component) {
      this.currentComponent = component;
    },
  },
};
</script>