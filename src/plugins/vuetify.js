// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
    install(vue) {
        const vuetify = createVuetify()

        vue.use(vuetify)
    }
})
