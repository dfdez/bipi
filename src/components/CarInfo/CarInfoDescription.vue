<template>
  <div class="info_description border_special">
    <span class="info_description_title">Descripción</span>
    <p class="info_description_content">{{text}}</p>
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
.info_description {
  padding: 1em;
  background: #f1f5f9;
}

.info_description_title {
  font-style: italic;
  font-size: 1.5em;
}

.info_description_content {
  white-space: break-spaces;
  font-size: .8em
}

@media (max-width: 962px){
  .info_description {
    background: none !important;
  }
}
</style>
