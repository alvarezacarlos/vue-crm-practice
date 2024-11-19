<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import ToggleTheme from './ToggleTheme.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const email = ref('')
const password = ref('')
const code = ref('') // Referencia para el código
const showPassword = ref(false)

// Función para reenviar el código
const resendCode = () => {
  console.log('Code resent to:', email.value)
}

const handleSubmit = () => {
  router.push('/dashboard')
}
</script>

<template>
  <div class="auth-wrapper" :class="{ 'dark': isDark }">
    <v-card class="auth-card" :theme="isDark ? 'dark' : 'light'" elevation="8">
      <div class="d-flex justify-end pa-4">
        <ToggleTheme />
      </div>

      <v-card-text>
        <h1 class="text-h4 font-weight-bold mb-4 text-center">QBrige</h1>
        <p class="text-subtitle-1 mb-6">Please sign in to your account</p>

        <v-form @submit.prevent="handleSubmit">
          <v-text-field v-model="email" label="Email" type="email" :color="isDark ? 'secondary' : 'primary'"
            variant="outlined" required class="mb-4"></v-text-field>

          <v-text-field v-model="code" label="Code" type="text" :color="isDark ? 'secondary' : 'primary'"
            variant="outlined" required class="mb-2"></v-text-field>

          <v-text-field v-model="password" label="Password" :type="showPassword ? 'text' : 'password'"
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="showPassword = !showPassword" :color="isDark ? 'secondary' : 'primary'"
            variant="outlined" required></v-text-field>

          <p class="text-right mb-6">
            <router-link :to="{ name: 'recover' }" class="font-weight-medium">
              FORGOT PASSWORD
            </router-link>
          </p>

          <v-btn type="submit" :color="isDark ? 'secondary' : 'primary'" block size="large" class="mb-4">
            Next
            <!-- CONFIRM -->
          </v-btn>

          <!-- <v-btn
            text
            :color="isDark ? 'secondary' : 'white'"
            block
            class="mb-4"
            @click="resendCode"
          >
            Resend Code
          </v-btn>  -->

          <v-btn text block :color="isDark ? 'secondary' : ''" :class="isDark ? 'resend-code-btn' : 'resend-code-btn background-white'" @click="resendCode">
            RESEND CODE
          </v-btn>


          <!-- <p class="text-center">
            Don't have an account?
            <router-link :to="{ name: 'Register' }" class="font-weight-medium">
              Register
            </router-link>
          </p> -->
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.background-white {
  background-color: white;
}

.resend-code-btn {
  /* Estilo predeterminado */
  /* Fondo blanco */
  color: var(--v-primary-base);
  /* Color del texto basado en Vuetify */
  font-weight: bold;
  /* Texto en negrita */
  border-radius: 4px;
  /* Bordes ligeramente redondeados */
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  /* Sombra ligera */

  /* Transición para suavizar el cambio en hover */
  transition: background-color 0.3s ease, color 0.3s ease;
}

// .resend-code-btn:hover {
//   /* Efecto hover */
//   background-color: rgba(0, 128, 0, 0.1);
//   /* Verde opaco */
//   color: var(--v-primary-darken4);
//   /* Color más oscuro al hacer hover */
// }

.auth-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  transition: background-color 0.3s ease;

  &.dark {
    background-color: var(--dark-bg);

    :deep(.v-card) {
      background-color: #0a2830;
      border: 1px solid rgba(255, 195, 135, 0.1);

      .v-card-text {
        color: var(--white);
      }

      .v-field {
        background-color: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 195, 135, 0.2);

        &:hover,
        &:focus-within {
          border-color: var(--secondary);
        }

        .v-field__append-inner i {
          color: var(--secondary);
        }
      }
    }

    h1 {
      color: var(--secondary);
    }

    p {
      color: var(--gray);
    }

    a {
      color: var(--secondary);

      &:hover {
        color: var(--white);
      }
    }
  }
}

.auth-card {
  max-width: 400px;
  width: 100%;
  margin: 2rem;

  :deep(.v-card-text) {
    padding: 24px 32px;
  }

  h1 {
    color: var(--primary);
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary);
    }
  }
}
</style>
