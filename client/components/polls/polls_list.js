import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Polls } from '../../../imports/collections/polls';
import { Link } from 'react-router';

class PollsList extends Component {
  renderList() {
    return this.props.polls.map(poll => {
      const url = `/polls/${poll._id}`
      return (
        <li className="list-group-item" key={poll._id}>
          <Link to={url}>{poll.pollQuestion}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('allPolls');
  return { polls: Polls.find({}).fetch() };
}, PollsList);
