import { Meteor } from 'meteor/meteor';
import { Polls } from '../imports/collections/polls';

Meteor.startup(() => {
  // add publications here
  
  Meteor.publish('allPolls', function() {
    return Polls.find({});
  });

  Meteor.publish('userPolls', function() {
    return Polls.find({ ownerId: this.userId });
  });
});
