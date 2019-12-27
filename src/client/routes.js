import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home.component';
import UsersList from './components/users-list.component';

export default () => {
  return(
    <Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={UsersList} />
    </Fragment>
  );
};