// For more information see: http://emberjs.com/guides/routing/

EmberIsrael.Router.map(function() {
  return this.resource('stories', function() {
    this.resource('story', {
      path: ':story_id'
    }, function() {
      return this.route('edit');
    });
    return this.route('new');
  });
});
