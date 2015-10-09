/* ---------------------------------------------------- +/

## question ##

Code related to the question template

/+ ---------------------------------------------------- */

Template.question.created = function () {
  //
};

Template.question.helpers({
  
  myHelper: function () {
    //
  }

});

Template.question.rendered = function () {
  //
};

Template.question.events({

  'click .delete': function(e, instance){
    var question = this;
    e.preventDefault();
    Meteor.call('removequestion', question, function(error, result){
      alert('question deleted.');
      Router.go('/questions');
    });
  }

});