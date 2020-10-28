<template>
    <div v-if="text" :style="tagStyle" class="car_tag">{{text}}</div>
</template>

<script>
export default {
  name: "CarTags",
  props: {
    text: [String, Number],
    background: {
      default: "#409fff",
      type: String
    },
    fontSize: {
      default: "10px",
      type: String
    }
  },
  data(){
    return {
      tagStyle: {
        background: this.background,
        'font-size': this.fontSize
      }
    }
  }
}
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.car_tag {
  background: $accent;
  color: white;
  padding: 0 .8em;
  border-radius: 0.4em;
  height: 1.5em;
  align-items: center;
  display: flex;
  margin-right: .5em;
}
</style>
