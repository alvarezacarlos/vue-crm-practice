<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="d-flex justify-space-between align-center">
        <h1 class="text-h4">Reports & Analytics</h1>
        <v-btn-group>
          <v-btn color="primary" prepend-icon="mdi-file-export">Export</v-btn>
          <v-btn color="secondary" prepend-icon="mdi-email">Share</v-btn>
        </v-btn-group>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Bot Performance</v-card-title>
          <!-- Solo renderizar el gráfico si los datos son válidos -->
          <v-card-text v-if="botPerformanceData && botPerformanceData.labels.length > 0 && botPerformanceData.datasets.length > 0">
            <LineChart :chart-data="botPerformanceData" :options="chartOptions" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Issue Distribution</v-card-title>
          <!-- Solo renderizar el gráfico si los datos son válidos -->
          <v-card-text v-if="issueDistributionData && issueDistributionData.labels.length > 0 && issueDistributionData.datasets.length > 0">
            <DoughnutChart :chart-data="issueDistributionData" :options="chartOptions" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center">
            Performance Metrics
            <v-btn-group>
              <v-btn prepend-icon="mdi-filter">Filter</v-btn>
              <v-btn prepend-icon="mdi-refresh">Refresh</v-btn>
            </v-btn-group>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="metrics"
              :items-per-page="5"
            >
              <template v-slot:item.trend="{ item }">
                <!-- Verificar si la propiedad trend está definida antes de acceder a ella -->
                <v-icon
                  :color="item.raw?.trend > 0 ? 'success' : 'error'"
                >
                  {{ item.raw?.trend > 0 ? 'mdi-trending-up' : 'mdi-trending-down' }}
                </v-icon>
                {{ item.raw?.trend }}%
              </template>
              <template v-slot:item.status="{ item }">
                <v-chip
                  :color="getStatusColor(item.raw?.status)"
                  size="small"
                >
                  {{ item.raw?.status }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Line as LineChart, Doughnut as DoughnutChart } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

// Headers for the data table
const headers = [
  { title: 'Metric', key: 'name' },
  { title: 'Current Value', key: 'value' },
  { title: 'Trend', key: 'trend' },
  { title: 'Status', key: 'status' }
]

// Sample metrics data with default empty values for missing fields
const metrics = ref([
  {
    name: 'Response Time',
    value: '1.2s',
    trend: -5,  // Make sure this is always defined
    status: 'Good'
  },
  {
    name: 'Success Rate',
    value: '98.5%',
    trend: 2,  // Make sure this is always defined
    status: 'Excellent'
  },
  {
    name: 'User Satisfaction',
    value: '4.5/5',
    trend: 3,  // Make sure this is always defined
    status: 'Good'
  }
])

// Data for Bot Performance chart (initialized with empty arrays to avoid undefined errors)
const botPerformanceData = ref({
  labels: [],  // Empty array to start
  datasets: [] // Empty array to start
})

// Data for Issue Distribution chart (initialized with empty arrays to avoid undefined errors)
const issueDistributionData = ref({
  labels: [],  // Empty array to start
  datasets: [] // Empty array to start
})

// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const
    }
  }
}

// Function to determine color for the status
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Excellent':
      return 'success'
    case 'Good':
      return 'info'
    case 'Warning':
      return 'warning'
    case 'Critical':
      return 'error'
    default:
      return 'gray'
  }
}

// Watch for updates to the data and set default values if necessary
watch(botPerformanceData, (newData) => {
  if (!newData.labels || !newData.datasets) {
    botPerformanceData.value = { labels: [], datasets: [] }
  }
})
watch(issueDistributionData, (newData) => {
  if (!newData.labels || !newData.datasets) {
    issueDistributionData.value = { labels: [], datasets: [] }
  }
})
</script>

<style scoped>
/* Custom styling can be added here */
</style>
