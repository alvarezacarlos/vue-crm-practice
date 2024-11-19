<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <v-btn
    icon
    variant="text"
    @click="toggleDark()"
    class="theme-toggle"
  >
    <v-icon :color="isDark.value ? 'secondary' : 'primary'">
      {{ isDark ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
    </v-icon>
  </v-btn>
</template>

<style lang="scss" scoped>
.theme-toggle {
  transition: transform 0.3s ease;
  
  &:hover {
    transform: rotate(15deg);
  }
}
</style>