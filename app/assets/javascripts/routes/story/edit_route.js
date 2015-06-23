EmberIsrael.StoryEditRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('story');
  },
  actions: {
    update: function(story) {
      return story.save();
    }
  }
});
