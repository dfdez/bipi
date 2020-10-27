<template>
  <div id="content">
    <h1 class="title">Catálogo</h1>
    <div class="car_container">
      <div v-for="car in data" :key="car.id" class="car_component">
        <div class="car_component_content">
          <div class="flex_row">
            <span class="car_title">{{car.brand}}</span><b class="car_title">{{car.model}}</b>
          </div>
          <div class="flex_row">
            <div style="background: #2ac940;" class="car_info">{{car.tags.color}}</div>
            <div style="background: #409fff;" class="car_info">{{car.tags.year}}</div>
          </div>
          <div class="flex_row" style="align-items: baseline;">
            <img class="car_picture" :src="car.image">
            <span style="font-size: 10px; margin-left: auto">desde</span>
          </div>
          <div class="flex-row" style="text-align: right">
            <span v-if="car.isOnOffer" class="discount">{{Math.round(car.price)}}€</span>
            <b class="price">{{car.isOnOffer ? Math.round(car.price - car.offerDiscount) : Math.round(car.price)}}€</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as data from '../assets/mock.json'

export default {
  name: "Content",
  data: () => ({
    data: data.default
  }),
  created(){
    console.log(data)
  }
}
</script>

<style lang="scss">
#content {
  margin: 1em;
  margin-top: 5.5em;
  height: 100vh;
}

.title {
  font-size: 2.3em;
}

.car_container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.car_component {
  border-radius: 0.4em;
  border: solid 2px;
  border-color: #cccccc70;
  width: fit-content;
  margin: .4em;
}

.car_component_content {
  margin: 0.6em;
  display: flex;
  flex-direction: column;
}

.car_title {
  margin-right: 0.25em;
  font-size: 1.5em;
  font-style: italic;
}

.flex_row {
  display: flex;
  flex-flow: row;
}

.car_info {
  color: white;
  padding: 0 .8em;
  border-radius: 0.4em;
  height: 1.5em;
  font-size: 10px;
  align-items: center;
  display: flex;
  margin-right: .5em;
}

.car_picture {
  width: 22em;
  min-width: 15em;
}

@media (max-width: 866px){
  .car_picture {
    width: 80%;
  }
}

.discount {
  text-decoration: line-through #ec0044;
  color: #ec0044;
  margin-right: .4em;
}

.price {
  font-size: 1.2em;
}

</style>
