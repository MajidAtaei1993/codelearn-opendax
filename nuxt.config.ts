// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
    devtools: { enabled: true },
    //...
    build: {
        transpile: ['vuetify'],
    },
    css:[
        '~/assets/style/main.scss'
    ],
    modules: [
        (_options, nuxt) => {
        nuxt.hooks.hook('vite:extendConfig', (config) => {
            // @ts-expect-error
            config.plugins.push(vuetify({ autoImport: true }))
        })
        },
        //...
    ],
    vite: {
        vue: {
        template: {
            transformAssetUrls,
            },
        },
    },
})
