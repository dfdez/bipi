<template>
  <div id="header">
    <div class="header">
      <div class="logo">
        <img class="logo_img" src="../assets/bipi.png" />
      </div>
      <div class="menu_items" v-bind:style=menuStyle >
        <div v-for="item in menu_items" :key="item" class="menu_item">
          <span>{{item}}</span>
        </div>
       </div>
      <div @click="menuClick" class="menu_button">
        <img v-if="menu_closed" class="menu_button_img" src="../assets/menu.svg" />
        <img v-else class="menu_button_img" src="../assets/close.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    menu_items: [
      'CATÁLOGO',
      'ÚLTIMO COCHE VISITADO'
    ],
    menu_closed: true,
    menuStyle: {}
  }),
  methods: {
    menuClick(){
      this.menu_closed = !this.menu_closed;
      if (!this.menu_closed){
        // let menu_height = document.getElementsByClassName("menu_item")[0].offsetHeight
        // this.menuStyle = { height: `${menu_height * this.menu_items.length}em` }
        this.menuStyle = { height: `${4 * this.menu_items.length}em` }
      }
      else {
        this.menuStyle = {}
      }
    }
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  width: 100%;
  box-shadow: 0 0 1em #e3e3e3;
  align-items: center;
  position: fixed;
  top: 0;
  background:white;
}

.logo {
  display: flex;
  flex-direction: column;
}

.logo_img {
  width: 3em;
  margin: 1em;
}

.menu_button {
  margin: 1em;
  margin-left: auto;
  display: none;
}

.menu_button_img {
  width: 2em;
}

.menu_items {
  display: flex;
  width: 100%;
  align-items: center;
  background: white;
}

.menu_item {
  margin-top: .1em;
  align-items: center;
  padding: 1em;
  text-align: center;
}

@media (min-width: 963px) {
  .menu_items {
    height: auto !important;
  }
}

@media (max-width: 962px) {
  .header {
    align-items: flex-start;
  }
  .menu_button {
    display: flex;
    flex-direction: column;
  }

  .menu_items {
    flex-direction: column;
    transition: .5s;
    margin-top: 4em;
    overflow: hidden;
    height: 0;
  }

  .menu_item {
    width: 100%;
    border-top: 1px solid #ccc;
  }
}

</style>
