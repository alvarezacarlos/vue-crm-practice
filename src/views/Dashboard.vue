<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-6">Dashboard</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(stat, i) in stats"
        :key="i"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card>
          <v-card-text>
            <div class="text-overline mb-1">{{ stat.title }}</div>
            <div class="text-h4 mb-2">{{ stat.value }}</div>
            <div :class="['text-caption', stat.trend > 0 ? 'text-success' : 'text-error']">
              {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}% from last month
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>Revenue Overview</v-card-title>
          <v-card-text>
            <!-- <LineChart :chart-data="revenueData" :options="chartOptions" /> -->
            <LineChart :data="revenueData" :options="chartOptions" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Recent Activity</v-card-title>
          <v-list>
            <v-list-item
              v-for="(activity, i) in recentActivity"
              :key="i"
              :subtitle="activity.time"
            >
              <template v-slot:prepend>
                <v-avatar :color="activity.color" size="32">
                  <v-icon color="white" size="small">{{ activity.icon }}</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title>{{ activity.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Line as LineChart } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const stats = ref([
  { title: 'Total Customers', value: '1,482', trend: 12.5 },
  { title: 'Revenue', value: '$86,242', trend: 8.2 },
  { title: 'Active Orders', value: '64', trend: -2.4 },
  { title: 'Support Tickets', value: '12', trend: 4.1 },
])

const recentActivity = ref([
  { title: 'New customer registration', time: '5 minutes ago', icon: 'mdi-account-plus', color: 'primary' },
  { title: 'New order received', time: '15 minutes ago', icon: 'mdi-cart', color: 'success' },
  { title: 'Payment received', time: '1 hour ago', icon: 'mdi-currency-usd', color: 'info' },
  { title: 'New support ticket', time: '2 hours ago', icon: 'mdi-ticket', color: 'warning' },
])

const revenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [30000, 45000, 40000, 50000, 55000, 60000],
      borderColor: '#06414D',
      tension: 0.4,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
}
</script>