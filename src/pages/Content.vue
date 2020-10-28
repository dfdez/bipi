<template>
  <div id="content">
    <h1 class="title">Catálogo</h1>
    <div class="car_container">
      <Car v-for="car in data" :key="car.id" :car="car" />
    </div>
  </div>
</template>

<script>
import Car from '../components/car/CarList.vue'
let data = require('../assets/mock.json')

export default {
  name: "Content",
  components: { Car },
  data: () => ({
    data: data
  })
}
</script>

<style lang="scss">
#content {
  margin: 1em;
  margin-top: 5.5em;
  /* height: 100vh; */
}

.title {
  font-size: 2.3em;
}

.car_container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
