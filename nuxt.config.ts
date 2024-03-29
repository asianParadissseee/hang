// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";
import {resolve} from "node:url";

export default defineNuxtConfig({
    devtools: {enabled: true},
    alias: {
        "@": resolve(__dirname, "/")
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/commons/styles/base.css"]
})
