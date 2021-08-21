<template>
  <div style="background-color: #c4d79b">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#" @click="change('PieChart')">圓餅圖</b-nav-item>
        <!-- <b-nav-item href="#" @click="change('BarChart')">長條圖(橫)</b-nav-item> -->
        <b-nav-item href="#" @click="change('ColumnChart')"
          >長條圖(直)</b-nav-item
        >
        <!-- <b-nav-item href="https://tw.yahoo.com/">長條圖(直)</b-nav-item> -->
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
import PieChart from "@/components/PieChart";
import BarChart from "@/components/BarChart";
import ColumnChart from "@/components/ColumnChart";

export default {
  components: {
    PieChart,
    BarChart,
    ColumnChart,
  },
  data() {
    return {
      currentComponent: "PieChart",
    };
  },
  methods: {
    change(component) {
      this.currentComponent = component;
    },
  },
};
</script>