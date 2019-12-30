import React from 'react';
import App from './app';
import Home from './pages/home.page';
import UsersList from './pages/users-list.page';

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
        loadData: UsersList.loadData,
        path: '/users',
        component: UsersList.component
      }
    ]
  }
];