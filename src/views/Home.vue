<template>
  <div style="background-color: #c4d79b">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/PieChart">圓餅圖</b-nav-item>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Home</b-nav-item>
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