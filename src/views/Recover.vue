<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import ToggleTheme from './ToggleTheme.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleSubmit = () => {
  console.log('Register attempt:', {
    name: name.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  })
}
</script>

<template>
  <div class="auth-wrapper" :class="{ 'dark': isDark }">
    <v-card class="auth-card" :theme="isDark ? 'dark' : 'light'" elevation="8">
      <div class="d-flex justify-end pa-4">
        <ToggleTheme />
      </div>

      <v-card-text>
        <h1 class="text-h4 font-weight-bold mb-2 text-center">QBride</h1>
        <p class="text-subtitle-1 mb-6">Let's reset your password</p>

        <v-form @submit.prevent="handleSubmit">       

          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            :color="isDark ? 'secondary' : 'primary'"
            variant="outlined"
            required
            class="mb-4"
          ></v-text-field>

          <v-btn
            type="submit"
            :color="isDark ? 'secondary' : 'primary'"
            block
            size="large"
            class="mb-4"
          >
            Next
          </v-btn>

          <p class="text-center">
            Already have an account?
            <router-link :to="{ name: 'Login' }" class="font-weight-medium">
              Sign In
            </router-link>
          </p>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
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

        &:hover, &:focus-within {
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