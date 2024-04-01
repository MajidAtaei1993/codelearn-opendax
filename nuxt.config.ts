// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
    ssr: false,
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
        server:{
            hmr:{
                port: 3008
            }
        },
        vue: {
        template: {
            transformAssetUrls,
            },
        },
    },
})
