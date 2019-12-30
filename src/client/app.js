import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header.component';
import { fetchCurrentUser } from './redux/actions/actions';

const App = ({ route }) => {
  return(
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  )
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};