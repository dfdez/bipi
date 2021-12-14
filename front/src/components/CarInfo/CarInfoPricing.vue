<template>
  <div @click="infoClicked" class="info_pricing border_special">
    <h3 class="">Detailed Information</h3>
    <div :style="pricing" class="info_pricing_content">
      <div class="info_pricing_flex">
        <span>Kind</span>
        <span>{{isDog ? '🐶' : '🐱'}}</span>
      </div>
      <div class="info_pricing_flex">
        <span>Weight</span>
          <span>{{data.weight}} gr 🏋️</span>
      </div>
      <div class="info_pricing_flex">
        <span>Height</span>
        <span>{{data.height}} cm 📏</span>
      </div>
      <div class="info_pricing_flex">
        <span>Length</span>
        <span>{{data.length}} cm 📏</span>
      </div>
      <div v-if="!isDog" class="info_pricing_flex">
        <span>Lives</span>
        <span>{{data.number_of_lives}} lives 😼</span>
      </div>
      <div class="info_pricing_flex">
        <span>Health</span>
        <span>{{petHealth}} ❤‍🩹</span>
      </div>
      <h4 v-if="isPetOfTheDay">Today {{data.name}} is the pet of the day! 🥳</h4>
    </div>
  </div>
</template>

<script>
export default{
  name: "CarInfoPricing",
  props: {
    data: Object
  },
  computed: {
    isDog(){
      return this.data.kind === 'dog'
    },
    isPetOfTheDay () {
      return this.data.id === new Date().getDate()
    },
    petHealth () {
      const { weight, height, length, kind, lives } = this.data
      const health = Math.round(weight / (height * length))
      if (kind === 'cat' && lives === 1) return 'Unhealthy'
      if (health < 2 || health > 5) return 'Unhealthy'
      if (health > 3 && health <= 5) return 'Healthy'
      if (health >= 2 && health <= 3) return 'Very healthy'
      return 'Unhealthy'
    }
  },
  data: () => ({
    listenerStatus: false,
    seePricing: { opacity: 1 },
    pricing: { height: 'auto' },
  }),
  methods: {
    bodyClick(){
      if(this.listenerStatus){
        this.seePricing.opacity = 1;
        this.pricing.height = 0;
        document.body.removeEventListener("click", this.bodyClick);
        this.listenerStatus = false
      }
      else if (this.pricing.height != 'auto'){
        this.listenerStatus = true
      }
    },
    infoClicked(){
      if (document.body.clientWidth < 963){
        this.seePricing.opacity = 0;
        this.pricing.height = this.isPetOfTheDay ? '18rem !important' : '14rem !important'
        document.body.addEventListener("click", this.bodyClick);
      }
    }
  }
}
</script>

<style lang="scss">
.info_pricing{
  padding: 1em;
  // border-top: 0;
  margin-top: 1rem;
}

.info_pricing_flex{
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.info_pricing_discount {
  margin-top: .5em;
}

.info_pricing_total {
  margin-top: 1.5em;
  font-size: 1.3em;
}

.info_pricing_button {
  display: none;
  transition: .3s;
}

@media (max-width: 962px){
  .info_pricing {
    background: #2b3647;
    color: white;
    position: fixed;
    bottom: 0;
    width: 70%;
    text-align: center;
    border-radius: .5em .5em 0 0 !important;
    left: 12%;
  }

  .info_pricing_content {
    overflow: hidden;
    transition: .3s;
    height: 0 !important;
  }

  .info_pricing_button {
    display: block !important;
  }
}

@media (min-width: 963px){
  .info_pricing_content {
    height: auto !important;
  }
}

@media (max-width: 1250px){
  .info_pricing{
    margin-top: 1em;
  }
}
</style>
