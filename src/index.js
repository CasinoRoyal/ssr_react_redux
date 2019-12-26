const express = require('express');
const React = require('react');
const renderToString = require('react-dom').renderToString;
const Home = require('./client/components/home.component').default;

const app = express();



app.listen(3000, () => console.log('Server running'));