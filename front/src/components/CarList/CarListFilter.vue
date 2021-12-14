<template>
  <div class="flex_row" style="align-items: center;">
    <select :value="$route.query.sort" @change="sortChanged" class="car_list_sort">
      <option value="">Sort</option>
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
  methods: {
    sortChanged(event){
      const sortValue = event.target.value
      if (this.$route.query.sort !== sortValue) this.$router.push({ query: { ...this.$route.query, sort: sortValue}})
      this.$store.commit("updatePets", { sort: sortValue });
    }
  }
}
</script>

<style lang="scss">
.car_list_sort {
  height: 100%;
  margin-left: 1rem;
  font-size: 1em;
  padding: .5em;
  text-align-last: center;
}
</style>
