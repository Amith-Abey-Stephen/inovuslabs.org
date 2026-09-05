import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'flowbite';

const app = createApp(App)

const CDN_BASE_URL = (
  import.meta.env.VITE_CDN_BASE_URL || "https://cdn.inovuslabs.org"
).replace(/\/+$/, "")

app.config.globalProperties.$cdn_base_url = CDN_BASE_URL
app.config.globalProperties.$cdn = CDN_BASE_URL
app.provide('cdn_base_url', CDN_BASE_URL)

app.use(router)

app.mount('#app')
