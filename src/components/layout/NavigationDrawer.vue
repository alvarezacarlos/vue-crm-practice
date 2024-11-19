<template>
  <v-navigation-drawer
    v-model="isOpen"
    :color="theme.global.current.value.dark ? '#02191E' : 'white'"
    :temporary="$vuetify.display.mobile"
    :permanent="!$vuetify.display.mobile"
  >
    <v-list density="compact" nav >
      <v-list-item v-for="(item, i) in navigationItems" :key="i" :value="item" :to="item.to" :prepend-icon="item.icon"
        :title="item.title"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTheme, useDisplay } from 'vuetify'

const theme = useTheme()

// Definir la propiedad drawer (para recibir el valor del padre)
const props = defineProps({
  drawer: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['toggle-drawer'])

const isOpen = ref(props.drawer)

// Watch for changes in the prop
watch(() => props.drawer, (newValue) => {
  isOpen.value = newValue
})

// Watch for changes in the local state
watch(isOpen, (newValue) => {
  emit('update:drawer', newValue)
})

const navigationItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
  { title: 'Clients', icon: 'mdi-account-group', to: '/clients' },
  { title: 'Service History', icon: 'mdi-history', to: '/service-history' },
  { title: 'Feedback', icon: 'mdi-message-text', to: '/feedback' },
  { title: 'Audits', icon: 'mdi-clipboard-check', to: '/audits' },
  { title: 'Tracking', icon: 'mdi-target', to: '/tracking' },
  { title: 'Reports', icon: 'mdi-chart-bar', to: '/reports' },
  { title: 'Settings', icon: 'mdi-cog', to: '/settings' },
]
</script>

