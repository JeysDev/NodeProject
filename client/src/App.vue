<template>
  <v-app :class="BackGround ? 'bg-appvue' : 'bg-white'" style="width: 100%">
    <v-app-bar density="compact" prominent color="white">
      <v-app-bar-nav-icon @click.stop="navDrawer = !navDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title><strong><span>NAV TITLE</span></strong></v-toolbar-title>

      <v-switch v-model="BackGround" color="yellow" append-icon="mdi-weather-night">
      </v-switch>
    </v-app-bar>
    <v-navigation-drawer color="white" temporary v-model="navDrawer">
      <v-list nav>
        <v-list-item color="white" link :to="item.path" :prepend-icon="item.meta.icon"
          v-for="(item, index) in routes.options.routes" :key="index">
          <v-list-item-title style="font-size: 15px">
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main> <v-container fluid><router-view></router-view></v-container></v-main></v-app></template>

<script>
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      navDrawer: true,
      routes: useRouter(),
      BackGround: false,
    };
  },
};
</script>

<style scoped>
.bg-appvue {
  background-color: black !important;
}

.bg-white {
  background-color: white !important;
}
</style>