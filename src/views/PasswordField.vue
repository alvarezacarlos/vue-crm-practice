<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const showPassword = ref(false)

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <v-text-field
    :model-value="modelValue"
    @input="updateValue"
    :label="label || 'Password'"
    :placeholder="placeholder || 'Enter your password'"
    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
    :type="showPassword ? 'text' : 'password'"
    @click:append-inner="showPassword = !showPassword"
    color="primary"
    variant="outlined"
    required
  ></v-text-field>
</template>