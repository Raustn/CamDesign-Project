import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CameraView from '../components/CameraView.vue';
import LoginView from '../components/LoginView.vue';
import AlertView from '../components/AlertView.vue';
import DashboardView from '../components/DashBoardview.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/camera', component: CameraView },
  { path: '/login', component: LoginView },
  { path: '/alerts', component: AlertView },
  { path: '/dashboard', component: DashboardView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
