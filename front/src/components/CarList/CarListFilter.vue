<template>
  <div>
    <select v-model="filter.kind" class="car_list_filter" @change="filterByPetKind">
      <option value="" selected >All</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
    </select>
    <input v-model="filter.name" class="car_list_filter" type="text" placeholder="Name" @input="!filter.name && filterByPetName()" @change="filterByPetName">
    <input v-model="filter.weight" class="car_list_filter" type="number" placeholder="Weight" @input="!filter.weight && filterByPetWeight()" @change="filterByPetWeight">
    <input v-model="filter.length" class="car_list_filter" type="number" placeholder="Length" @input="!filter.length && filterByPetLength()" @change="filterByPetLength">
    <input v-model="filter.height" class="car_list_filter" type="number" placeholder="Height" @input="!filter.height && filterByPetHeight()" @change="filterByPetHeight">

    <select v-model="sort" @change="filterChanged" class="car_list_filter">
      <option value="0" selected>Sort</option>
      <option value="weight">Weight ⇣</option>
      <option value="reverseWeight">Weight ⇡</option>
      <option value="_length">Length ⇣</option>
      <option value="reverseLength">Length ⇡</option>
      <option value="height">Height ⇣</option>
      <option value="reverseHeight">Height ⇡</option>
      <option value="name">Name ⇣</option>
      <option value="reverseName">Name ⇡</option>
      <option value="kind">Kind ⇣</option>
      <option value="reverseKind">Kind ⇡</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CarListFilter",
  data: () => ({
    filter: {},
    sort: '0',
    cache: []
  }),
  created () {
    this.filter = { ...this.$route.query}
    if (!this.filter.kind) this.filter.kind = ''
  },
  methods: {
     filterByPetKind () {
      const kind = this.filter.kind
      const newQuery = { ...this.$route.query }
      if (!kind) delete newQuery.kind
      else newQuery.kind = kind
      this.$router.replace({ query: newQuery }).catch(error => error)
    },
     filterByPetName () {
      const name = this.filter.name
      const newQuery = { ...this.$route.query }
      if (!name) delete newQuery.name
      else newQuery.name = name
      this.$router.replace({ query: newQuery }).catch(error => error)
    },
    filterByPetWeight () {
      const weight = this.filter.weight
      const newQuery = { ...this.$route.query }
      if (!weight) delete newQuery.weight
      else newQuery.weight = weight
      this.$router.replace({ query: newQuery }).catch(error => error)
    },
      filterByPetLength () {
      const length = this.filter.length
      const newQuery = { ...this.$route.query }
      if (!length) delete newQuery.length
      else newQuery.length = length
      this.$router.replace({ query: newQuery }).catch(error => error)
    },
      filterByPetHeight () {
      const height = this.filter.height
      const newQuery = { ...this.$route.query }
      if (!height) delete newQuery.height
      else newQuery.height = height
      this.$router.replace({ query: newQuery }).catch(error => error)
    },
      filterChanged(){
        switch (this.sort){
          case "0":
            this.$store.commit("fetchPets", this.cache[this.sort])
            break;
          case "weight":
            this.applySort(this.sortNumber('weight'))
            break;
          case "reverseWeight":
            this.applySort(this.reverseSortNumber('weight'))
            break;
          case "_length":
            this.applySort(this.sortNumber('length'))
            break;
          case "reverseLength":
            this.applySort(this.reverseSortNumber('length'))
            break;
          case "height":
            this.applySort(this.sortNumber('height'))
            break;
          case "reverseHeight":
            this.applySort(this.reverseSortNumber('height'))
            break;
          case "name":
            this.applySort(this.sortString('name'))
            break;
          case "reverseName":
            this.applySort(this.reverseSortString('name'))
            break;
          case "kind":
            this.applySort(this.sortString('kind'))
            break;
          case "reverseKind":
            this.applySort(this.reverseSortString('kind'))
            break;
         }
    },
    applySort(sortFnc){
      let sorted = this.cache[this.sort] || this.sortData(sortFnc)
      console.log(sorted)
      this.$store.commit("fetchPets", sorted);
    },
    sortData(sortFnc){
      let data = this.$store.state.cars
      let ordered = [ ...data ]
      ordered.sort(sortFnc)
      this.cache[this.sort] = ordered
      if (!this.cache[0]) this.cache[0] = data;
      return ordered
    },
    sortNumber: (property) => (a,b) => (a[property] > b[property]) ? 1 : -1,
    reverseSortNumber: (property) => (a,b) => (a[property] < b[property]) ? 1 : -1,
    sortString: (property) => (a,b) => (a[property].localeCompare(b[property])),
    reverseSortString: (property) => (a,b) => (b[property].localeCompare(a[property]))
  }
}
</script>

<style lang="scss">
.car_list_filter {
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 1em;
  padding: .5em;
  text-align-last: center;
}
</style>
