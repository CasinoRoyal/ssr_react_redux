import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/create-store';
import Routes from './client/routes';

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    if (!route.loadData) return null;

    Promise.all(promises).then(() => {
      return route.loadData(store);
    })
  })

  res.send(renderer(req.path, store));
});

app.listen(3000, () => console.log('Server running'));