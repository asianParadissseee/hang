import HomePage from "@pages/home-page.svelte"
import wrap from "svelte-spa-router/wrap";
export const routes = {
    "/": HomePage,
    "*": wrap({
        asyncComponent: ()=> import("@pages/notfound-page.svelte")
    })
}