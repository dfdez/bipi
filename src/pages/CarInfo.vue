<template>
  <div id="info">
    <router-link to="/">
      <div class="info_title"><span class="arrow">&#x3c;</span>Ir al catálogo</div>
    </router-link>
    <div class="info_content">
      <CarInfoCard style="width: 73%;" :data="data[id]" />
      <div class="car_info">
        <CarInfoDescription :text="data[id].description" />
        <CarInfoPricing :data="data[id]"/>
      </div>
    </div>
   </div>
</template>

<script>
import CarInfoCard from '../components/CarInfo/CarInfoCard.vue'
import CarInfoDescription from '../components/CarInfo/CarInfoDescription.vue'
import CarInfoPricing from '../components/CarInfo/CarInfoPricing.vue'

let data = require('../assets/mock.json')

export default {
  name: "CarInfo",
  components: {
    CarInfoCard,
    CarInfoDescription,
    CarInfoPricing
  },
  data: () => ({
    data: data,
    id: null,
  }),
  created(){
    this.id = this.$route.query.id
    this.$store.commit('changeId', this.id);
  }
}
</script>

<style lang="scss">
@import "../scss/_variables.scss";

#info {
  margin: 1em;
  margin-top: 5.5em;
}

.info_title {
  font-size: 1em;
  display: flex;
  align-items: center;
}

.info_content {
  display: flex;
  justify-content: space-between;
  margin-top: 2.5em;
}

.arrow {
  font-size: .6em;
  margin-right: .5em;
  color: $accent;
  font-weight: bold;
}

.car_info {
  width: 25%;
}

//Class used in CarDescription & CarPricing
.border_special {
  border-radius: 0.4em;
  border: solid 2px;
  border-color: #cccccc70;
}

@media (max-width: 1250px){
  .info_content {
    flex-direction: column;
  }
  .car_info {
    width: 100% !important;
    margin-top: 1em;
  }
}

@media (max-width: 962px){
  .border_special {
    border: none !important;
  }

  .car_info {
    margin: 1em 0 3em;
  }
}
</style>
