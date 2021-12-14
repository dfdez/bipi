<template>
  <div class="card_pager">
    <span class="card_pager_back" @click="goToPrevPage"> {{ page > 1 ? '👈' : '🐶' }} </span>
    <div>
      <span> {{ page }} </span>
    </div>
    <span class="card_pager_next" @click="goToNextPage"> 👉 </span>
  </div>
</template>

<script>
import Pets from '../../api/cars.js'
import store from "../../store";

export default {
  name: "CarListPager",
  data: () =>  ({
    page: 1,
    endOfPets: false
  }),
  created () {
    this.page = this.$route.query.page || 1
  },
  methods: {
   async updatePetsPage () {
    const { query } = this.$route
    const newQuery = { ...query, page: this.page }
    await Pets.getPets(newQuery).then((pets) => {
      console.log(pets)
      if (pets.data.length) {
        store.commit("fetchPets", pets.data);
        this.$router.replace({ query: newQuery})
      }
      else this.page--
    })
   },
  async goToPrevPage () {
    if (this.page === 1) return
    this.page--
    await this.updatePetsPage()
    window.scrollTo(0,0)
  },
  async goToNextPage () {
    this.page++
    await this.updatePetsPage()
    window.scrollTo(0,0)
  },
  }
};
</script>

<style lang="scss">
.card_pager {
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
}

.card_pager_back {
  cursor: pointer
}

.card_pager_next {
  cursor: pointer;
}
</style>
