/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Filters

var filters = {

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      alert('Please Log In First.')
      this.stop();
    } else {
      this.next();
    }
  }

}

// Routes

Router.map(function() {

  // Questions

  this.route('questions', {
    waitOn: function () {
      return Meteor.subscribe('allQuestions');
    },
    data: function () {
      return {
        questions: Questions.find()
      }
    }
  });

  this.route('question', {
    path: '/questions/:_id',
    waitOn: function () {
      return Meteor.subscribe('singleQuestion', this.params._id);
    },
    data: function () {
      return {
        question: Questions.findOne(this.params._id)
      }
    }
  });


  // Pages

  this.route('homepage', {
    path: '/'
  });

  this.route('content');

  // Users

  this.route('login');

  this.route('signup');

  this.route('forgot');

});
