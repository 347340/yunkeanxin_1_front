import { createRouter, createWebHistory } from 'vue-router';
import ZhuiFeng from '@/components/ZhuiFeng.vue';
import HomeComponent from '@/components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/zhuiFeng',
    name: 'ZhuiFeng',
    component: ZhuiFeng
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
