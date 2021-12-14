<template>
  <div id="carlist">
    <div class="car_list_header">
      <h1 class="list_title">Pets</h1>
      <CarListFilter :pets="data" />
    </div>
    <div class="card_container">
      <CarListCard v-for="pet in data" :key="pet.id" :query="{ id: pet.id }" :data="pet" />
      <h1 v-if="!data.length">No pets here! 😿</h1>
    </div>
    <div>
      <CarListPager />
    </div>
  </div>
</template>

<script>
import CarListCard from '../components/CarList/CarListCard.vue'
import CarListFilter from '../components/CarList/CarListFilter.vue'
import CarListPager from '../components/CarList/CarListPager.vue'
import store from "../store";
import Pets from "../api/cars";

export default {
  beforeRouteEnter: async (route, oldRoute, next) => {
    const page = route.query.page || 1
    const query = { ...route.query, page }
    await Pets.getPets(query)
      .then((pets) => {
        store.commit("updatePets", { pets: pets.data, sort: route.query.sort, headers: pets.headers });
        next();
      })
      .catch(() => {
        next("/404");
      });
  },
  beforeRouteUpdate: async (route, oldRoute, next) => {
    if (route.query.sort && (route.query.sort !== oldRoute.query.sort)) next()
    else {
      const { links } = store.state
      const page = route.query.page || 1
      if (page <= links.last) {
        const query = { ...route.query, page }
        await Pets.getPets(query)
          .then((pets) => {
            store.commit("updatePets", { pets: pets.data, sort: route.query.sort, headers: pets.headers });
            next();
          })
          .catch(() => {
            next("/404");
          });
        }
      }
  },
  name: "CarList",
  components: {
    CarListCard,
    CarListFilter,
    CarListPager
  },
  computed: {
    data(){
      return this.$store.state.cars
    }
  }
}
</script>

<style lang="scss">
#carlist {
  margin: 1em;
  margin-top: 5.5em;
}

.car_list_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list_title {
  font-size: 2.3em;
}

.card_container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card_pager {
  display: flex;
  justify-content: space-around;
}
</style>
