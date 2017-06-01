import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      entries: this.store.findAll("entry"),
      comments: this.store.findAll("comment")
  });
},
  actions: {
    saveEntry(params) {
      var newEntry = this.store.createRecord("entry", params);
      newEntry.save();
      this.transitionTo("index");
    }
  }
});
