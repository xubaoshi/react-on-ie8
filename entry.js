require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');

/**
 * CANNOT use `import` to import `react` or `react-dom`,
 * because `import` will run `react` before `require('es5-shim')`.
 */
// import React from 'react';
// import ReactDOM from 'react-dom';

const React = require('react');
const ReactDOM = require('react-dom');
const {Router} = require('react-router');
const createHistory = require('history/lib/createHashHistory');
const App = require('./App.jsx');
const Routes = require('./routes.jsx')
const history = createHistory()

ReactDOM.render(
  <Router children={Routes} history={history}></Router>,
  document.getElementById('app')
);