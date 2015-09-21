Template.register.onRendered(function () {
  AutoForm.resetForm('registerForm');
});

Template.register.events({
  'submit #register-form': function (event, template) {
    event.preventDefault();

    var username = event.target.username.value;
    var email = event.target.email.value;
    var password = event.target.password.value;

    var user = {
      username: username,
      email: email,
      password: password
    };

    Accounts.createUser(user, function(err) {
      if (err) {
        FlashMessages.sendError(err.reason);
      } else {
        FlowRouter.go('/');
      }
    });
  }
});