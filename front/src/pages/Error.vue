<template>
<div id="error">Error 404</div>
</template>

<script>
export default{
  name: "Error",
}
</script>

<style lang="scss">
@import "../scss/_variables.scss";

#error {
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 3em;
  color: $accent;
}
</style>
