import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Polls } from '../../../imports/collections/polls';

class PollsDetail extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          {this.props.poll.pollQuestion}
        </h1>
      </div>
    );
  }
}

export default createContainer((props) => {
  const { pollId } = props.params;
  Meteor.subscribe('allPolls');

  return { poll: Polls.findOne(pollId) };
}, PollsDetail);
