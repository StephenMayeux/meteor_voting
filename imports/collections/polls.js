import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'polls.create': function(question, options) {
    return Polls.insert({
      createdAt: new Date(),
      updatedAt: new Date(),
      pollQuestion: question,
      pollOptions: options,
      ownerId: this.userId
    });
  },

  'polls.delete': function(poll) {
    return Polls.remove(poll);
  },

  'polls.update': function(poll, options) {
    return Polls.update(poll._id, { $push: { pollOptions: options } });
  }
});

export const Polls = new Mongo.Collection('polls');
