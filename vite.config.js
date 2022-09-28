import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import eslint from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0'
    },
    plugins: [
        vue(),
        eslint(),
        vuetify()
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
