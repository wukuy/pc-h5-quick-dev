import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import pages from '~pages'

const routes = setupLayouts(pages)

export default {
    install(app) {
        const router = createRouter({
            history: createWebHistory(import.meta.env.VITE_API_PUBLIC_PATH),
            routes
        })

        app.use(router)
    }
}
