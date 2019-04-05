import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import '../assets/stylesheets/application.scss';

import carsReducer from './reducers/cars_reducer';

const identityReducer = (state = null, action) => state;

const reducers = combineReducers({
  cars: carsReducer,
  garageName: identityReducer
});

const initialState = {
  cars: [],
  garageName: "Packer's garage" // TODO: prompt user || anon garage
};

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        TODO
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
