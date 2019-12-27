import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home.component';

export default () => {
  return(
    <Fragment>
      <Route exact path='/' component={Home} />
    </Fragment>
  );
};