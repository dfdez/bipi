<template>
  <div>
    <span :style="titleFont" class="car_title">{{ title1 }}</span>
    <b :style="titleFont" class="car_title">{{ title2 }}</b>
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
  font-style: italic;
}
</style>
