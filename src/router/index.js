import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/dashboard';
import Tasks from '@/components/tasks';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { icon: 'fa-pie-chart' },
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks,
      meta: { icon: 'fa-tasks' },
    },
  ],
});
