import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './plugins/router'
import i18n from './plugins/i18n'
// import 'amfe-flexible'
import { isMobile } from '@/common/utils'

loadFonts()

const app = createApp(App)

app.use(router)
    .use(vuetify)
    .use(i18n)
    .mount('#app')

app.config.globalProperties.isMobile = isMobile()
