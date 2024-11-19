// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'
// import '@mdi/font/css/materialdesignicons.css'

// const lightTheme = {
//   dark: false,
//   colors: {
//     primary: '#06414D',
//     secondary: '#FFC387',
//     background: '#FFFFFF',
//     surface: '#FFFFFF',
//     error: '#B00020',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//   }
// }

// const darkTheme = {
//   dark: true,
//   colors: {
//     primary: '#06414D',
//     secondary: '#FFC387',
//     background: '#02191E',
//     surface: '#02191E',
//     error: '#CF6679',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//   }
// }

// export default createVuetify({
//   components,
//   directives,
//   icons: {
//     defaultSet: 'mdi',
//     aliases,
//     sets: {
//       mdi,
//     },
//   },
//   theme: {
//     defaultTheme: 'light',
//     themes: {
//       light: lightTheme,
//       dark: darkTheme,
//     },
//   },
// })


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#06414D',
          secondary: '#FFC387',
          accent: '#06414d',
          error: '#fc4b6c',
          success: '#8ae250',
          background: '#FFFFFF',
        },
      },
      dark: {
        colors: {
          primary: '#FFC387',
          secondary: '#06414D',
          accent: '#06414d',
          error: '#fc4b6c',
          success: '#8ae250',
          background: '#02191E',
        },
      },
    },
  },
})