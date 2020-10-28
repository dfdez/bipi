<template>
  <div @click="infoClicked" class="info_pricing border_special">
    <div :style="pricing" class="info_pricing_content">
      <div class="info_pricing_flex">
        <span>Precio</span>
        <b>{{Math.round(data.price)}}€</b>
      </div>
      <div v-if="data.isOnOffer" class="info_pricing_flex" style="margin-top: .5em;">
        <span>Descuento</span>
        <b class="accent">-{{Math.round(data.offerDiscount)}}€</b>
      </div>
      <div class="info_pricing_flex" style="margin-top: 1.5em; font-size: 1.3em;">
        <b>Precio Total</b>
        <b>{{data.isOnOffer ? Math.round(data.price - data.offerDiscount) : Math.round(data.price)}}€</b>
      </div>
    </div>
    <div :style="seePricing" class="info_pricing_button">Ver info</div>
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
.info_pricing{
  padding: 1em;
  border-top: 0;
}

.info_pricing_flex{
  display: flex;
  justify-content: space-between;
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
