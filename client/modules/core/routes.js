import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Dashboard from '../dashboard/components/App.js';
import Container from '../core/components/container.jsx';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <Route path="/some" component={Dashboard} />
    </Route>
  </Router>,
  document.getElementById('example')
);
