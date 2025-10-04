import './plugins/styles'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import store from './store'
import GlobalComponents from './plugins/global-components'
import VueSweetalert2 from 'vue-sweetalert2'
import VueApexCharts from 'vue3-apexcharts'
import CounterUp from 'vue3-autocounter'
import Router from './router/index'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  locale: 'en',
  messages
})

const app = createApp(App)
app.use(store).use(Router)
app.use(i18n)

// Library Components
app.use(VueSweetalert2)
app.use(VueApexCharts)
app.component('CounterUp', CounterUp)

// Custom Components & Directives
app.use(GlobalComponents)
app.use(BootstrapVue3)


app.mount('#app')
