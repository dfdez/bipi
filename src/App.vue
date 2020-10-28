<template>
  <div id="app">
    <Header />
    <router-view />
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
  font-family: "Inter Regular";
  src: url(./assets/fonts/Inter-Regular.ttf);
}
$inter: "Inter Regular", serif;

body {
  font-family: $inter;
}

body {
  margin: 0;
}

</style>
