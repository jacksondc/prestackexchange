/* ---------------------------------------------------- +/

## Questions ##

All code related to the Questions collection goes here.

/+ ---------------------------------------------------- */

Questions = new Meteor.Collection('questions');

// Allow/Deny

Questions.allow({
  insert: function(userId, doc){
    return can.createQuestion(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return can.editQuestion(userId, doc);
  },
  remove:  function(userId, doc){
    return can.removeQuestion(userId, doc);
  }
});

// Methods

Meteor.methods({
  createQuestion: function(question){
    if(can.createQuestion(Meteor.user()))
      Questions.insert(question);
  },
  removeQuestion: function(question){
    if(can.removeQuestion(Meteor.user(), question)){
      Questions.remove(question._id);
    } else {
      throw new Meteor.Error(403, 'You do not have the rights to delete this question.')
    }
  }
});
