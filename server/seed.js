Meteor.startup(function() {
  // generate seed data
  if (Tracks.find().count() === 0) {
    Tracks.insert({ slug: 'track-1', title: 'Track 1' });
    Tracks.insert({ slug: 'track-2', title: 'Track 2' });
    Tracks.insert({ slug: 'track-3', title: 'Track 3' });
  }
});
