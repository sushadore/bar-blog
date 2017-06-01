import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set("addNewComment", true);
    },
    saveComment() {
      var params = {
        name: this.get("name"),
        date: this.get("date"),
        content: this.get("content"),
        entry: this.get("entry")
      };
      this.set("addNewComment", false);
      this.sendAction("saveComment", params);
    }
  }
});
