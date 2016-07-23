import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Polls } from '../imports/collections/polls';

const routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={App}>
      <IndexRoute component={PollsList} />
      <Route path='polls/new' component={PollsCreate} />
      <Route path='polls/:pollId' component={PollsView} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
