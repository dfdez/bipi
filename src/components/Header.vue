<template>
  <div id="header">
    <router-link to="/">
      <div class="logo">
        <img class="logo_img" src="../assets/bipi.png" />
      </div>
    </router-link>
    <div class="menu_items" v-bind:style=menuStyle >
      <div v-for="item in menu_items" :key="item.name" class="menu_item">
        <router-link :to="item.to">{{item.name}}</router-link>
      </div>
    </div>
    <div @click="menuClick" class="menu_button">
      <img v-if="menu_closed" class="menu_button_img" src="../assets/menu.svg" />
      <img v-else class="menu_button_img" src="../assets/close.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    menu_closed: true,
    menuStyle: {}
  }),
  methods: {
    menuClick(){
      this.menu_closed = !this.menu_closed;
      if (!this.menu_closed){
        this.menuStyle = { height: `${4 * this.menu_items.length}em` }
      }
      else {
        this.menuStyle = {}
      }
    }
  },
  computed: {
    menu_items: function()  {
      return ([
      {
        name: 'CATÁLOGO',
        to: { path: '/' }
      },
      {
        name: 'ÚLTIMO COCHE VISITADO',
        to: {
          path: '/info',
          query: { id: this.$store.state.last_id }
        }
      }]);
    }
  }
};
</script>

<style lang="scss">
#header {
  display: flex;
  width: 100%;
  box-shadow: 0 0 1em #e3e3e3;
  align-items: center;
  position: fixed;
  top: 0;
  background:white;
}

a {
  color: black;
  text-decoration: none;
}

.logo {
  display: flex;
  flex-direction: column;
  cursor: default;
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

@media (max-width: 962px) {
  #header {
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

@media (min-width: 963px) {
  .menu_items {
    height: auto !important;
  }
}
</style>
