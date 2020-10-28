<template>
  <div class="car_description border_special">
    <span class="descriptionTitle">Descripción</span>
    <p class="descriptionContent">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "CarInfoDescription",
  props: {
    text: String
  }
}
</script>

<style lang="scss">
.car_description {
  padding: 1em;
  background: #f1f5f9;
}

.descriptionTitle {
  font-style: italic;
  font-size: 1.5em;
}

.descriptionContent {
  white-space: break-spaces;
  font-size: .8em
}

@media (max-width: 962px){
  .car_description {
    background: none !important;
  }
}
</style>
