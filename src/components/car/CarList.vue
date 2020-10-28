<template>
  <div class="car_component border">
    <div class="car_component_content">
      <div class="flex_row">
        <CarTitle :title1="car.brand" :title2="car.model" />
      </div>
      <div class="flex_row">
        <CarTags :background="car.tags.color" :text="car.tags.color" />
        <CarTags :text="car.tags.year" />
      </div>
      <div class="car_list_picture_container flex_row" style="">
        <img class="car_list_picture" :src="car.image || require('../../assets/icon.png')">
        <span style="font-size: 10px">desde</span>
      </div>
      <div class="flex-row" style="text-align: right">
        <span v-if="car.isOnOffer" class="discount">{{Math.round(car.price)}}€</span>
        <b class="price">{{car.isOnOffer ? Math.round(car.price - car.offerDiscount) : Math.round(car.price)}}€</b>
      </div>
    </div>
  </div>
</template>

<script>
import CarTitle from "./components/CarTitle.vue"
import CarTags from "./components/CarTags.vue"

export default {
    name: "Car",
    props: {
        car: Object
    },
  components: {
    CarTitle,
    CarTags
  }
}
</script>

<style lang="scss">
@import "../../scss/_variables.scss";

.car_component {
  width: fit-content;
  margin: .4em;
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

.car_list_picture_container {
  align-items: baseline;
  justify-content: flex-end;
}

.car_list_picture {
  width: 25em;
  min-width: 15em;
  max-height: 13em;
  object-fit: contain;
}

.discount {
  text-decoration: line-through $accent;
  color: $accent;
  margin-right: .4em;
}

.price {
  font-size: 1.2em;
}

@media (max-width: 962px){
  .car_component {
    width: 95%;
  }

  .car_list_picture {
    width: 100%;
    max-height: 20em;
  }
}

</style>
