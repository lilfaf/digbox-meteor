FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('layout', { main: 'home' });
  }
});

FlowRouter.route('/tracks', {
  name: 'tracks',
  triggersEnter: [authorizeUser],
  action: function() {
    BlazeLayout.render('layout', { main: 'tracks' });
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action: function() {
    BlazeLayout.render('layout', { main: 'register' });
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    BlazeLayout.render('layout', { main: 'login' });
  }
});

function authorizeUser() {
  if (!Meteor.userId()) {
    FlashMessages.sendError('You need to login or register');
    FlowRouter.go('login');
  }
}