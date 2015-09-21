Template.tracks.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('tracks');
  });
});

Template.tracks.helpers({
  tracks: function() {
    return Tracks.find();
  }
});