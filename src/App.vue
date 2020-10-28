<template>
  <div id="app">
    <Header />
    <router-view />
    <!-- <CarList /> -->
    <!-- <CarInfo /> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import CarList from "./pages/CarList.vue";
// import CarInfo from "./pages/CarInfo.vue";

export default {
  name: "App",
  components: {
    Header,
    // CarInfo,
    // CarList
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Inter Regular";
  src: url(./assets/fonts/Inter-Regular.ttf);
}
// Font Variables
$inter: "Inter Regular", serif;

// Styles
body {
  font-family: $inter;
}

// #app {
//   background-color: white;
//   height: 100vh;
//   width: 100vw;
// }

body {
  margin: 0;
}

</style>
