import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CreatePolls extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const question = this.refs.question.value.trim();

    const options = Object.keys(this.refs).reduce((acc, key) => {
      if (key !== 'question') {
        let option = {};
        option[this.refs[key].value.trim()] = 0;
        acc.push(option);
      }
      return acc;
    }, []);

    Meteor.call('polls.create', question, options, (err, pollId) => {
      browserHistory.push('/');
    });
  }

  render() {
    return (
      <form>
        <input type="text" ref="question" />
        <input type="text" ref="option1" />
        <input type="text" ref="option2" />
        <input type="text" ref="option3" />
        <button className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    );
  }
}

export default CreatePolls;
