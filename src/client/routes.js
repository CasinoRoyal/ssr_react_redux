import React from 'react';
import Home from './pages/home.page';
import UsersList from './pages/users-list.page';

export default [
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
];