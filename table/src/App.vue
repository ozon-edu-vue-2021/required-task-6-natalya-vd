<template>
  <div id="app">
    <Header />
    <router-view />
    <!-- <base-wrapper /> -->
    <!-- <virtal-scroll-wrapper /> -->
  </div>
</template>

<script>
// import BaseWrapper from "./components/index.vue";
// import VirtalScrollWrapper from "./components/virtual-scroll/index.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    // BaseWrapper,
    // VirtalScrollWrapper,
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 1260px;
  margin: 0 auto 0;
}
</style>
