<template>
  <div class="card_pager">
    <span class="card_pager_back" @click="goToFirstPage">{{ isFirstPage ? '🐶' : '⏪' }}</span>
    <span class="card_pager_back" @click="goToPrevPage"> {{ isFirstPage ? '🐶' : '👈' }} </span>
    <div>
      <span> {{ page }} </span>
    </div>
    <span class="card_pager_next" @click="goToNextPage"> {{ isLastPage ? '🐱' : '👉' }} </span>
    <span class="card_pager_next" @click="goToLastPage">{{ isLastPage ? '🐱' : '⏩' }}</span>
  </div>
</template>

<script>
export default {
  name: "CarListPager",
  computed: {
    page () {
      return this.$route.query.page || 1
    },
    firstPage () {
      return this.$store.state.links.first
    },
    lastPage () {
      return this.$store.state.links.last
    },
    nextPage () {
      return this.$store.state.links.next
    },
    prevPage () {
      return this.$store.state.links.prev
    },
    isFirstPage () {
      return +this.firstPage === +this.page
    },
    isLastPage () {
      return +this.lastPage === +this.page
    }
  },
  methods: {
    async updatePetsPage (page) {
      const newQuery = { ...this.$route.query, page }
      this.$router.push({ query: newQuery})
     },
    async goToFirstPage () {
      if (this.firstPage) await this.updatePetsPage(this.firstPage)
      window.scrollTo(0,0)
    },
    async goToPrevPage () {
      if (this.prevPage) await this.updatePetsPage(this.prevPage)
      window.scrollTo(0,0)
    },
    async goToNextPage () {
      if (this.nextPage) await this.updatePetsPage(this.nextPage)
      window.scrollTo(0,0)
    },
    async goToLastPage () {
      if (this.lastPage) await this.updatePetsPage(this.lastPage)
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
