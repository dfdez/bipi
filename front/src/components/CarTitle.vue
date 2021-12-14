<template>
  <div>
    <b :style="titleFont" class="car_title">{{ title1 }}</b>
    <span :style="titleFont" class="car_title">{{ `(${title2})` }}</span>
  </div>
</template>

<script>
export default {
  name: "CarTitle",
  props: {
    title1: String,
    title2: String,
    fontSize: {
      default: "1.5em",
      type: String,
    },
  },
  data() {
    return {
      titleFont: {
        "font-size": this.fontSize
      },
    };
  },
};
</script>

<style lang="scss">
.car_title {
  margin-right: 0.25em;
  margin-bottom: 0.25em;
  font-style: italic;
  text-align: center;
}
</style>
