<template>
  <div id="app">
    <Header />
    <!-- <Content /> -->
    <Info />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Content from "./pages/Content.vue";
import Info from "./pages/Info.vue";

export default {
  name: "App",
  components: {
    Header,
    Info,
    // Content
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
