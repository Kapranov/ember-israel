EmberIsrael.StoriesNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('story');
  },
  actions: {
    create: function(story) {
      var route;
      route = this;
      return story.save().then(function() {
        return route.transitionTo('stories');
      });
    }
  }
});
