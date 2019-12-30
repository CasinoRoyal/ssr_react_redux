import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import Routes from './routes';
import reducer from './redux/reducers';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(
  reducer, 
  window.INITIAL_STATE, 
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));