import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/userProfile/UserProfile.vue') },
  { path: '/login', component: () => import('@/pages/auth/LogIn.vue') },
  { path: '/user', component: () => import('@/pages/userProfile/UserProfile.vue') },
  { path: '/internet', component: () => import('@/pages/internet/Internet.vue') },
  { path: '/service', component: () => import('@/pages/service/Service.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const sid = sessionStorage.getItem('sid') ?? null;
  const path = ['/login'];
  if (path.includes(to.path) || sid) {
    if (sid && to.path === '/') {
      return next('/internet');
    }

    return next();
  }
  next('/login');
});


export default router
