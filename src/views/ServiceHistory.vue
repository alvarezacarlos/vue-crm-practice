<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-6">Service History</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <v-card>
          <v-card-text>
            <h3 class="text-h6 mb-4">Service Metrics</h3>
            <v-list>
              <v-list-item v-for="metric in metrics" :key="metric.title">
                <template v-slot:prepend>
                  <v-icon :color="metric.color">{{ metric.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ metric.title }}</v-list-item-title>
                <template v-slot:append>
                  <span class="text-h6">{{ metric.value }}</span>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="9">
        <v-card>
          <v-card-text>
            <v-timeline density="compact">
              <v-timeline-item
                v-for="item in serviceHistory"
                :key="item.id"
                :dot-color="item.color"
                size="small"
              >
                <template v-slot:opposite>
                  <div class="text-caption">{{ item.date }}</div>
                </template>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-h6">{{ item.client }}</div>
                    <div class="text-subtitle-2">{{ item.service }}</div>
                    <div class="text-body-2">{{ item.description }}</div>
                  </div>
                  <v-chip :color="item.color" size="small">{{ item.status }}</v-chip>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const metrics = ref([
  { title: 'Active Contracts', value: '24', icon: 'mdi-file-document', color: 'primary' },
  { title: 'Bots in Production', value: '45', icon: 'mdi-robot', color: 'success' },
  { title: 'Pending Deployments', value: '8', icon: 'mdi-clock-outline', color: 'warning' },
  { title: 'Support Tickets', value: '12', icon: 'mdi-ticket', color: 'error' }
])

const serviceHistory = ref([
  {
    id: 1,
    date: '2024-02-15',
    client: 'Tech Solutions Inc.',
    service: 'Bot Development',
    description: 'Completed initial bot development phase',
    status: 'Completed',
    color: 'success'
  },
  {
    id: 2,
    date: '2024-02-14',
    client: 'Digital Innovations',
    service: 'IT Connection Setup',
    description: 'Establishing secure connection protocols',
    status: 'In Progress',
    color: 'info'
  },
  {
    id: 3,
    date: '2024-02-13',
    client: 'Global Systems',
    service: 'Bot Production',
    description: 'Moving bot to production environment',
    status: 'Pending',
    color: 'warning'
  }
])
</script>