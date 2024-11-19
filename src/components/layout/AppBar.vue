<template>
  <v-app-bar :elevation="2" :color="theme?.global?.current?.value?.dark ? '#02191E' : 'white'" class="app-bar">
    <v-app-bar-nav-icon @click="toggleDrawer" class="nav-icon"></v-app-bar-nav-icon>

    
    <v-toolbar-title :class="{'text-primary': !theme?.global?.current?.value?.dark, ' text-secondary': theme?.global?.current?.value?.dark}" class="font-weight-bold">CRM</v-toolbar-title>


    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <v-btn icon @click="toggleTheme" class="theme-toggle mx-2">
        <v-icon>{{ theme?.global?.current?.value?.dark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>

      <v-menu transition="slide-y-transition" :close-on-content-click="true">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="user-btn" variant="text">
            <v-avatar size="32" class="user-avatar">
              <v-img src="/avatar.png" alt="John Doe" class="user-img"></v-img>
            </v-avatar>
            <span class="user-name d-none d-sm-block">John Doe</span>
            <v-icon size="small" class="menu-icon">mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list class="menu-list" elevation="2">
          <v-list-item v-for="(item, i) in profileMenu" :key="i" :value="item" class="menu-item"
            @click="handleMenuClick(item)">
            <template v-slot:prepend>
              <v-icon size="small" class="menu-item-icon">{{ getMenuIcon(item.title) }}</v-icon>
            </template>
            <v-list-item-title class="menu-item-title">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';

// Obtén el tema global desde Vuetify
const theme = useTheme();

// Emisor de eventos personalizados
const emit = defineEmits(['toggle-drawer']);

// Menú del perfil
const profileMenu = [
  { title: 'Profile' },
  { title: 'Settings' },
  { title: 'Logout' },
];

// Función para obtener íconos del menú
const getMenuIcon = (title: string): string => {
  const icons = {
    Profile: 'mdi-account',
    Settings: 'mdi-cog',
    Logout: 'mdi-logout',
  };
  return icons[title as keyof typeof icons] || 'mdi-circle-small';
};

// Función para cambiar el tema
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

// Función para abrir/cerrar el menú lateral
const toggleDrawer = () => {
  emit('toggle-drawer');
};

// Función para manejar las acciones del menú
const handleMenuClick = (item: { title: string }) => {
  console.log(`Clicked on: ${item.title}`);
};
</script>

<style scoped>
.app-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.logo-container {
  display: flex;
  align-items: center;
  height: 100%;
}

.logo {
  height: 40px;
  /* Ajusta según el tamaño deseado */
  max-height: 100%;
  /* Garantiza que no se desborde */
  object-fit: contain;
  /* Mantiene la proporción de la imagen */
}

.nav-icon {
  transition: opacity 0.2s ease;
}

.nav-icon:hover {
  opacity: 0.8;
}

.theme-toggle {
  transition: transform 0.2s ease;
}

.theme-toggle:hover {
  transform: rotate(15deg);
}

.user-btn {
  display: flex;
  align-items: center;
}

.user-avatar {
  margin-right: 8px;
}

.menu-icon {
  margin-left: 8px;
}

.menu-list {
  min-width: 200px;
}

.menu-item {
  cursor: pointer;
}

.menu-item-icon {
  color: var(--v-theme-primary);
}
</style>