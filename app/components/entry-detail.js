import Ember from 'ember';

export default Ember.Component.extend({
  updateEntryForm: false,
  actions: {
    updateEntryForm() {
      this.set("updateEntryForm", true);
    },
    update(entry) {
      var params = {
        title: this.get("title"),
        date: this.get("date"),
        content: this.get("content")
      };
      this.set("updateEntryForm", false);
      this.sendAction("update", entry, params);
    },
    
    delete(entry) {
      if(confirm("Are you sure you want to delete this entry?")) {
        this.sendAction("destroyEntry", entry);
      }
    },
    destroyComment(comment) {
      this.sendAction("destroyComment", comment);
    }
  }
});
