// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default {
    install(app) {
        const vuetify = createVuetify({
            theme: {
                defaultTheme: 'darkTheme',
                themes: {
                    darkTheme: {
                        dark: true,
                        colors: {
                            primary: '#00FF1A',
                            background: '#000'
                        }
                    }
                }
            }
        })
        app.use(vuetify)
    }
}
