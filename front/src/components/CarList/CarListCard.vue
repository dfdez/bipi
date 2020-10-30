<template>
  <div class="list_card border">
    <router-link :to="{ name: 'Info', query }">
      <div class="list_card_content">
        <div class="flex_row">
          <CarTitle :title1="data.brand" :title2="data.model" />
        </div>
        <div class="flex_row">
          <CarTags :background="data.tags.color" :text="data.tags.color" />
          <CarTags :text="data.tags.year" />
        </div>
        <div class="list_card_picture_container flex_row">
          <img class="list_card_picture" :src="data.image || require('../../assets/icon.png')">
          <span style="font-size: 10px">desde</span>
        </div>
        <div class="flex-row" style="text-align: right">
          <span v-if="data.isOnOffer" class="list_card_discount">{{Math.round(data.price)}}€</span>
          <b class="list_card_price">{{data.isOnOffer ? Math.round(data.price - data.offerDiscount) : Math.round(data.price)}}€</b>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import CarTitle from "../CarTitle.vue"
import CarTags from "../CarTags.vue"

export default {
    name: "CarListCard",
    props: {
      data: Object,
      query: Object
    },
  components: {
    CarTitle,
    CarTags
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

.list_card_picture_container {
  align-items: baseline;
  justify-content: flex-end;
}

.list_card_picture {
  width: 25em;
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
