<template>
  <div class="car_component border">
    <div class="car_component_content">
      <div class="flex_row">
        <CarTitle :fontSize="'3em'" :title1="car.brand" :title2="car.model" />
      </div>
      <div class="flex_row">
        <CarTags :fontSize="'.8em'" :background="car.tags.color" :text="car.tags.color" />
        <CarTags :fontSize="'.8em'" :text="car.tags.year" />
      </div>
      <div class="car_picture_container flex_row">
        <img class="car_picture" :src="car.image || require('../../assets/icon.png')" />
      </div>
    </div>
  </div>
</template>

<script>
import CarTitle from "./components/CarTitle.vue";
import CarTags from "./components/CarTags.vue";

export default {
  name: "Car",
  props: {
    car: Object,
  },
  components: {
    CarTitle,
    CarTags,
  },
};
</script>

<style lang="scss">
@import "../../scss/_variables.scss";

.car_component {
    width: fit-content;
}

.car_picture_container {
  align-items: baseline;
  justify-content: center;
}

.car_component_content {
  margin: 0.6em;
  display: flex;
  flex-direction: column;
}

.flex_row {
  display: flex;
  flex-flow: row;
}

@media (max-width: 962px) {
  .car_title{
    font-size: 1.5em !important;
  }
}

@media (max-width: 1250px) {
  .car_component{
    width: 100% !important;
  }

  .car_picture {
    width: 100%;
  }
}
</style>
