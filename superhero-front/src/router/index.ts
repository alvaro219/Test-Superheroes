import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Superheroes from '../views/Superheroes.vue';
import CreateUser from '../views/CreateUser.vue';
import EditUser from '../views/EditUser.vue';
import Users from '../views/Users.vue';
import { useAuthStore } from '../stores/auth';
import Signup from '../views/Signup.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/superheroes', name: 'Superheroes', component: Superheroes },
  { path: '/users/create', name: 'CreateUser', component: CreateUser },
  { path: '/users/:id/edit', name: 'EditUser', component: EditUser },
  { path: '/users', name: 'Users', component: Users, meta: { requiresAuth: true } },
  { path: '/signup', name: 'Signup', component: Signup},
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
