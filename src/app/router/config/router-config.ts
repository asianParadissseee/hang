import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes"

const routerConfig = createRouter({
    history: createWebHistory(),
    routes
})

export default routerConfig