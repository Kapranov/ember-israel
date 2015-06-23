// For more information see: http://emberjs.com/guides/routing/

EmberIsrael.StoriesRoute = Ember.Route.extend({
  model: function() {
    this.store.find('story');
    return this.store.filter('story', function(story) {
      return !story.get('isNew');
    });
  },
  actions: {
    "delete": function(story) {
      return story.destroyRecord();
    }
  }
});
