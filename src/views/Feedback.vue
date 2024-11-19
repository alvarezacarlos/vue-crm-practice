<template>
  <v-container fluid>
    <v-row class="py-2">
      <v-col cols="12" sm="6" class="d-flex align-center">
        <h1 class="text-h6 text-sm-h4 m-0">Feedback Management</h1>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-end">
        <v-btn color="primary" prepend-icon="mdi-plus" class="text-body-2 text-sm-body-1">
          ADD Feedback
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            <v-row class="align-center" no-gutters>
              <v-col cols="12" sm="6" class="text-h6 text-sm-h5">
                Recent Feedback
              </v-col>
              <v-col cols="12" sm="6" class="d-flex justify-end">
                <v-btn-group>
                  <v-btn prepend-icon="mdi-filter" class="ma-1">Filter</v-btn>
                  <v-btn prepend-icon="mdi-export" class="ma-1">Export</v-btn>
                </v-btn-group>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-expansion-panels>
              <v-expansion-panel v-for="feedback in feedbackList" :key="feedback.id">
                <v-expansion-panel-title>
                  <v-row no-gutters>
                    <v-col cols="4">{{ feedback.client }}</v-col>
                    <v-col cols="3">{{ feedback.date }}</v-col>
                    <v-col cols="3">
                      <v-chip :color="getFeedbackColor(feedback.type)" size="small">
                        {{ feedback.type }}
                      </v-chip>
                    </v-col>
                  </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="mb-4">{{ feedback.content }}</div>
                  <div class="d-flex justify-space-between align-center">
                    <div class="text-caption">Recorded by: {{ feedback.recordedBy }}</div>
                    <v-btn-group>
                      <v-btn size="small" prepend-icon="mdi-reply">Reply</v-btn>
                      <v-btn size="small" prepend-icon="mdi-flag">Flag</v-btn>
                    </v-btn-group>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mb-4">
          <v-card-title>Feedback Summary</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="stat in feedbackStats" :key="stat.title">
                <template v-slot:prepend>
                  <v-icon :color="stat.color">{{ stat.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ stat.title }}</v-list-item-title>
                <template v-slot:append>
                  <span class="text-h6">{{ stat.value }}</span>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-card>
          <v-card-title>Trending Topics</v-card-title>
          <v-card-text>
            <v-chip-group>
              <v-chip v-for="topic in trendingTopics" :key="topic.name" :color="topic.color">
                {{ topic.name }} ({{ topic.count }})
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const feedbackList = ref([
  {
    id: 1,
    client: 'Tech Solutions Inc.',
    date: '2024-02-15',
    type: 'Positive',
    content: 'Very satisfied with the bot performance and response time.',
    recordedBy: 'John Smith'
  },
  {
    id: 2,
    client: 'Digital Innovations',
    date: '2024-02-14',
    type: 'Improvement',
    content: 'Bot needs better handling of edge cases.',
    recordedBy: 'Sarah Johnson'
  },
  {
    id: 3,
    client: 'Global Systems',
    date: '2024-02-13',
    type: 'Issue',
    content: 'Connection issues during peak hours.',
    recordedBy: 'Mike Wilson'
  }
])

const feedbackStats = ref([
  { title: 'Total Feedback', value: '156', icon: 'mdi-message-text', color: 'primary' },
  { title: 'Positive', value: '89', icon: 'mdi-thumb-up', color: 'success' },
  { title: 'Improvements', value: '45', icon: 'mdi-trending-up', color: 'warning' },
  { title: 'Issues', value: '22', icon: 'mdi-alert-circle', color: 'error' }
])

const trendingTopics = ref([
  { name: 'Performance', count: 45, color: 'primary' },
  { name: 'UI/UX', count: 32, color: 'secondary' },
  { name: 'Reliability', count: 28, color: 'info' },
  { name: 'Support', count: 24, color: 'success' }
])

const getFeedbackColor = (type: string) => {
  switch (type) {
    case 'Positive':
      return 'success'
    case 'Improvement':
      return 'warning'
    case 'Issue':
      return 'error'
    default:
      return 'gray'
  }
}
</script>