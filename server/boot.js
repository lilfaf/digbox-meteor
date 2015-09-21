Meteor.startup(function () {
  // code to run on server at startup
  Meteor.publish('tracks', function() {
    return Tracks.find();
  });
});