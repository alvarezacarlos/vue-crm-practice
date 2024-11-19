<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="d-flex justify-space-between align-center">
        <h1 class="text-h4">Audit Management</h1>
        <v-btn color="primary" prepend-icon="mdi-plus">New Audit</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center">
            Active Audits
            <v-btn-group>
              <v-btn prepend-icon="mdi-filter">Filter</v-btn>
              <v-btn prepend-icon="mdi-export">Export</v-btn>
            </v-btn-group>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="audits"
              :items-per-page="5"
            >
              <template v-slot:item.status="{ item }">
                <v-chip
                  :color="getStatusColor(item.raw?.status)" 
                  size="small"
                >
                  {{ item.raw?.status || 'Unknown' }}
                </v-chip>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-btn
                  icon="mdi-eye"
                  variant="text"
                  size="small"
                  @click="viewAudit(item.raw)"
                ></v-btn>
                <v-btn
                  icon="mdi-pencil"
                  variant="text"
                  size="small"
                  @click="editAudit(item.raw)"
                ></v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const headers = [
  { title: 'Audit ID', key: 'id' },
  { title: 'Client', key: 'client' },
  { title: 'Type', key: 'type' },
  { title: 'Due Date', key: 'dueDate' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false }
]

const audits = ref([
  {
    id: 'AUD-001',
    client: 'Tech Solutions Inc.',
    type: 'External',
    dueDate: '2024-03-15',
    raw: { status: 'In Progress' }
  },
  {
    id: 'AUD-002',
    client: 'Digital Innovations',
    type: 'Internal',
    dueDate: '2024-03-20',
    raw: { status: 'Pending' }
  },
  {
    id: 'AUD-003',
    client: 'Global Systems',
    type: 'External',
    dueDate: '2024-03-25',
    raw: { status: 'Completed' }
  }
])

const getStatusColor = (status: string | undefined) => {
  switch (status) {
    case 'Completed':
      return 'success'
    case 'In Progress':
      return 'info'
    case 'Pending':
      return 'warning'
    default:
      return 'gray'
  }
}

const viewAudit = (audit: any) => {
  nextTick(() => {
    // Asegúrate de que el elemento existe antes de acceder a su parentNode
    const element = document.querySelector('.audit-details');
    if (element && element.parentNode) {
      console.log('Element found and can be safely accessed');
    }
  });
}

const editAudit = (audit: any) => {
  nextTick(() => {
    // Validación adicional para garantizar que el acceso sea seguro
    const element = document.querySelector('.audit-edit');
    if (element && element.parentNode) {
      console.log('Element found and can be safely accessed');
    }
  });
}
</script>
