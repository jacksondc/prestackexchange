/* ---------------------------------------------------- +/

## Publications ##

All publications-related code.

/+ ---------------------------------------------------- */

// Publish all questions

Meteor.publish('allQuestions', function() {
  return Questions.find();
});

// Publish a single question

Meteor.publish('singleQuestion', function(id) {
  return Questions.find(id);
});