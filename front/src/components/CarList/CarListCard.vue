<template>
  <div class="list_card border">
    <router-link :to="{ name: 'Info', query }">
      <div class="list_card_content">
        <div class="flex_row">
          <h3 class="list_card_title">{{ data.name }}</h3>
        </div>
        <div class="list_card_picture_container flex_row">
          <img class="list_card_picture" :src="data.photo_url || require('../../assets/fever.png')">
        </div>
        <div class="list_card_tags flex_row">
            <CarTags :text="data.kind" :background="data.kind === 'isDog' ? '#06232c' : '#364550'" />
            <CarTags :text="`Weight: ${data.weight} gr`" background="#635e48" />
            <CarTags :text="`Height: ${data.height} cm`" background="#c2923a" />
            <CarTags :text="`Length: ${data.length} cm`" background="##56574a" />
            <CarTags v-if="!isDog" :text="`Lives: ${data.number_of_lives}`" background="grey" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import CarTags from "../CarTags.vue"

export default {
    name: "CarListCard",
    props: {
      data: Object,
      query: Object
    },
  components: {
    CarTags
  },
  computed: {
    isDog () {
      return this. data.kind === 'dog'
    }
  }
}
</script>

<style lang="scss">
@import "../../scss/_variables.scss";

.list_card {
  width: fit-content;
  margin: .4em;
}

.list_card_content {
  margin: 0.6em;
  display: flex;
  flex-direction: column;
}

.list_card_title {
  margin-top: 0px;
  margin-bottom: .5rem;
}

.list_card_picture_container {
  align-items: baseline;
  justify-content: center;
}

.list_card_tags {
  justify-content: center;
  margin-top: 1rem;
}

.list_card_picture {
  // width: 25em;
  min-width: 15em;
  max-height: 13em;
  object-fit: contain;
}

.list_card_discount {
  text-decoration: line-through $accent;
  color: $accent;
  margin-right: .4em;
}

.list_card_price {
  font-size: 1.2em;
}

@media (max-width: 962px){
  .list_card {
    width: 95%;
  }

  .list_card_picture {
    width: 100%;
    max-height: 20em;
  }
}
</style>
