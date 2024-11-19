<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-6">Settings</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <v-card>
          <v-list nav>
            <v-list-item
              v-for="(item, i) in settingsSections"
              :key="i"
              :value="item"
              :prepend-icon="item.icon"
              :title="item.title"
              @click="currentSection = item.id"
              :active="currentSection === item.id"
            ></v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12" md="9">
        <v-card>
          <v-card-text>
            <!-- Profile Settings -->
            <div v-if="currentSection === 'profile'">
              <h2 class="text-h5 mb-4">Profile Settings</h2>
              <v-row>
                <v-col cols="12" md="4">
                  <v-avatar size="150" class="mb-4">
                    <v-img src="/avatar.png" alt="John Doe"></v-img>
                  </v-avatar>
                  <v-btn block>Change Avatar</v-btn>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field
                    v-model="profile.name"
                    label="Full Name"
                  ></v-text-field>
                  <v-text-field
                    v-model="profile.email"
                    label="Email"
                    type="email"
                  ></v-text-field>
                  <v-text-field
                    v-model="profile.position"
                    label="Position"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>

            <!-- Security Settings -->
            <div v-if="currentSection === 'security'">
              <h2 class="text-h5 mb-4">Security Settings</h2>
              <v-form>
                <v-text-field
                  v-model="security.currentPassword"
                  label="Current Password"
                  type="password"
                ></v-text-field>
                <v-text-field
                  v-model="security.newPassword"
                  label="New Password"
                  type="password"
                ></v-text-field>
                <v-text-field
                  v-model="security.confirmPassword"
                  label="Confirm New Password"
                  type="password"
                ></v-text-field>
                <v-switch
                  v-model="security.twoFactor"
                  label="Enable Two-Factor Authentication"
                ></v-switch>
              </v-form>
            </div>

            <!-- Notifications Settings -->
            <div v-if="currentSection === 'notifications'">
              <h2 class="text-h5 mb-4">Notification Preferences</h2>
              <v-list>
                <v-list-item v-for="(pref, i) in notificationPreferences" :key="i">
                  <template v-slot:prepend>
                    <v-icon :color="pref.color">{{ pref.icon }}</v-icon>
                  </template>
                  <v-list-item-title>{{ pref.title }}</v-list-item-title>
                  <template v-slot:append>
                    <v-switch v-model="pref.enabled"></v-switch>
                  </template>
                </v-list-item>
              </v-list>
            </div>

            <!-- Theme Settings -->
            <div v-if="currentSection === 'theme'">
              <h2 class="text-h5 mb-4">Theme Settings</h2>
              <v-radio-group v-model="themeSettings.mode" inline>
                <v-radio label="Light Mode" value="light"></v-radio>
                <v-radio label="Dark Mode" value="dark"></v-radio>
                <v-radio label="System Default" value="system"></v-radio>
              </v-radio-group>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="saveSettings">Save Changes</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentSection = ref('profile')

const settingsSections = [
  { id: 'profile', title: 'Profile', icon: 'mdi-account' },
  { id: 'security', title: 'Security', icon: 'mdi-shield-lock' },
  { id: 'notifications', title: 'Notifications', icon: 'mdi-bell' },
  { id: 'theme', title: 'Theme', icon: 'mdi-palette' }
]

const profile = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
  position: 'Senior Manager'
})

const security = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  twoFactor: false
})

const notificationPreferences = ref([
  { title: 'Email Notifications', icon: 'mdi-email', color: 'primary', enabled: true },
  { title: 'Push Notifications', icon: 'mdi-bell', color: 'info', enabled: true },
  { title: 'Task Reminders', icon: 'mdi-calendar-clock', color: 'warning', enabled: true },
  { title: 'System Updates', icon: 'mdi-update', color: 'success', enabled: false }
])

const themeSettings = ref({
  mode: 'light'
})

const saveSettings = () => {
  console.log('Saving settings...')
  // Implementation for saving settings
}
</script>