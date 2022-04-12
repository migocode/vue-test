import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import HomeView from './components/HomeView.vue'
import SubsidiesView from './components/SubsidiesView.vue'
import FacilitiesView from './components/FacilitiesView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/subsidies', component: SubsidiesView },
    { path: '/facilities', component: FacilitiesView }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');
