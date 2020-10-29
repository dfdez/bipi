<template>
  <select v-model="filter" @change="filterChanged" class="car_list_filter_select">
    <option value="0">Relevancia</option>
    <option value="1">Price ⇣</option>
    <option value="2">Price ⇡</option>
    <option value="3">Name ⇣</option>
    <option value="4">Name ⇡</option>
  </select>
</template>

<script>
export default {
  name: "CarListFilter",
  data: () => ({
    filter: "0",
    cache: []
  }),
  methods: {
    filterChanged(){
      switch (this.filter){
        case "0":
          this.$store.commit("changeCars", this.cache[this.filter])
          break;
        case "1":
          this.applyFilter(this.priceDown)
          break;
        case "2":
          this.applyFilter(this.priceUp)
          break;
        case "3":
          this.applyFilter(this.nameDown)
          break;
        case "4":
          this.applyFilter(this.nameUp)
          break;
         }
    },
    applyFilter(filterFnc){
      let filtered = this.cache[this.filter] || this.filterData(filterFnc)
      this.$store.commit("changeCars", filtered);
    },
    filterData(filterFnc){
      let data = this.$store.state.cars
      let ordered = [ ...data ]
      ordered.sort(filterFnc)
      this.cache[this.filter] = ordered
      if (!this.cache[0]) this.cache[0] = data;
      return ordered
    },
    priceDown: (a,b) => (a.price > b.price) ? 1 : -1,
    priceUp: (a,b) => (a.price < b.price) ? 1 : -1,
    nameDown: (a,b) => (a.brand.localeCompare(b.brand)),
    nameUp: (a,b) => (b.brand.localeCompare(a.brand)),
  }
}
</script>

<style lang="scss">
.car_list_filter_select {
  font-size: 1em;
  padding: .5em;
  text-align-last: center;
}
</style>
