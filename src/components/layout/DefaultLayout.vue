<template>
  <AppBar @toggle-drawer="toggleSideMenu" />
  <NavigationDrawer v-model:drawer="drawer" />
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import AppBar from './AppBar.vue'
import NavigationDrawer from './NavigationDrawer.vue'

const drawer = ref(false)


const toggleSideMenu = () => {
  console.log(drawer)
  drawer.value = !drawer.value
  console.log(drawer)
}


</script>

<style>
.v-application {
  background-color: var(--v-background);
}
</style>
