import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Polls } from '../imports/collections/polls';
import CreatePolls from './components/polls/polls_create';
import PollsList from './components/polls/polls_list';
import App from './components/app';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={PollsList} />
      <Route path='create' component={CreatePolls} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
