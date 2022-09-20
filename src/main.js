import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const app = createApp(App)
app.use(router)
app.component('Font', FontAwesomeIcon)
app.mount('#app')