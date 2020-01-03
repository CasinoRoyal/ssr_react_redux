import React from 'react';
import App from './app';
import Home from './pages/home.page';
import UsersList from './pages/users-list.page';
import AdminsList from './pages/admins-list.page';
import NotFoundPage from './pages/404.page';

export default [
  {
    component: App.component,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        loadData: AdminsList.loadData,
        component: AdminsList.component,
        path: '/admins'
      },
      {
        loadData: UsersList.loadData,
        component: UsersList.component,
        path: '/users'
      },
      {
        component: NotFoundPage
      }
    ]
  }
];