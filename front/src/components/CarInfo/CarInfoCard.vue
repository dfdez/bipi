<template>
  <div class="info_card border">
    <div class="info_card_content">
      <div class="flex_row">
        <h1>{{ data.name }}</h1>
        <!-- <CarTitle :fontSize="'3em'" :title1="data.brand" :title2="data.model" /> -->
      </div>
      <!-- <div class="flex_row">
        <CarTags :fontSize="'.8em'" :background="tags.color" text="tags.color" />
        <CarTags :fontSize="'.8em'" text="tags.year" />
      </div> -->
      <div class="info_card_picture_container flex_row">
        <img class="info_card_picture" :src="data.photo_url || require('../../assets/fever.png')" />
      </div>
    </div>
  </div>
</template>

<script>
// import CarTitle from "../CarTitle.vue";
// import CarTags from "../CarTags.vue";

export default {
  name: "CarCard",
  props: {
    data: Object,
  },
  components: {
    // CarTitle,
    // CarTags,
  },
  computed: {
    tags(){
      return this.data.tags || {};
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/_variables.scss";

.info_card {
    width: fit-content;
}

.info_card_picture_container {
  align-items: baseline;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
}

.info_card_content {
  margin: 0.6em;
  display: flex;
  flex-direction: column;
}

@media (max-width: 962px) {
  //Class in CarTitle
  .car_title{
    font-size: 1.5em !important;
  }
}

@media (max-width: 1250px) {
  .info_card{
    width: 100% !important;
  }

  .info_card_picture {
    width: 100%;
  }
}
</style>
