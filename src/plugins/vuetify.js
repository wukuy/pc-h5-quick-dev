// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
    install(app) {
        const vuetify = createVuetify()

        app.use(vuetify)
    }
})
