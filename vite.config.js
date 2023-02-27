import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import eslint from 'vite-plugin-eslint'
import components from 'unplugin-vue-components/vite'
import path from 'path'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0'
    },
    plugins: [
        components(),
        vue(),
        eslint(),
        vuetify(),
        Pages(),
        Layouts(),
        AutoImport({
            dts: true,
            eslintrc: {
                enabled: true
            },
            imports: [
                'vue',
                'vue-i18n',
                'vue-router'
            ]
        }),
        vueI18n({
            include: path.resolve(__dirname, './src/locales/**')
        })
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            images: path.join(__dirname, 'src/assets/images'),
            utils: path.join(__dirname, 'src/common/utils'),
            assets: path.join(__dirname, 'src/assets'),
            models: path.join(__dirname, 'src/models')
        }
    }
})
