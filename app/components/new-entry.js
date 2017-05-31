import Ember from 'ember';

export default Ember.Component.extend({
  addNewEntry: false,
  actions: {
    entryFormShow() {
      this.set("addNewEntry", true);
    },
    saveEntry() {
      var params = {
        title: this.get("title"),
        date: this.get("date"),
        content: this.get("content")
      };
      this.set("addNewEntry", false);
      this.sendAction("saveEntry", params);
    }
  }
});
