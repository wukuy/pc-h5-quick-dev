import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

export default {
    install(app) {
        const i18n = createI18n({
            locale: 'en',
            messages
        })

        app.use(i18n)
    }
}
