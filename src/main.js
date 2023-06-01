import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { AVPlugin } from 'vue-audio-visual'

createApp(App).use(AVPlugin).mount('#app')
