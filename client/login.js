Template.login.events({
  'submit #login-form': function (event) {
    event.preventDefault();

    var email = event.target.email.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(email,password,function(err){
      if (err) {
        FlashMessages.sendError(err.reason);
      } else {
        FlowRouter.go('/');
      }
    });
  }
});