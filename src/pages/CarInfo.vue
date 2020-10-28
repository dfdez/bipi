<template>
  <div id="info">
    <div class="title"><span class="arrow">&#x3c;</span>Ir al catálogo</div>
    <div class="content">
      <Car style="width: 73%;" :car="data[0]" />
      <div class="car_info">
        <div class="car_description border_special">
          <span class="descriptionTitle">Descripción</span>
          <p class="descriptionContent">{{test}}</p>
        </div>
        <div @click="infoClicked" class="car_pricing border_special">
          <div :style="pricing" class="car_pricing_info">
            <div class="pricing_flex">
              <span>Precio</span>
              <b>450$</b>
            </div>
            <div class="pricing_flex" style="margin-top: .5em;">
              <span>Descuento</span>
              <b class="accent">-150$</b>
            </div>
            <div class="pricing_flex" style="margin-top: 1.5em; font-size: 1.3em;">
              <b>Precio Total</b>
              <b>200$</b>
            </div>
          </div>
          <div :style="seePricing" class="car_pricing_button">Ver info</div>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
import Car from '../components/car/Car.vue'
let data = require('../assets/mock.json')

export default {
  name: "CarInfo",
  components: { Car },
  data: () => ({
    listenerStatus: false,
    data: data,
    seePricing: { opacity: 1 },
    pricing: { height: 'auto' },
    test: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
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
@import "../scss/_variables.scss";

#info {
  margin: 1em;
  margin-top: 5.5em;
}

.title {
  font-size: 1em;
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 2.5em;
}

.car_container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.arrow {
  font-size: .6em;
  margin-right: .5em;
  color: $accent;
  font-weight: bold;
}

.descriptionTitle {
  font-style: italic;
  font-size: 1.5em;
}

.descriptionContent {
  white-space: break-spaces;
  font-size: .8em
}

.pricing_flex{
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1250px){
  .content{
    flex-direction: column;
  }
  .car_info {
    width: 100% !important;
    margin-top: 1em;
  }

  .car_pricing{
    margin-top: 1em;
  }
}

@media (min-width: 963px){
  .car_pricing_info {
    height: auto !important;
  }
}

@media (max-width: 962px){
  .border_special {
    border: none !important;
  }

  .car_description {
    background: none !important;
  }

  .car_pricing {
    background: #2b3647;
    color: white;
    /* padding: 2em 1em !important; */
    position: fixed;
    bottom: 0;
    width: 70%;
    text-align: center;
    border-radius: .5em .5em 0 0 !important;
    left: 12%;
  }

  .car_info {
    margin: 1em 0 3em;
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

.car_info {
  width: 25%;
}

.border_special {
  border-radius: 0.4em;
  border: solid 2px;
  border-color: #cccccc70;
}

.car_description {
  padding: 1em;
  background: #f1f5f9;
}
.car_pricing{
  padding: 1em;
  border-top: 0;
}

.car_pricing_button {
  display: none;
  transition: .3s;
}
</style>
