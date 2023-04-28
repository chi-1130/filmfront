import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios' //追記
// import Vuex from 'vuex' //追記
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// import './assets/main.css'

const app = createApp(App)

// axiosを使用できるように定義
app.config.globalProperties.$axios = axios.create({
    baseURL: 'http://192.168.0.210:3000/'
  })

app.use(router)
app.use(store)

app.mount('#app')
