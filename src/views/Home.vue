<template>
  <div style="background-color: #c4d79b">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item :href="pieURL">圓餅圖</b-nav-item>
        <b-nav-item href="#">長條圖(橫)</b-nav-item>
        <b-nav-item href="#">長條圖(直)</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div style="padding: 50px">
      <router-view />
    </div>
  </div>
</template>

<style>
html {
  background-color: #c4d79b;
}
</style>

<script>
export default {
  mounted() {
    // this.pieURL = this.normalURL + this.pieURL;
    this.initializeURL();
    // this.$router.push("/PieChart");
  },
  data() {
    return {
      normalURL: "/front-web02",
      pieURL: "/PieChart",
    };
  },
  methods: {
    initializeURL() {
      if (process.env.VUE_APP_PENV === "normal") {
        this.pieURL = this.normalURL + this.pieURL;
      }
    },
  },
};
</script>