import {createApp} from 'vue';
import App from '@/app/app.vue';
import {routerConfig} from "@/app/router";
import "@/app/styles/base.css"

const app = createApp(App)
app.use(routerConfig)
app.mount('#root');
