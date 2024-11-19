<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="d-flex align-center justify-space-between">
        <h1 class="text-h4">Clients</h1>
        <v-btn color="primary" prepend-icon="mdi-plus">Add Client</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="search"
                  label="Search Clients"
                  prepend-inner-icon="mdi-magnify"
                  single-line
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8" class="d-flex justify-end">
                <v-btn-group>
                  <v-btn prepend-icon="mdi-filter">Filter</v-btn>
                  <v-btn prepend-icon="mdi-export">Export</v-btn>
                </v-btn-group>
              </v-col>
            </v-row>

            <!-- <v-data-table
              :headers="headers"
              :items="clients"
              :search="search"
              class="mt-4"
            >
              <template v-slot:item.status="{ item }">
                <v-chip
                  :color="getStatusColor(item.raw.status)"
                  size="small"
                >
                  {{ item.raw.status }}
                </v-chip>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-btn
                  icon="mdi-eye"
                  variant="text"
                  size="small"
                  @click="viewClient(item.raw)"
                ></v-btn>
                <v-btn
                  icon="mdi-pencil"
                  variant="text"
                  size="small"
                  @click="editClient(item.raw)"
                ></v-btn>
              </template>
            </v-data-table> -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')

const headers = [
  { title: 'Client Name', key: 'name' },
  { title: 'Contact Person', key: 'contact' },
  { title: 'Email', key: 'email' },
  { title: 'Status', key: 'status' },
  { title: 'Projects', key: 'projects' },
  { title: 'Actions', key: 'actions', sortable: false }
]

const clients = [
  {
    id: 1,
    name: 'Tech Solutions Inc.',
    contact: 'John Smith',
    email: 'john@techsolutions.com',
    status: 'Active',
    projects: 3
  },
  {
    id: 2,
    name: 'Digital Innovations',
    contact: 'Sarah Johnson',
    email: 'sarah@digitalinno.com',
    status: 'Pending',
    projects: 1
  },
  {
    id: 3,
    name: 'Global Systems',
    contact: 'Mike Wilson',
    email: 'mike@globalsys.com',
    status: 'Inactive',
    projects: 0
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'success'
    case 'Pending':
      return 'warning'
    case 'Inactive':
      return 'error'
    default:
      return 'gray'
  }
}

const viewClient = (client: any) => {
  console.log('View client:', client)
}

const editClient = (client: any) => {
  console.log('Edit client:', client)
}
</script>