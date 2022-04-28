import LoginViewVue from '@/views/LoginView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateCharacterView from '@/views/CreateCharacterView.vue';
import EditCharacterView from '@/views/EditCharacterView.vue';
import PageNotFound from '@/views/PageNotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      component: PageNotFound,
    },
    {
      path: '/',
      name: 'login',
      component: LoginViewVue,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/createcharacter',
      name: 'createcharacter',
      component: CreateCharacterView,
    },

    {
      path: '/character/:id',
      name: 'editcharacter',
      component: EditCharacterView,
    },
  ],
});

export default router;
