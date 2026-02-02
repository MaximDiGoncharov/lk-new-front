import { createRouter, createWebHistory } from 'vue-router'
import LogIn from "@/pages/auth/LogIn.vue";
import LoginDefault from "@/layout/LoginDefault.vue";
import ContentDefault from "@/layout/ContentDefault.vue";
import UserProfile from "@/pages/userProfile/UserProfile.vue";
import Internet from "@/pages/internet/Internet.vue";
import Service from "@/pages/service/Service.vue";
import Finances from "@/pages/finances/Finances.vue";



const routes = [
  {
    path: '/login',
    component: LoginDefault,
    children: [
      {
        path: '',
        name: 'login',
        component: LogIn
      }
    ]
  },
  {
    path: '/',
    component: ContentDefault,
    children: [
      {
        path: '/user',
        name: 'user-profile',
        component: UserProfile
      },
      {
        path: '/internet',
        name: 'internet',
        component: Internet
      },
      {
        path: '/service',
        name: 'service',
        component: Service
      },
      {
        path: '/finance',
        name: 'finance',
        component: Finances
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  // const sid = sessionStorage.getItem('sid') ?? null;
  // const path = ['/login'];
  // if (path.includes(to.path) || sid) {
  //   if (sid && to.path === '/') {
  //     return next('/internet');
  //   }
  //
  //   return next();
  // }
  // next('/login');
    return next();

});


export default router
