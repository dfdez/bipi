<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Mukta Regular";
  src: url(./assets/fonts/Mukta-Regular.ttf);
}
// Font Variables
$roboto: "Mukta Regular", serif;

// Styles
body {
  font-family: $roboto;
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
