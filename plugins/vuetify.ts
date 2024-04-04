// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const light = {
  light: true,
  dark: false,
  colors:{
      background: "#F8F7FA",
      primary: "#7367F0",
      surface: "#FFFFFF",
      secondary: "#03dac6",
      error: "#f44336",
      info: "#2196F3",
      success: "#4caf50",
      warning: "#fb8c00",
  }
}
const dark = {
    dark: true,
    light: false,
    colors:{
      background: "#25293C",
      primary: "#7367F0",
      surface: "#2F3349",
      secondary: "#03dac6",
      error: "#f44336",
      info: "#2196F3",
      success: "#4caf50",
      warning: "#fb8c00",
  }
}
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
          light,
          dark
        },
      },
  })
  app.vueApp.use(vuetify)
})