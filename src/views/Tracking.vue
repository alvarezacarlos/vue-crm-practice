<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="d-flex justify-space-between align-center">
        <h1 class="text-h4">Tracking & Follow-ups</h1>
        <v-btn color="primary" prepend-icon="mdi-plus">New Task</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>Active Tasks</v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="tasks"
              :items-per-page="5"
            >
              <template v-slot:item.priority="{ item }">
                <v-chip
                  :color="getPriorityColor(item.priority)" 
                  size="small"
                >
                  {{ item.priority }} 
                </v-chip>
              </template>
              <template v-slot:item.progress="{ item }">
                <v-progress-linear
                  :model-value="item.progress"
                  :color="getProgressColor(item.progress)"
                  height="20"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ value }}%</strong>
                  </template>
                </v-progress-linear>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-btn
                  icon="mdi-eye"
                  variant="text"
                  size="small"
                  @click="viewTask(item)"
                ></v-btn>
                <v-btn
                  icon="mdi-pencil"
                  variant="text"
                  size="small"
                  @click="editTask(item)"
                ></v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mb-4">
          <v-card-title>Task Summary</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="stat in taskStats" :key="stat.title">
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
          <v-card-title>Upcoming Deadlines</v-card-title>
          <v-list lines="two">
            <v-list-item
              v-for="deadline in upcomingDeadlines"
              :key="deadline.id"
              :subtitle="deadline.date"
            >
              <template v-slot:prepend>
                <v-avatar :color="deadline.color" size="32">
                  <v-icon color="white" size="small">{{ deadline.icon }}</v-icon>
                </v-avatar>
              </template>
              <v-list-item-title>{{ deadline.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const headers = [
  { title: 'Task', key: 'title' },
  { title: 'Assignee', key: 'assignee' },
  { title: 'Priority', key: 'priority' },
  { title: 'Due Date', key: 'dueDate' },
  { title: 'Progress', key: 'progress' },
  { title: 'Actions', key: 'actions', sortable: false }
]

const tasks = ref([
  {
    id: 1,
    title: 'Bot Performance Review',
    assignee: 'John Smith',
    priority: 'High',
    dueDate: '2024-02-20',
    progress: 75
  },
  {
    id: 2,
    title: 'Client Meeting Follow-up',
    assignee: 'Sarah Johnson',
    priority: 'Medium',
    dueDate: '2024-02-22',
    progress: 30
  },
  {
    id: 3,
    title: 'Documentation Update',
    assignee: 'Mike Wilson',
    priority: 'Low',
    dueDate: '2024-02-25',
    progress: 90
  }
])

const taskStats = ref([
  { title: 'Total Tasks', value: '32', icon: 'mdi-checkbox-marked', color: 'primary' },
  { title: 'In Progress', value: '12', icon: 'mdi-progress-clock', color: 'info' },
  { title: 'Due Today', value: '5', icon: 'mdi-clock-alert', color: 'warning' },
  { title: 'Completed', value: '15', icon: 'mdi-check-circle', color: 'success' }
])

const upcomingDeadlines = ref([
  {
    id: 1,
    title: 'Performance Review',
    date: 'Due in 2 days',
    icon: 'mdi-clock-fast',
    color: 'error'
  },
  {
    id: 2,
    title: 'Client Meeting',
    date: 'Due in 4 days',
    icon: 'mdi-account-group',
    color: 'warning'
  },
  {
    id: 3,
    title: 'Report Submission',
    date: 'Due in 5 days',
    icon: 'mdi-file-document',
    color: 'info'
  }
])

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'error'
    case 'Medium':
      return 'warning'
    case 'Low':
      return 'success'
    default:
      return 'gray'
  }
}

const getProgressColor = (progress: number) => {
  if (progress >= 75) return 'success'
  if (progress >= 50) return 'info'
  if (progress >= 25) return 'warning'
  return 'error'
}

const viewTask = (task: any) => {
  console.log('View task:', task)
}

const editTask = (task: any) => {
  console.log('Edit task:', task)
}
</script>
