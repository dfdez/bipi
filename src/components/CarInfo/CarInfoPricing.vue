<template>
  <div @click="infoClicked" class="car_pricing border_special">
    <div :style="pricing" class="car_pricing_info">
      <div class="pricing_flex">
        <span>Precio</span>
        <b>{{Math.round(data.price)}}€</b>
      </div>
      <div v-if="data.isOnOffer" class="pricing_flex" style="margin-top: .5em;">
        <span>Descuento</span>
        <b class="accent">-{{Math.round(data.offerDiscount)}}€</b>
      </div>
      <div class="pricing_flex" style="margin-top: 1.5em; font-size: 1.3em;">
        <b>Precio Total</b>
        <b>{{data.isOnOffer ? Math.round(data.price - data.offerDiscount) : Math.round(data.price)}}€</b>
      </div>
    </div>
    <div :style="seePricing" class="car_pricing_button">Ver info</div>
  </div>
</template>

<script>
export default{
  name: "CarInfoPricing",
  props: {
    data: Object
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
        this.pricing.height = '7em !important'
        document.body.addEventListener("click", this.bodyClick);
      }
    }
  }
}
</script>

<style lang="scss">
.car_pricing{
  padding: 1em;
  border-top: 0;
}

.pricing_flex{
  display: flex;
  justify-content: space-between;
}

.car_pricing_button {
  display: none;
  transition: .3s;
}

@media (min-width: 963px){
  .car_pricing_info {
    height: auto !important;
  }
}

@media (max-width: 962px){
  .car_pricing {
    background: #2b3647;
    color: white;
    position: fixed;
    bottom: 0;
    width: 70%;
    text-align: center;
    border-radius: .5em .5em 0 0 !important;
    left: 12%;
  }

  .car_pricing_info {
    overflow: hidden;
    transition: .3s;
    height: 0 !important;
  }

  .car_pricing_button {
    display: block !important;
  }
}

@media (max-width: 1250px){
  .car_pricing{
    margin-top: 1em;
  }
}
</style>
