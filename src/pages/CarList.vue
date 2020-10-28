<template>
  <div id="carlist">
    <h1 class="list_title">Catálogo</h1>
    <div class="card_container">
      <CarListCard v-for="(car,index) in data" :key="car.id" :query="{ id: index }" :data="car" />
    </div>
  </div>
</template>

<script>
import CarListCard from '../components/CarList/CarListCard.vue'
let data = require('../assets/mock.json')

export default {
  name: "CarList",
  components: { CarListCard },
  data: () => ({
    data: data
  })
}
</script>

<style lang="scss">
#carlist {
  margin: 1em;
  margin-top: 5.5em;
}

.list_title {
  font-size: 2.3em;
}

.card_container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
