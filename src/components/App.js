import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store from '../store';
import Blogs from './Blogs';
import BlogDetails from './BlogDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <Router>
          <Switch>
            <Route path="/blog/:id" component={BlogDetails} />
            <Route path="/" component={Blogs} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}
