// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const light = {
    light: true,
    dark: false,
    colors: {
        background: '#E1E3E7',
        primary: '#1409A0',
        secondary: '#4C40E6',
        accent: '#00632B',
        error: '#B01212',
        info: '#2196F3',
        success: '#00632B',
        warning: '#FB8C00',
    }
}
const dark = {
    dark: true,
    light: false,
    colors: {
        background: '#474848',
        primary: '#1409A0',
        secondary: '#4C40E6',
        accent: '#00632B',
        error: '#B01212',
        info: '#2196F3',
        success: '#00632B',
        warning: '#FB8C00',
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